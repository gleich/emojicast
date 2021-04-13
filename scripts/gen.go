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
	Group    string
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

func sortEmojis(emojis []emoji) []emojiSet {
	log.Println("Sorting emojis")

	var (
		subEmojis = []emoji{}
		sets      = []emojiSet{}
	)

	// Adding root sets
	for _, emojiData := range emojis {
		codes := strings.Split(emojiData.Codes, " ")
		if len(codes) != 1 {
			if len(codes) == 2 {
				if codes[1] == "FE0F" {
					sets = append(sets, emojiSet{
						Code:  strings.Join(codes[0:1], " "),
						Char:  emojiData.Char,
						Name:  emojiData.Name,
						Group: emojiData.Group,
					})
				}
			}
			subEmojis = append(subEmojis, emojiData)
		} else {
			sets = append(sets, emojiSet{
				Code:  codes[0],
				Char:  emojiData.Char,
				Name:  emojiData.Name,
				Group: emojiData.Group,
			})
		}
	}

	// Adding subsets
	for _, emojiData := range subEmojis {
		codes := strings.Split(emojiData.Codes, " ")
		rootCode := codes[0]
		for i, set := range sets {
			if set.Code == rootCode {
				sets[i].Variants = append(sets[i].Variants, emojiData)
			}
		}
	}

	// Removing duplicate sets
	addedNames := []string{}
	patchedSets := []emojiSet{}
	for _, set := range sets {
		duplicate := false
		for _, name := range addedNames {
			if name == set.Name {
				duplicate = true
				break
			}
		}
		if !duplicate {
			addedNames = append(addedNames, set.Name)
			patchedSets = append(patchedSets, set)
		}
	}

	// Removing duplicate varints
	for i, set := range patchedSets {
		patchedVarints := []emoji{}
		addedNames := []string{}
		for _, varint := range set.Variants {
			duplicate := false
			for _, name := range addedNames {
				if name == varint.Name {
					duplicate = true
					break
				}
			}
			if !duplicate {
				patchedVarints = append(patchedVarints, varint)
				addedNames = append(addedNames, varint.Name)
			}
		}
		patchedSets[i].Variants = patchedVarints
	}

	log.Println("Sorted emojis")
	return patchedSets
}

func writeSorted(sortedEmojis []emojiSet) error {
	fpath := path.Join("..", "src", "emojiData.ts")
	log.Println("Writing to", fpath)

	typescript := `export interface EmojiSet {
  char: string
  group: string
  variants: Emoji[]
}

export interface Emoji {
  char: string
  group: string
}

export const emojis: EmojiSet[] = [
	`
	for _, set := range sortedEmojis {
		varintTS := "["
		for _, varint := range set.Variants {
			varintTS += fmt.Sprintf(
				"{char: '%v', group: '%v'},",
				varint.Char,
				varint.Group,
			)
		}
		varintTS += "]"
		typescript += fmt.Sprintf(
			"{char: '%v', group: '%v', variants: %v},",
			set.Char,
			set.Group,
			varintTS,
		)
	}
	typescript += "]"

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
