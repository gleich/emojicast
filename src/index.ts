import {
  Environment,
  InitCallback,
  render,
  ListViewItem,
  Icon,
  setClipboardContents,
  log,
  LogLevel,
} from 'raycast-commands'
import emojis from 'emoji.json'

export function init(
  _environment: Environment,
  completion: InitCallback
): void {
  log(LogLevel.Debug, 'Started up')
  completion({ success: true })
  render(() => ({
    kind: 'listView',
    isLoading: false,
    sections: [
      {
        kind: 'listViewSection',
        id: 'emojis',
        title: 'Emojis',
        items: genEmojiList(),
      },
    ],
  }))
}

// Generate a list of list view items for each emoji
function genEmojiList(): ListViewItem[] {
  const items: ListViewItem[] = []
  const addedEmojis: string[] = []

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i]

    // Making sure the emoji isn't a duplicate
    if (addedEmojis.includes(emoji.name)) {
      continue
    }

    // Ignoring variants
    if (
      includesAny(emoji.name, [
        ' light skin tone',
        ' medium-light skin tone',
        ' medium skin tone',
        ' medium-dark skin tone',
        ' dark skin tone',
        ' bald',
        ' white hair',
        ' blond hair',
        ' curly hair',
        ' red hair',
        ' woman',
        'woman ',
        ' man',
        'man ',
        'women ',
        ' women',
        'men ',
        ' men',
      ])
    ) {
      continue
    }

    items.push({
      kind: 'listViewItem',
      id: String(i),
      title: emoji.name,
      subtitle: emoji.category,
      icon: emoji.char,
      index: emoji.name,
      actions: () => ({
        sections: [
          {
            items: [
              {
                title: 'Copy to clipboard',
                icon: Icon.Clipboard,
                onSelectItem: () =>
                  setClipboardContents(
                    { text: emoji.char, type: 'text' },
                    true
                  ),
              },
            ],
          },
        ],
      }),
    })
    addedEmojis.push(emoji.name)
  }
  log(LogLevel.Debug, `Generated list of ${items.length} emojis`)

  return items
}

// Check if a string contains any string in the given array
function includesAny(str: string, searchStrings: string[]): boolean {
  for (const searchString of searchStrings) {
    if (str.includes(searchString)) {
      return true
    }
  }
  return false
}
