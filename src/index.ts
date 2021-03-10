import { Environment, InitCallback, render } from 'raycast-commands'

export function init(
  _environment: Environment,
  completion: InitCallback
): void {
  completion({ success: true })
  render(() => ({
    kind: 'detailView',
    markdown: '# Welcome to emojicast :)',
  }))
}
