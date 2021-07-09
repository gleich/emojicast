import { CopyToClipboardAction, List, ActionPanel, render } from '@raycast/api'
import { emojis } from './emojiData'

main()

function main() {
  const sections: JSX.Element[] = []
  for (const category in emojis) {
    const sets = emojis[category]
    sections.push(
      <List.Section title={category}>
        {sets.map((emoji) => (
          <List.Item title={emoji.name} icon={emoji.char} index={emoji.name}>
            <ActionPanel>
              <CopyToClipboardAction
                title={'Copy Emoji'}
                content={emoji.char}
              />
            </ActionPanel>
          </List.Item>
        ))}
      </List.Section>
    )
  }
  render(
    <List searchBarPlaceholder="Filter emojis by name...">{sections}</List>
  )
}
