package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path"
	"strings"
)

// Raw emoji from emoji.json
type emoji struct {
	Codes string
	Char  string
	Name  string
	Group string
}

// Sorted and organized emoji with variant
type emojiSet struct {
	Code     string
	Char     string
	Name     string
	Variants []emoji
}

func main() {
	emojis, err := getEmojis()
	if err != nil {
		log.Panicf("Failed to download emojis %v", err)
	}
	sortedEmojis := sortEmojis(emojis)
	writeSorted(sortedEmojis)
}

func getEmojis() ([]emoji, error) {
	log.Println("Downloading emojis from emoji.json")

	// Making request
	resp, err := http.Get("https://unpkg.com/emoji.json@13.1.0/emoji.json")
	if err != nil {
		return []emoji{}, err
	}
	defer resp.Body.Close()

	statusCode := resp.StatusCode
	if statusCode != http.StatusOK {
		return []emoji{}, errors.New(fmt.Sprintf("Status code of %v", statusCode))
	}

	// Parsing json
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return []emoji{}, err
	}

	var emojis []emoji
	err = json.Unmarshal(body, &emojis)
	if err != nil {
		return []emoji{}, err
	}
	log.Println("Downloaded emojis from emoji.json")
	return emojis, nil
}

func sortEmojis(emojis []emoji) map[string][]emojiSet {
	log.Println("Sorting emojis")

	var (
		subEmojis = []emoji{}
		sets      = map[string][]emojiSet{}
	)

	// Adding root sets and adding emojis that should be sub emojis
	for _, emojiData := range emojis {
		codes := strings.Split(emojiData.Codes, " ")
		if len(codes) != 1 {
			if len(codes) == 2 {
				if codes[1] == "FE0F" {
					sets[emojiData.Group] = append(sets[emojiData.Group], emojiSet{
						Code: strings.Join(codes[0:1], " "),
						Char: emojiData.Char,
						Name: emojiData.Name,
					})
				}
			}
			subEmojis = append(subEmojis, emojiData)
		} else {
			sets[emojiData.Group] = append(sets[emojiData.Group], emojiSet{
				Code: codes[0],
				Char: emojiData.Char,
				Name: emojiData.Name,
			})
		}
	}

	// Adding subsets root main sets
	for _, subEmojiData := range subEmojis {
		codes := strings.Split(subEmojiData.Codes, " ")
		rootCode := codes[0]
		for category, groupSets := range sets {
			for i, emojiData := range groupSets {
				if emojiData.Code == rootCode {
					sets[category][i].Variants = append(sets[category][i].Variants, subEmojiData)
				}
			}
		}
	}

	// Removing duplicate sets
	addedNames := []string{}
	patchedSets := map[string][]emojiSet{}
	for category, groupSets := range sets {
		for _, emojiData := range groupSets {
			duplicate := false
			for _, name := range addedNames {
				if name == emojiData.Name {
					duplicate = true
					break
				}
			}
			if !duplicate {
				addedNames = append(addedNames, emojiData.Name)
				patchedSets[category] = append(patchedSets[category], emojiData)
			}
		}
	}

	// Removing duplicate variants
	for category, groupSets := range patchedSets {
		for i, set := range groupSets {
			patchedVariants := []emoji{}
			addedNames := []string{}
			for _, variant := range set.Variants {
				duplicate := false
				for _, name := range addedNames {
					if name == variant.Name {
						duplicate = true
						break
					}
				}
				if !duplicate {
					patchedVariants = append(patchedVariants, variant)
					addedNames = append(addedNames, variant.Name)
				}
			}
			patchedSets[category][i].Variants = patchedVariants
		}
	}

	log.Println("Sorted emojis")
	return patchedSets
}

func writeSorted(sortedEmojis map[string][]emojiSet) error {
	fpath := path.Join("..", "src", "emojiData.ts")
	log.Println("Writing to", fpath)

	typescript := `export interface EmojiSet {
  name: string
  char: string
  variants: Emoji[]
}

export interface Emoji {
  name: string
  char: string
  group: string
}

export const emojis: Record<string, EmojiSet[]> = {
	`
	for category, sets := range sortedEmojis {
		setTS := fmt.Sprintf("%q: [", category)
		for _, set := range sets {
			varintTS := "["
			for _, varint := range set.Variants {
				varintTS += fmt.Sprintf(
					"{name: %q, char: %q, group: %q},",
					varint.Name,
					varint.Char,
					varint.Group,
				)
			}
			varintTS += "]"
			setTS += fmt.Sprintf(
				"{name: %q, char: %q, variants: %v},",
				set.Name,
				set.Char,
				varintTS,
			)
		}
		setTS += "],"
		typescript += setTS
	}
	typescript += "}"

	// Remove it if it exists
	_, err := os.Stat(fpath)
	if !os.IsNotExist(err) {
		err := os.Remove(fpath)
		log.Println("Removed", fpath)
		if err != nil {
			return err
		}
	}

	file, err := os.Create(fpath)
	if err != nil {
		return err
	}
	defer file.Close()

	_, err = file.WriteString(typescript)
	if err != nil {
		return err
	}

	log.Println("Wrote changes to", fpath)

	return nil
}
