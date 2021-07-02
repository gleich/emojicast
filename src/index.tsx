import { CopyToClipboardAction, List, ActionPanel, render } from '@raycast/api'
import { emojis } from './emojiData'

main()

function main() {
  render(
    <List searchBarPlaceholder="Filter emojis by name...">
      {...emojiList()}
    </List>
  )
}

// Generate a list of list view items for each emoji
function emojiList(): Element[] {
  const items: Element[] = []
  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i]
    items.push(
      <List.Item
        id={String(i)}
        title={emoji.name}
        subtitle={emoji.group}
        icon={emoji.char}
        index={emoji.name}
      >
        <ActionPanel>
          <CopyToClipboardAction title={'Copy Emoji'} content={emoji.char} />
        </ActionPanel>
      </List.Item>
    )
  }
  return items
}
