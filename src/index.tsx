import { CopyToClipboardAction, List, ActionPanel, render } from '@raycast/api'
import { emojis } from './emojiData'

render(
  <List searchBarPlaceholder="Filter emojis by name...">
    {emojis.map((emoji, index) => (
      <List.Item
        id={String(index)}
        title={emoji.name}
        subtitle={emoji.group}
        icon={emoji.char}
        index={emoji.name}
      >
        <ActionPanel>
          <CopyToClipboardAction title={'Copy Emoji'} content={emoji.char} />
        </ActionPanel>
      </List.Item>
    ))}
  </List>
)
