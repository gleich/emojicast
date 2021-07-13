import {
  CopyToClipboardAction,
  List,
  ActionPanel,
  render,
  PasteAction,
  pasteText,
  Icon,
  closeMainWindow,
} from '@raycast/api'
import { emojis } from './emojiData'

main()

function main() {
  const sections: JSX.Element[] = []
  for (const category in emojis) {
    const sets = emojis[category]
    sections.push(
      <List.Section title={category}>
        {sets.map((emoji) => (
          <List.Item
            title={emoji.name}
            icon={emoji.char}
            index={emoji.name}
            subtitle={emoji.subgroup}
          >
            <ActionPanel>
              <PasteAction
                title="Paste Emoji"
                content={emoji.char}
              ></PasteAction>
              <CopyToClipboardAction
                title={'Copy Emoji'}
                content={emoji.char}
              />
              <ActionPanel.Submenu title="Choose Variant" icon={Icon.List}>
                {emoji.variants.map((variant) => (
                  <ActionPanel.Item
                    title={variant.char}
                    onAction={() => {
                      pasteText(variant.char)
                      closeMainWindow()
                    }}
                  />
                ))}
              </ActionPanel.Submenu>
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
