import * as ray from 'raycast-commands'
import { emojis } from './emojiData'

export function init(
  _environment: ray.Environment,
  completion: ray.InitCallback
): void {
  ray.log(ray.LogLevel.Debug, 'Started up')
  completion({ success: true })
  ray.render(() => ({
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
function genEmojiList(): ray.ListViewItem[] {
  const items: ray.ListViewItem[] = []

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i]
    items.push({
      kind: 'listViewItem',
      id: String(i),
      title: emoji.name,
      subtitle: emoji.group,
      icon: emoji.char,
      index: emoji.name,
      actions: copyAction(emoji.char),
    })
  }
  ray.log(ray.LogLevel.Debug, `Generated list of ${items.length} emojis`)

  return items
}

function copyAction(char: string) {
  return () => ({
    sections: [
      {
        items: [
          {
            title: 'Copy to clipboard',
            icon: ray.Icon.Clipboard,
            onAction: () =>
              ray.setClipboardContents({ text: char, type: 'text' }, true),
          },
        ],
      },
    ],
  })
}
