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

    // Making sure the emoji isn't a duplicate and isn't a variant
    if ((addedEmojis.includes(emoji.name), emoji.codes.includes(' '))) {
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
                onAction: () =>
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
