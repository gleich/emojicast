export interface EmojiSet {
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
  Objects: [
    { name: 'glasses', char: '👓', variants: [] },
    {
      name: 'sunglasses',
      char: '🕶️',
      variants: [{ name: 'sunglasses', char: '🕶️', group: 'Objects' }],
    },
    { name: 'goggles', char: '🥽', variants: [] },
    { name: 'lab coat', char: '🥼', variants: [] },
    { name: 'safety vest', char: '🦺', variants: [] },
    { name: 'necktie', char: '👔', variants: [] },
    { name: 't-shirt', char: '👕', variants: [] },
    { name: 'jeans', char: '👖', variants: [] },
    { name: 'scarf', char: '🧣', variants: [] },
    { name: 'gloves', char: '🧤', variants: [] },
    { name: 'coat', char: '🧥', variants: [] },
    { name: 'socks', char: '🧦', variants: [] },
    { name: 'dress', char: '👗', variants: [] },
    { name: 'kimono', char: '👘', variants: [] },
    { name: 'sari', char: '🥻', variants: [] },
    { name: 'one-piece swimsuit', char: '🩱', variants: [] },
    { name: 'briefs', char: '🩲', variants: [] },
    { name: 'shorts', char: '🩳', variants: [] },
    { name: 'bikini', char: '👙', variants: [] },
    { name: 'woman’s clothes', char: '👚', variants: [] },
    { name: 'purse', char: '👛', variants: [] },
    { name: 'handbag', char: '👜', variants: [] },
    { name: 'clutch bag', char: '👝', variants: [] },
    {
      name: 'shopping bags',
      char: '🛍️',
      variants: [{ name: 'shopping bags', char: '🛍️', group: 'Objects' }],
    },
    { name: 'backpack', char: '🎒', variants: [] },
    { name: 'thong sandal', char: '🩴', variants: [] },
    { name: 'man’s shoe', char: '👞', variants: [] },
    { name: 'running shoe', char: '👟', variants: [] },
    { name: 'hiking boot', char: '🥾', variants: [] },
    { name: 'flat shoe', char: '🥿', variants: [] },
    { name: 'high-heeled shoe', char: '👠', variants: [] },
    { name: 'woman’s sandal', char: '👡', variants: [] },
    { name: 'ballet shoes', char: '🩰', variants: [] },
    { name: 'woman’s boot', char: '👢', variants: [] },
    { name: 'crown', char: '👑', variants: [] },
    { name: 'woman’s hat', char: '👒', variants: [] },
    { name: 'top hat', char: '🎩', variants: [] },
    { name: 'graduation cap', char: '🎓', variants: [] },
    { name: 'billed cap', char: '🧢', variants: [] },
    { name: 'military helmet', char: '🪖', variants: [] },
    {
      name: 'rescue worker’s helmet',
      char: '⛑️',
      variants: [
        { name: 'rescue worker’s helmet', char: '⛑️', group: 'Objects' },
      ],
    },
    { name: 'prayer beads', char: '📿', variants: [] },
    { name: 'lipstick', char: '💄', variants: [] },
    { name: 'ring', char: '💍', variants: [] },
    { name: 'gem stone', char: '💎', variants: [] },
    { name: 'muted speaker', char: '🔇', variants: [] },
    { name: 'speaker low volume', char: '🔈', variants: [] },
    { name: 'speaker medium volume', char: '🔉', variants: [] },
    { name: 'speaker high volume', char: '🔊', variants: [] },
    { name: 'loudspeaker', char: '📢', variants: [] },
    { name: 'megaphone', char: '📣', variants: [] },
    { name: 'postal horn', char: '📯', variants: [] },
    { name: 'bell', char: '🔔', variants: [] },
    { name: 'bell with slash', char: '🔕', variants: [] },
    { name: 'musical score', char: '🎼', variants: [] },
    { name: 'musical note', char: '🎵', variants: [] },
    { name: 'musical notes', char: '🎶', variants: [] },
    {
      name: 'studio microphone',
      char: '🎙️',
      variants: [{ name: 'studio microphone', char: '🎙️', group: 'Objects' }],
    },
    {
      name: 'level slider',
      char: '🎚️',
      variants: [{ name: 'level slider', char: '🎚️', group: 'Objects' }],
    },
    {
      name: 'control knobs',
      char: '🎛️',
      variants: [{ name: 'control knobs', char: '🎛️', group: 'Objects' }],
    },
    { name: 'microphone', char: '🎤', variants: [] },
    { name: 'headphone', char: '🎧', variants: [] },
    { name: 'radio', char: '📻', variants: [] },
    { name: 'saxophone', char: '🎷', variants: [] },
    { name: 'accordion', char: '🪗', variants: [] },
    { name: 'guitar', char: '🎸', variants: [] },
    { name: 'musical keyboard', char: '🎹', variants: [] },
    { name: 'trumpet', char: '🎺', variants: [] },
    { name: 'violin', char: '🎻', variants: [] },
    { name: 'banjo', char: '🪕', variants: [] },
    { name: 'drum', char: '🥁', variants: [] },
    { name: 'long drum', char: '🪘', variants: [] },
    { name: 'mobile phone', char: '📱', variants: [] },
    { name: 'mobile phone with arrow', char: '📲', variants: [] },
    {
      name: 'telephone',
      char: '☎️',
      variants: [{ name: 'telephone', char: '☎️', group: 'Objects' }],
    },
    { name: 'telephone receiver', char: '📞', variants: [] },
    { name: 'pager', char: '📟', variants: [] },
    { name: 'fax machine', char: '📠', variants: [] },
    { name: 'battery', char: '🔋', variants: [] },
    { name: 'electric plug', char: '🔌', variants: [] },
    { name: 'laptop', char: '💻', variants: [] },
    {
      name: 'desktop computer',
      char: '🖥️',
      variants: [{ name: 'desktop computer', char: '🖥️', group: 'Objects' }],
    },
    {
      name: 'printer',
      char: '🖨️',
      variants: [{ name: 'printer', char: '🖨️', group: 'Objects' }],
    },
    {
      name: 'keyboard',
      char: '⌨️',
      variants: [{ name: 'keyboard', char: '⌨️', group: 'Objects' }],
    },
    {
      name: 'computer mouse',
      char: '🖱️',
      variants: [{ name: 'computer mouse', char: '🖱️', group: 'Objects' }],
    },
    {
      name: 'trackball',
      char: '🖲️',
      variants: [{ name: 'trackball', char: '🖲️', group: 'Objects' }],
    },
    { name: 'computer disk', char: '💽', variants: [] },
    { name: 'floppy disk', char: '💾', variants: [] },
    { name: 'optical disk', char: '💿', variants: [] },
    { name: 'dvd', char: '📀', variants: [] },
    { name: 'abacus', char: '🧮', variants: [] },
    { name: 'movie camera', char: '🎥', variants: [] },
    {
      name: 'film frames',
      char: '🎞️',
      variants: [{ name: 'film frames', char: '🎞️', group: 'Objects' }],
    },
    {
      name: 'film projector',
      char: '📽️',
      variants: [{ name: 'film projector', char: '📽️', group: 'Objects' }],
    },
    { name: 'clapper board', char: '🎬', variants: [] },
    { name: 'television', char: '📺', variants: [] },
    { name: 'camera', char: '📷', variants: [] },
    { name: 'camera with flash', char: '📸', variants: [] },
    { name: 'video camera', char: '📹', variants: [] },
    { name: 'videocassette', char: '📼', variants: [] },
    { name: 'magnifying glass tilted left', char: '🔍', variants: [] },
    { name: 'magnifying glass tilted right', char: '🔎', variants: [] },
    {
      name: 'candle',
      char: '🕯️',
      variants: [{ name: 'candle', char: '🕯️', group: 'Objects' }],
    },
    { name: 'light bulb', char: '💡', variants: [] },
    { name: 'flashlight', char: '🔦', variants: [] },
    { name: 'red paper lantern', char: '🏮', variants: [] },
    { name: 'diya lamp', char: '🪔', variants: [] },
    { name: 'notebook with decorative cover', char: '📔', variants: [] },
    { name: 'closed book', char: '📕', variants: [] },
    { name: 'open book', char: '📖', variants: [] },
    { name: 'green book', char: '📗', variants: [] },
    { name: 'blue book', char: '📘', variants: [] },
    { name: 'orange book', char: '📙', variants: [] },
    { name: 'books', char: '📚', variants: [] },
    { name: 'notebook', char: '📓', variants: [] },
    { name: 'ledger', char: '📒', variants: [] },
    { name: 'page with curl', char: '📃', variants: [] },
    { name: 'scroll', char: '📜', variants: [] },
    { name: 'page facing up', char: '📄', variants: [] },
    { name: 'newspaper', char: '📰', variants: [] },
    {
      name: 'rolled-up newspaper',
      char: '🗞️',
      variants: [{ name: 'rolled-up newspaper', char: '🗞️', group: 'Objects' }],
    },
    { name: 'bookmark tabs', char: '📑', variants: [] },
    { name: 'bookmark', char: '🔖', variants: [] },
    {
      name: 'label',
      char: '🏷️',
      variants: [{ name: 'label', char: '🏷️', group: 'Objects' }],
    },
    { name: 'money bag', char: '💰', variants: [] },
    { name: 'coin', char: '🪙', variants: [] },
    { name: 'yen banknote', char: '💴', variants: [] },
    { name: 'dollar banknote', char: '💵', variants: [] },
    { name: 'euro banknote', char: '💶', variants: [] },
    { name: 'pound banknote', char: '💷', variants: [] },
    { name: 'money with wings', char: '💸', variants: [] },
    { name: 'credit card', char: '💳', variants: [] },
    { name: 'receipt', char: '🧾', variants: [] },
    { name: 'chart increasing with yen', char: '💹', variants: [] },
    {
      name: 'envelope',
      char: '✉️',
      variants: [{ name: 'envelope', char: '✉️', group: 'Objects' }],
    },
    { name: 'e-mail', char: '📧', variants: [] },
    { name: 'incoming envelope', char: '📨', variants: [] },
    { name: 'envelope with arrow', char: '📩', variants: [] },
    { name: 'outbox tray', char: '📤', variants: [] },
    { name: 'inbox tray', char: '📥', variants: [] },
    { name: 'package', char: '📦', variants: [] },
    { name: 'closed mailbox with raised flag', char: '📫', variants: [] },
    { name: 'closed mailbox with lowered flag', char: '📪', variants: [] },
    { name: 'open mailbox with raised flag', char: '📬', variants: [] },
    { name: 'open mailbox with lowered flag', char: '📭', variants: [] },
    { name: 'postbox', char: '📮', variants: [] },
    {
      name: 'ballot box with ballot',
      char: '🗳️',
      variants: [
        { name: 'ballot box with ballot', char: '🗳️', group: 'Objects' },
      ],
    },
    {
      name: 'pencil',
      char: '✏️',
      variants: [{ name: 'pencil', char: '✏️', group: 'Objects' }],
    },
    {
      name: 'black nib',
      char: '✒️',
      variants: [{ name: 'black nib', char: '✒️', group: 'Objects' }],
    },
    {
      name: 'fountain pen',
      char: '🖋️',
      variants: [{ name: 'fountain pen', char: '🖋️', group: 'Objects' }],
    },
    {
      name: 'pen',
      char: '🖊️',
      variants: [{ name: 'pen', char: '🖊️', group: 'Objects' }],
    },
    {
      name: 'paintbrush',
      char: '🖌️',
      variants: [{ name: 'paintbrush', char: '🖌️', group: 'Objects' }],
    },
    {
      name: 'crayon',
      char: '🖍️',
      variants: [{ name: 'crayon', char: '🖍️', group: 'Objects' }],
    },
    { name: 'memo', char: '📝', variants: [] },
    { name: 'briefcase', char: '💼', variants: [] },
    { name: 'file folder', char: '📁', variants: [] },
    { name: 'open file folder', char: '📂', variants: [] },
    {
      name: 'card index dividers',
      char: '🗂️',
      variants: [{ name: 'card index dividers', char: '🗂️', group: 'Objects' }],
    },
    { name: 'calendar', char: '📅', variants: [] },
    { name: 'tear-off calendar', char: '📆', variants: [] },
    {
      name: 'spiral notepad',
      char: '🗒️',
      variants: [{ name: 'spiral notepad', char: '🗒️', group: 'Objects' }],
    },
    {
      name: 'spiral calendar',
      char: '🗓️',
      variants: [{ name: 'spiral calendar', char: '🗓️', group: 'Objects' }],
    },
    { name: 'card index', char: '📇', variants: [] },
    { name: 'chart increasing', char: '📈', variants: [] },
    { name: 'chart decreasing', char: '📉', variants: [] },
    { name: 'bar chart', char: '📊', variants: [] },
    { name: 'clipboard', char: '📋', variants: [] },
    { name: 'pushpin', char: '📌', variants: [] },
    { name: 'round pushpin', char: '📍', variants: [] },
    { name: 'paperclip', char: '📎', variants: [] },
    {
      name: 'linked paperclips',
      char: '🖇️',
      variants: [{ name: 'linked paperclips', char: '🖇️', group: 'Objects' }],
    },
    { name: 'straight ruler', char: '📏', variants: [] },
    { name: 'triangular ruler', char: '📐', variants: [] },
    {
      name: 'scissors',
      char: '✂️',
      variants: [{ name: 'scissors', char: '✂️', group: 'Objects' }],
    },
    {
      name: 'card file box',
      char: '🗃️',
      variants: [{ name: 'card file box', char: '🗃️', group: 'Objects' }],
    },
    {
      name: 'file cabinet',
      char: '🗄️',
      variants: [{ name: 'file cabinet', char: '🗄️', group: 'Objects' }],
    },
    {
      name: 'wastebasket',
      char: '🗑️',
      variants: [{ name: 'wastebasket', char: '🗑️', group: 'Objects' }],
    },
    { name: 'locked', char: '🔒', variants: [] },
    { name: 'unlocked', char: '🔓', variants: [] },
    { name: 'locked with pen', char: '🔏', variants: [] },
    { name: 'locked with key', char: '🔐', variants: [] },
    { name: 'key', char: '🔑', variants: [] },
    {
      name: 'old key',
      char: '🗝️',
      variants: [{ name: 'old key', char: '🗝️', group: 'Objects' }],
    },
    { name: 'hammer', char: '🔨', variants: [] },
    { name: 'axe', char: '🪓', variants: [] },
    {
      name: 'pick',
      char: '⛏️',
      variants: [{ name: 'pick', char: '⛏️', group: 'Objects' }],
    },
    {
      name: 'hammer and pick',
      char: '⚒️',
      variants: [{ name: 'hammer and pick', char: '⚒️', group: 'Objects' }],
    },
    {
      name: 'hammer and wrench',
      char: '🛠️',
      variants: [{ name: 'hammer and wrench', char: '🛠️', group: 'Objects' }],
    },
    {
      name: 'dagger',
      char: '🗡️',
      variants: [{ name: 'dagger', char: '🗡️', group: 'Objects' }],
    },
    {
      name: 'crossed swords',
      char: '⚔️',
      variants: [{ name: 'crossed swords', char: '⚔️', group: 'Objects' }],
    },
    { name: 'water pistol', char: '🔫', variants: [] },
    { name: 'boomerang', char: '🪃', variants: [] },
    { name: 'bow and arrow', char: '🏹', variants: [] },
    {
      name: 'shield',
      char: '🛡️',
      variants: [{ name: 'shield', char: '🛡️', group: 'Objects' }],
    },
    { name: 'carpentry saw', char: '🪚', variants: [] },
    { name: 'wrench', char: '🔧', variants: [] },
    { name: 'screwdriver', char: '🪛', variants: [] },
    { name: 'nut and bolt', char: '🔩', variants: [] },
    {
      name: 'gear',
      char: '⚙️',
      variants: [{ name: 'gear', char: '⚙️', group: 'Objects' }],
    },
    {
      name: 'clamp',
      char: '🗜️',
      variants: [{ name: 'clamp', char: '🗜️', group: 'Objects' }],
    },
    {
      name: 'balance scale',
      char: '⚖️',
      variants: [{ name: 'balance scale', char: '⚖️', group: 'Objects' }],
    },
    { name: 'white cane', char: '🦯', variants: [] },
    { name: 'link', char: '🔗', variants: [] },
    {
      name: 'chains',
      char: '⛓️',
      variants: [{ name: 'chains', char: '⛓️', group: 'Objects' }],
    },
    { name: 'hook', char: '🪝', variants: [] },
    { name: 'toolbox', char: '🧰', variants: [] },
    { name: 'magnet', char: '🧲', variants: [] },
    { name: 'ladder', char: '🪜', variants: [] },
    {
      name: 'alembic',
      char: '⚗️',
      variants: [{ name: 'alembic', char: '⚗️', group: 'Objects' }],
    },
    { name: 'test tube', char: '🧪', variants: [] },
    { name: 'petri dish', char: '🧫', variants: [] },
    { name: 'dna', char: '🧬', variants: [] },
    { name: 'microscope', char: '🔬', variants: [] },
    { name: 'telescope', char: '🔭', variants: [] },
    { name: 'satellite antenna', char: '📡', variants: [] },
    { name: 'syringe', char: '💉', variants: [] },
    { name: 'drop of blood', char: '🩸', variants: [] },
    { name: 'pill', char: '💊', variants: [] },
    { name: 'adhesive bandage', char: '🩹', variants: [] },
    { name: 'stethoscope', char: '🩺', variants: [] },
    { name: 'door', char: '🚪', variants: [] },
    { name: 'elevator', char: '🛗', variants: [] },
    { name: 'mirror', char: '🪞', variants: [] },
    { name: 'window', char: '🪟', variants: [] },
    {
      name: 'bed',
      char: '🛏️',
      variants: [{ name: 'bed', char: '🛏️', group: 'Objects' }],
    },
    {
      name: 'couch and lamp',
      char: '🛋️',
      variants: [{ name: 'couch and lamp', char: '🛋️', group: 'Objects' }],
    },
    { name: 'chair', char: '🪑', variants: [] },
    { name: 'toilet', char: '🚽', variants: [] },
    { name: 'plunger', char: '🪠', variants: [] },
    { name: 'shower', char: '🚿', variants: [] },
    { name: 'bathtub', char: '🛁', variants: [] },
    { name: 'mouse trap', char: '🪤', variants: [] },
    { name: 'razor', char: '🪒', variants: [] },
    { name: 'lotion bottle', char: '🧴', variants: [] },
    { name: 'safety pin', char: '🧷', variants: [] },
    { name: 'broom', char: '🧹', variants: [] },
    { name: 'basket', char: '🧺', variants: [] },
    { name: 'roll of paper', char: '🧻', variants: [] },
    { name: 'bucket', char: '🪣', variants: [] },
    { name: 'soap', char: '🧼', variants: [] },
    { name: 'toothbrush', char: '🪥', variants: [] },
    { name: 'sponge', char: '🧽', variants: [] },
    { name: 'fire extinguisher', char: '🧯', variants: [] },
    { name: 'shopping cart', char: '🛒', variants: [] },
    { name: 'cigarette', char: '🚬', variants: [] },
    {
      name: 'coffin',
      char: '⚰️',
      variants: [{ name: 'coffin', char: '⚰️', group: 'Objects' }],
    },
    { name: 'headstone', char: '🪦', variants: [] },
    {
      name: 'funeral urn',
      char: '⚱️',
      variants: [{ name: 'funeral urn', char: '⚱️', group: 'Objects' }],
    },
    { name: 'moai', char: '🗿', variants: [] },
    { name: 'placard', char: '🪧', variants: [] },
  ],
  'People & Body': [
    {
      name: 'waving hand',
      char: '👋',
      variants: [
        {
          name: 'waving hand: light skin tone',
          char: '👋🏻',
          group: 'People & Body',
        },
        {
          name: 'waving hand: medium-light skin tone',
          char: '👋🏼',
          group: 'People & Body',
        },
        {
          name: 'waving hand: medium skin tone',
          char: '👋🏽',
          group: 'People & Body',
        },
        {
          name: 'waving hand: medium-dark skin tone',
          char: '👋🏾',
          group: 'People & Body',
        },
        {
          name: 'waving hand: dark skin tone',
          char: '👋🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'raised back of hand',
      char: '🤚',
      variants: [
        {
          name: 'raised back of hand: light skin tone',
          char: '🤚🏻',
          group: 'People & Body',
        },
        {
          name: 'raised back of hand: medium-light skin tone',
          char: '🤚🏼',
          group: 'People & Body',
        },
        {
          name: 'raised back of hand: medium skin tone',
          char: '🤚🏽',
          group: 'People & Body',
        },
        {
          name: 'raised back of hand: medium-dark skin tone',
          char: '🤚🏾',
          group: 'People & Body',
        },
        {
          name: 'raised back of hand: dark skin tone',
          char: '🤚🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'hand with fingers splayed',
      char: '🖐️',
      variants: [
        {
          name: 'hand with fingers splayed',
          char: '🖐️',
          group: 'People & Body',
        },
        {
          name: 'hand with fingers splayed: light skin tone',
          char: '🖐🏻',
          group: 'People & Body',
        },
        {
          name: 'hand with fingers splayed: medium-light skin tone',
          char: '🖐🏼',
          group: 'People & Body',
        },
        {
          name: 'hand with fingers splayed: medium skin tone',
          char: '🖐🏽',
          group: 'People & Body',
        },
        {
          name: 'hand with fingers splayed: medium-dark skin tone',
          char: '🖐🏾',
          group: 'People & Body',
        },
        {
          name: 'hand with fingers splayed: dark skin tone',
          char: '🖐🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'raised hand',
      char: '✋',
      variants: [
        {
          name: 'raised hand: light skin tone',
          char: '✋🏻',
          group: 'People & Body',
        },
        {
          name: 'raised hand: medium-light skin tone',
          char: '✋🏼',
          group: 'People & Body',
        },
        {
          name: 'raised hand: medium skin tone',
          char: '✋🏽',
          group: 'People & Body',
        },
        {
          name: 'raised hand: medium-dark skin tone',
          char: '✋🏾',
          group: 'People & Body',
        },
        {
          name: 'raised hand: dark skin tone',
          char: '✋🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'vulcan salute',
      char: '🖖',
      variants: [
        {
          name: 'vulcan salute: light skin tone',
          char: '🖖🏻',
          group: 'People & Body',
        },
        {
          name: 'vulcan salute: medium-light skin tone',
          char: '🖖🏼',
          group: 'People & Body',
        },
        {
          name: 'vulcan salute: medium skin tone',
          char: '🖖🏽',
          group: 'People & Body',
        },
        {
          name: 'vulcan salute: medium-dark skin tone',
          char: '🖖🏾',
          group: 'People & Body',
        },
        {
          name: 'vulcan salute: dark skin tone',
          char: '🖖🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'OK hand',
      char: '👌',
      variants: [
        {
          name: 'OK hand: light skin tone',
          char: '👌🏻',
          group: 'People & Body',
        },
        {
          name: 'OK hand: medium-light skin tone',
          char: '👌🏼',
          group: 'People & Body',
        },
        {
          name: 'OK hand: medium skin tone',
          char: '👌🏽',
          group: 'People & Body',
        },
        {
          name: 'OK hand: medium-dark skin tone',
          char: '👌🏾',
          group: 'People & Body',
        },
        { name: 'OK hand: dark skin tone', char: '👌🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'pinched fingers',
      char: '🤌',
      variants: [
        {
          name: 'pinched fingers: light skin tone',
          char: '🤌🏻',
          group: 'People & Body',
        },
        {
          name: 'pinched fingers: medium-light skin tone',
          char: '🤌🏼',
          group: 'People & Body',
        },
        {
          name: 'pinched fingers: medium skin tone',
          char: '🤌🏽',
          group: 'People & Body',
        },
        {
          name: 'pinched fingers: medium-dark skin tone',
          char: '🤌🏾',
          group: 'People & Body',
        },
        {
          name: 'pinched fingers: dark skin tone',
          char: '🤌🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'pinching hand',
      char: '🤏',
      variants: [
        {
          name: 'pinching hand: light skin tone',
          char: '🤏🏻',
          group: 'People & Body',
        },
        {
          name: 'pinching hand: medium-light skin tone',
          char: '🤏🏼',
          group: 'People & Body',
        },
        {
          name: 'pinching hand: medium skin tone',
          char: '🤏🏽',
          group: 'People & Body',
        },
        {
          name: 'pinching hand: medium-dark skin tone',
          char: '🤏🏾',
          group: 'People & Body',
        },
        {
          name: 'pinching hand: dark skin tone',
          char: '🤏🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'victory hand',
      char: '✌️',
      variants: [
        { name: 'victory hand', char: '✌️', group: 'People & Body' },
        {
          name: 'victory hand: light skin tone',
          char: '✌🏻',
          group: 'People & Body',
        },
        {
          name: 'victory hand: medium-light skin tone',
          char: '✌🏼',
          group: 'People & Body',
        },
        {
          name: 'victory hand: medium skin tone',
          char: '✌🏽',
          group: 'People & Body',
        },
        {
          name: 'victory hand: medium-dark skin tone',
          char: '✌🏾',
          group: 'People & Body',
        },
        {
          name: 'victory hand: dark skin tone',
          char: '✌🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'crossed fingers',
      char: '🤞',
      variants: [
        {
          name: 'crossed fingers: light skin tone',
          char: '🤞🏻',
          group: 'People & Body',
        },
        {
          name: 'crossed fingers: medium-light skin tone',
          char: '🤞🏼',
          group: 'People & Body',
        },
        {
          name: 'crossed fingers: medium skin tone',
          char: '🤞🏽',
          group: 'People & Body',
        },
        {
          name: 'crossed fingers: medium-dark skin tone',
          char: '🤞🏾',
          group: 'People & Body',
        },
        {
          name: 'crossed fingers: dark skin tone',
          char: '🤞🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'love-you gesture',
      char: '🤟',
      variants: [
        {
          name: 'love-you gesture: light skin tone',
          char: '🤟🏻',
          group: 'People & Body',
        },
        {
          name: 'love-you gesture: medium-light skin tone',
          char: '🤟🏼',
          group: 'People & Body',
        },
        {
          name: 'love-you gesture: medium skin tone',
          char: '🤟🏽',
          group: 'People & Body',
        },
        {
          name: 'love-you gesture: medium-dark skin tone',
          char: '🤟🏾',
          group: 'People & Body',
        },
        {
          name: 'love-you gesture: dark skin tone',
          char: '🤟🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'sign of the horns',
      char: '🤘',
      variants: [
        {
          name: 'sign of the horns: light skin tone',
          char: '🤘🏻',
          group: 'People & Body',
        },
        {
          name: 'sign of the horns: medium-light skin tone',
          char: '🤘🏼',
          group: 'People & Body',
        },
        {
          name: 'sign of the horns: medium skin tone',
          char: '🤘🏽',
          group: 'People & Body',
        },
        {
          name: 'sign of the horns: medium-dark skin tone',
          char: '🤘🏾',
          group: 'People & Body',
        },
        {
          name: 'sign of the horns: dark skin tone',
          char: '🤘🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'call me hand',
      char: '🤙',
      variants: [
        {
          name: 'call me hand: light skin tone',
          char: '🤙🏻',
          group: 'People & Body',
        },
        {
          name: 'call me hand: medium-light skin tone',
          char: '🤙🏼',
          group: 'People & Body',
        },
        {
          name: 'call me hand: medium skin tone',
          char: '🤙🏽',
          group: 'People & Body',
        },
        {
          name: 'call me hand: medium-dark skin tone',
          char: '🤙🏾',
          group: 'People & Body',
        },
        {
          name: 'call me hand: dark skin tone',
          char: '🤙🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'backhand index pointing left',
      char: '👈',
      variants: [
        {
          name: 'backhand index pointing left: light skin tone',
          char: '👈🏻',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing left: medium-light skin tone',
          char: '👈🏼',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing left: medium skin tone',
          char: '👈🏽',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing left: medium-dark skin tone',
          char: '👈🏾',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing left: dark skin tone',
          char: '👈🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'backhand index pointing right',
      char: '👉',
      variants: [
        {
          name: 'backhand index pointing right: light skin tone',
          char: '👉🏻',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing right: medium-light skin tone',
          char: '👉🏼',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing right: medium skin tone',
          char: '👉🏽',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing right: medium-dark skin tone',
          char: '👉🏾',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing right: dark skin tone',
          char: '👉🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'backhand index pointing up',
      char: '👆',
      variants: [
        {
          name: 'backhand index pointing up: light skin tone',
          char: '👆🏻',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing up: medium-light skin tone',
          char: '👆🏼',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing up: medium skin tone',
          char: '👆🏽',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing up: medium-dark skin tone',
          char: '👆🏾',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing up: dark skin tone',
          char: '👆🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'middle finger',
      char: '🖕',
      variants: [
        {
          name: 'middle finger: light skin tone',
          char: '🖕🏻',
          group: 'People & Body',
        },
        {
          name: 'middle finger: medium-light skin tone',
          char: '🖕🏼',
          group: 'People & Body',
        },
        {
          name: 'middle finger: medium skin tone',
          char: '🖕🏽',
          group: 'People & Body',
        },
        {
          name: 'middle finger: medium-dark skin tone',
          char: '🖕🏾',
          group: 'People & Body',
        },
        {
          name: 'middle finger: dark skin tone',
          char: '🖕🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'backhand index pointing down',
      char: '👇',
      variants: [
        {
          name: 'backhand index pointing down: light skin tone',
          char: '👇🏻',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing down: medium-light skin tone',
          char: '👇🏼',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing down: medium skin tone',
          char: '👇🏽',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing down: medium-dark skin tone',
          char: '👇🏾',
          group: 'People & Body',
        },
        {
          name: 'backhand index pointing down: dark skin tone',
          char: '👇🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'index pointing up',
      char: '☝️',
      variants: [
        { name: 'index pointing up', char: '☝️', group: 'People & Body' },
        {
          name: 'index pointing up: light skin tone',
          char: '☝🏻',
          group: 'People & Body',
        },
        {
          name: 'index pointing up: medium-light skin tone',
          char: '☝🏼',
          group: 'People & Body',
        },
        {
          name: 'index pointing up: medium skin tone',
          char: '☝🏽',
          group: 'People & Body',
        },
        {
          name: 'index pointing up: medium-dark skin tone',
          char: '☝🏾',
          group: 'People & Body',
        },
        {
          name: 'index pointing up: dark skin tone',
          char: '☝🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'thumbs up',
      char: '👍',
      variants: [
        {
          name: 'thumbs up: light skin tone',
          char: '👍🏻',
          group: 'People & Body',
        },
        {
          name: 'thumbs up: medium-light skin tone',
          char: '👍🏼',
          group: 'People & Body',
        },
        {
          name: 'thumbs up: medium skin tone',
          char: '👍🏽',
          group: 'People & Body',
        },
        {
          name: 'thumbs up: medium-dark skin tone',
          char: '👍🏾',
          group: 'People & Body',
        },
        {
          name: 'thumbs up: dark skin tone',
          char: '👍🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'thumbs down',
      char: '👎',
      variants: [
        {
          name: 'thumbs down: light skin tone',
          char: '👎🏻',
          group: 'People & Body',
        },
        {
          name: 'thumbs down: medium-light skin tone',
          char: '👎🏼',
          group: 'People & Body',
        },
        {
          name: 'thumbs down: medium skin tone',
          char: '👎🏽',
          group: 'People & Body',
        },
        {
          name: 'thumbs down: medium-dark skin tone',
          char: '👎🏾',
          group: 'People & Body',
        },
        {
          name: 'thumbs down: dark skin tone',
          char: '👎🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'raised fist',
      char: '✊',
      variants: [
        {
          name: 'raised fist: light skin tone',
          char: '✊🏻',
          group: 'People & Body',
        },
        {
          name: 'raised fist: medium-light skin tone',
          char: '✊🏼',
          group: 'People & Body',
        },
        {
          name: 'raised fist: medium skin tone',
          char: '✊🏽',
          group: 'People & Body',
        },
        {
          name: 'raised fist: medium-dark skin tone',
          char: '✊🏾',
          group: 'People & Body',
        },
        {
          name: 'raised fist: dark skin tone',
          char: '✊🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'oncoming fist',
      char: '👊',
      variants: [
        {
          name: 'oncoming fist: light skin tone',
          char: '👊🏻',
          group: 'People & Body',
        },
        {
          name: 'oncoming fist: medium-light skin tone',
          char: '👊🏼',
          group: 'People & Body',
        },
        {
          name: 'oncoming fist: medium skin tone',
          char: '👊🏽',
          group: 'People & Body',
        },
        {
          name: 'oncoming fist: medium-dark skin tone',
          char: '👊🏾',
          group: 'People & Body',
        },
        {
          name: 'oncoming fist: dark skin tone',
          char: '👊🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'left-facing fist',
      char: '🤛',
      variants: [
        {
          name: 'left-facing fist: light skin tone',
          char: '🤛🏻',
          group: 'People & Body',
        },
        {
          name: 'left-facing fist: medium-light skin tone',
          char: '🤛🏼',
          group: 'People & Body',
        },
        {
          name: 'left-facing fist: medium skin tone',
          char: '🤛🏽',
          group: 'People & Body',
        },
        {
          name: 'left-facing fist: medium-dark skin tone',
          char: '🤛🏾',
          group: 'People & Body',
        },
        {
          name: 'left-facing fist: dark skin tone',
          char: '🤛🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'right-facing fist',
      char: '🤜',
      variants: [
        {
          name: 'right-facing fist: light skin tone',
          char: '🤜🏻',
          group: 'People & Body',
        },
        {
          name: 'right-facing fist: medium-light skin tone',
          char: '🤜🏼',
          group: 'People & Body',
        },
        {
          name: 'right-facing fist: medium skin tone',
          char: '🤜🏽',
          group: 'People & Body',
        },
        {
          name: 'right-facing fist: medium-dark skin tone',
          char: '🤜🏾',
          group: 'People & Body',
        },
        {
          name: 'right-facing fist: dark skin tone',
          char: '🤜🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'clapping hands',
      char: '👏',
      variants: [
        {
          name: 'clapping hands: light skin tone',
          char: '👏🏻',
          group: 'People & Body',
        },
        {
          name: 'clapping hands: medium-light skin tone',
          char: '👏🏼',
          group: 'People & Body',
        },
        {
          name: 'clapping hands: medium skin tone',
          char: '👏🏽',
          group: 'People & Body',
        },
        {
          name: 'clapping hands: medium-dark skin tone',
          char: '👏🏾',
          group: 'People & Body',
        },
        {
          name: 'clapping hands: dark skin tone',
          char: '👏🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'raising hands',
      char: '🙌',
      variants: [
        {
          name: 'raising hands: light skin tone',
          char: '🙌🏻',
          group: 'People & Body',
        },
        {
          name: 'raising hands: medium-light skin tone',
          char: '🙌🏼',
          group: 'People & Body',
        },
        {
          name: 'raising hands: medium skin tone',
          char: '🙌🏽',
          group: 'People & Body',
        },
        {
          name: 'raising hands: medium-dark skin tone',
          char: '🙌🏾',
          group: 'People & Body',
        },
        {
          name: 'raising hands: dark skin tone',
          char: '🙌🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'open hands',
      char: '👐',
      variants: [
        {
          name: 'open hands: light skin tone',
          char: '👐🏻',
          group: 'People & Body',
        },
        {
          name: 'open hands: medium-light skin tone',
          char: '👐🏼',
          group: 'People & Body',
        },
        {
          name: 'open hands: medium skin tone',
          char: '👐🏽',
          group: 'People & Body',
        },
        {
          name: 'open hands: medium-dark skin tone',
          char: '👐🏾',
          group: 'People & Body',
        },
        {
          name: 'open hands: dark skin tone',
          char: '👐🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'palms up together',
      char: '🤲',
      variants: [
        {
          name: 'palms up together: light skin tone',
          char: '🤲🏻',
          group: 'People & Body',
        },
        {
          name: 'palms up together: medium-light skin tone',
          char: '🤲🏼',
          group: 'People & Body',
        },
        {
          name: 'palms up together: medium skin tone',
          char: '🤲🏽',
          group: 'People & Body',
        },
        {
          name: 'palms up together: medium-dark skin tone',
          char: '🤲🏾',
          group: 'People & Body',
        },
        {
          name: 'palms up together: dark skin tone',
          char: '🤲🏿',
          group: 'People & Body',
        },
      ],
    },
    { name: 'handshake', char: '🤝', variants: [] },
    {
      name: 'folded hands',
      char: '🙏',
      variants: [
        {
          name: 'folded hands: light skin tone',
          char: '🙏🏻',
          group: 'People & Body',
        },
        {
          name: 'folded hands: medium-light skin tone',
          char: '🙏🏼',
          group: 'People & Body',
        },
        {
          name: 'folded hands: medium skin tone',
          char: '🙏🏽',
          group: 'People & Body',
        },
        {
          name: 'folded hands: medium-dark skin tone',
          char: '🙏🏾',
          group: 'People & Body',
        },
        {
          name: 'folded hands: dark skin tone',
          char: '🙏🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'writing hand',
      char: '✍️',
      variants: [
        { name: 'writing hand', char: '✍️', group: 'People & Body' },
        {
          name: 'writing hand: light skin tone',
          char: '✍🏻',
          group: 'People & Body',
        },
        {
          name: 'writing hand: medium-light skin tone',
          char: '✍🏼',
          group: 'People & Body',
        },
        {
          name: 'writing hand: medium skin tone',
          char: '✍🏽',
          group: 'People & Body',
        },
        {
          name: 'writing hand: medium-dark skin tone',
          char: '✍🏾',
          group: 'People & Body',
        },
        {
          name: 'writing hand: dark skin tone',
          char: '✍🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'nail polish',
      char: '💅',
      variants: [
        {
          name: 'nail polish: light skin tone',
          char: '💅🏻',
          group: 'People & Body',
        },
        {
          name: 'nail polish: medium-light skin tone',
          char: '💅🏼',
          group: 'People & Body',
        },
        {
          name: 'nail polish: medium skin tone',
          char: '💅🏽',
          group: 'People & Body',
        },
        {
          name: 'nail polish: medium-dark skin tone',
          char: '💅🏾',
          group: 'People & Body',
        },
        {
          name: 'nail polish: dark skin tone',
          char: '💅🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'selfie',
      char: '🤳',
      variants: [
        { name: 'selfie: light skin tone', char: '🤳🏻', group: 'People & Body' },
        {
          name: 'selfie: medium-light skin tone',
          char: '🤳🏼',
          group: 'People & Body',
        },
        {
          name: 'selfie: medium skin tone',
          char: '🤳🏽',
          group: 'People & Body',
        },
        {
          name: 'selfie: medium-dark skin tone',
          char: '🤳🏾',
          group: 'People & Body',
        },
        { name: 'selfie: dark skin tone', char: '🤳🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'flexed biceps',
      char: '💪',
      variants: [
        {
          name: 'flexed biceps: light skin tone',
          char: '💪🏻',
          group: 'People & Body',
        },
        {
          name: 'flexed biceps: medium-light skin tone',
          char: '💪🏼',
          group: 'People & Body',
        },
        {
          name: 'flexed biceps: medium skin tone',
          char: '💪🏽',
          group: 'People & Body',
        },
        {
          name: 'flexed biceps: medium-dark skin tone',
          char: '💪🏾',
          group: 'People & Body',
        },
        {
          name: 'flexed biceps: dark skin tone',
          char: '💪🏿',
          group: 'People & Body',
        },
      ],
    },
    { name: 'mechanical arm', char: '🦾', variants: [] },
    { name: 'mechanical leg', char: '🦿', variants: [] },
    {
      name: 'leg',
      char: '🦵',
      variants: [
        { name: 'leg: light skin tone', char: '🦵🏻', group: 'People & Body' },
        {
          name: 'leg: medium-light skin tone',
          char: '🦵🏼',
          group: 'People & Body',
        },
        { name: 'leg: medium skin tone', char: '🦵🏽', group: 'People & Body' },
        {
          name: 'leg: medium-dark skin tone',
          char: '🦵🏾',
          group: 'People & Body',
        },
        { name: 'leg: dark skin tone', char: '🦵🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'foot',
      char: '🦶',
      variants: [
        { name: 'foot: light skin tone', char: '🦶🏻', group: 'People & Body' },
        {
          name: 'foot: medium-light skin tone',
          char: '🦶🏼',
          group: 'People & Body',
        },
        { name: 'foot: medium skin tone', char: '🦶🏽', group: 'People & Body' },
        {
          name: 'foot: medium-dark skin tone',
          char: '🦶🏾',
          group: 'People & Body',
        },
        { name: 'foot: dark skin tone', char: '🦶🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'ear',
      char: '👂',
      variants: [
        { name: 'ear: light skin tone', char: '👂🏻', group: 'People & Body' },
        {
          name: 'ear: medium-light skin tone',
          char: '👂🏼',
          group: 'People & Body',
        },
        { name: 'ear: medium skin tone', char: '👂🏽', group: 'People & Body' },
        {
          name: 'ear: medium-dark skin tone',
          char: '👂🏾',
          group: 'People & Body',
        },
        { name: 'ear: dark skin tone', char: '👂🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'ear with hearing aid',
      char: '🦻',
      variants: [
        {
          name: 'ear with hearing aid: light skin tone',
          char: '🦻🏻',
          group: 'People & Body',
        },
        {
          name: 'ear with hearing aid: medium-light skin tone',
          char: '🦻🏼',
          group: 'People & Body',
        },
        {
          name: 'ear with hearing aid: medium skin tone',
          char: '🦻🏽',
          group: 'People & Body',
        },
        {
          name: 'ear with hearing aid: medium-dark skin tone',
          char: '🦻🏾',
          group: 'People & Body',
        },
        {
          name: 'ear with hearing aid: dark skin tone',
          char: '🦻🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'nose',
      char: '👃',
      variants: [
        { name: 'nose: light skin tone', char: '👃🏻', group: 'People & Body' },
        {
          name: 'nose: medium-light skin tone',
          char: '👃🏼',
          group: 'People & Body',
        },
        { name: 'nose: medium skin tone', char: '👃🏽', group: 'People & Body' },
        {
          name: 'nose: medium-dark skin tone',
          char: '👃🏾',
          group: 'People & Body',
        },
        { name: 'nose: dark skin tone', char: '👃🏿', group: 'People & Body' },
      ],
    },
    { name: 'brain', char: '🧠', variants: [] },
    { name: 'anatomical heart', char: '🫀', variants: [] },
    { name: 'lungs', char: '🫁', variants: [] },
    { name: 'tooth', char: '🦷', variants: [] },
    { name: 'bone', char: '🦴', variants: [] },
    { name: 'eyes', char: '👀', variants: [] },
    {
      name: 'eye',
      char: '👁️',
      variants: [
        {
          name: 'eye in speech bubble',
          char: '👁️\u200d🗨️',
          group: 'Smileys & Emotion',
        },
        { name: 'eye', char: '👁️', group: 'People & Body' },
      ],
    },
    { name: 'tongue', char: '👅', variants: [] },
    { name: 'mouth', char: '👄', variants: [] },
    {
      name: 'baby',
      char: '👶',
      variants: [
        { name: 'baby: light skin tone', char: '👶🏻', group: 'People & Body' },
        {
          name: 'baby: medium-light skin tone',
          char: '👶🏼',
          group: 'People & Body',
        },
        { name: 'baby: medium skin tone', char: '👶🏽', group: 'People & Body' },
        {
          name: 'baby: medium-dark skin tone',
          char: '👶🏾',
          group: 'People & Body',
        },
        { name: 'baby: dark skin tone', char: '👶🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'child',
      char: '🧒',
      variants: [
        { name: 'child: light skin tone', char: '🧒🏻', group: 'People & Body' },
        {
          name: 'child: medium-light skin tone',
          char: '🧒🏼',
          group: 'People & Body',
        },
        { name: 'child: medium skin tone', char: '🧒🏽', group: 'People & Body' },
        {
          name: 'child: medium-dark skin tone',
          char: '🧒🏾',
          group: 'People & Body',
        },
        { name: 'child: dark skin tone', char: '🧒🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'boy',
      char: '👦',
      variants: [
        { name: 'boy: light skin tone', char: '👦🏻', group: 'People & Body' },
        {
          name: 'boy: medium-light skin tone',
          char: '👦🏼',
          group: 'People & Body',
        },
        { name: 'boy: medium skin tone', char: '👦🏽', group: 'People & Body' },
        {
          name: 'boy: medium-dark skin tone',
          char: '👦🏾',
          group: 'People & Body',
        },
        { name: 'boy: dark skin tone', char: '👦🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'girl',
      char: '👧',
      variants: [
        { name: 'girl: light skin tone', char: '👧🏻', group: 'People & Body' },
        {
          name: 'girl: medium-light skin tone',
          char: '👧🏼',
          group: 'People & Body',
        },
        { name: 'girl: medium skin tone', char: '👧🏽', group: 'People & Body' },
        {
          name: 'girl: medium-dark skin tone',
          char: '👧🏾',
          group: 'People & Body',
        },
        { name: 'girl: dark skin tone', char: '👧🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'person',
      char: '🧑',
      variants: [
        { name: 'person: light skin tone', char: '🧑🏻', group: 'People & Body' },
        {
          name: 'person: medium-light skin tone',
          char: '🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone',
          char: '🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone',
          char: '🧑🏾',
          group: 'People & Body',
        },
        { name: 'person: dark skin tone', char: '🧑🏿', group: 'People & Body' },
        {
          name: 'person: red hair',
          char: '🧑\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: light skin tone, red hair',
          char: '🧑🏻\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, red hair',
          char: '🧑🏼\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, red hair',
          char: '🧑🏽\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, red hair',
          char: '🧑🏾\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, red hair',
          char: '🧑🏿\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'person: curly hair',
          char: '🧑\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: light skin tone, curly hair',
          char: '🧑🏻\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, curly hair',
          char: '🧑🏼\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, curly hair',
          char: '🧑🏽\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, curly hair',
          char: '🧑🏾\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, curly hair',
          char: '🧑🏿\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'person: white hair',
          char: '🧑\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'person: light skin tone, white hair',
          char: '🧑🏻\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, white hair',
          char: '🧑🏼\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, white hair',
          char: '🧑🏽\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, white hair',
          char: '🧑🏾\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, white hair',
          char: '🧑🏿\u200d🦳',
          group: 'People & Body',
        },
        { name: 'person: bald', char: '🧑\u200d🦲', group: 'People & Body' },
        {
          name: 'person: light skin tone, bald',
          char: '🧑🏻\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, bald',
          char: '🧑🏼\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, bald',
          char: '🧑🏽\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, bald',
          char: '🧑🏾\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, bald',
          char: '🧑🏿\u200d🦲',
          group: 'People & Body',
        },
        { name: 'health worker', char: '🧑\u200d⚕️', group: 'People & Body' },
        {
          name: 'health worker: light skin tone',
          char: '🧑🏻\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'health worker: medium-light skin tone',
          char: '🧑🏼\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'health worker: medium skin tone',
          char: '🧑🏽\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'health worker: medium-dark skin tone',
          char: '🧑🏾\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'health worker: dark skin tone',
          char: '🧑🏿\u200d⚕️',
          group: 'People & Body',
        },
        { name: 'student', char: '🧑\u200d🎓', group: 'People & Body' },
        {
          name: 'student: light skin tone',
          char: '🧑🏻\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'student: medium-light skin tone',
          char: '🧑🏼\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'student: medium skin tone',
          char: '🧑🏽\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'student: medium-dark skin tone',
          char: '🧑🏾\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'student: dark skin tone',
          char: '🧑🏿\u200d🎓',
          group: 'People & Body',
        },
        { name: 'teacher', char: '🧑\u200d🏫', group: 'People & Body' },
        {
          name: 'teacher: light skin tone',
          char: '🧑🏻\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'teacher: medium-light skin tone',
          char: '🧑🏼\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'teacher: medium skin tone',
          char: '🧑🏽\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'teacher: medium-dark skin tone',
          char: '🧑🏾\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'teacher: dark skin tone',
          char: '🧑🏿\u200d🏫',
          group: 'People & Body',
        },
        { name: 'judge', char: '🧑\u200d⚖️', group: 'People & Body' },
        {
          name: 'judge: light skin tone',
          char: '🧑🏻\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'judge: medium-light skin tone',
          char: '🧑🏼\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'judge: medium skin tone',
          char: '🧑🏽\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'judge: medium-dark skin tone',
          char: '🧑🏾\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'judge: dark skin tone',
          char: '🧑🏿\u200d⚖️',
          group: 'People & Body',
        },
        { name: 'farmer', char: '🧑\u200d🌾', group: 'People & Body' },
        {
          name: 'farmer: light skin tone',
          char: '🧑🏻\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'farmer: medium-light skin tone',
          char: '🧑🏼\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'farmer: medium skin tone',
          char: '🧑🏽\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'farmer: medium-dark skin tone',
          char: '🧑🏾\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'farmer: dark skin tone',
          char: '🧑🏿\u200d🌾',
          group: 'People & Body',
        },
        { name: 'cook', char: '🧑\u200d🍳', group: 'People & Body' },
        {
          name: 'cook: light skin tone',
          char: '🧑🏻\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'cook: medium-light skin tone',
          char: '🧑🏼\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'cook: medium skin tone',
          char: '🧑🏽\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'cook: medium-dark skin tone',
          char: '🧑🏾\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'cook: dark skin tone',
          char: '🧑🏿\u200d🍳',
          group: 'People & Body',
        },
        { name: 'mechanic', char: '🧑\u200d🔧', group: 'People & Body' },
        {
          name: 'mechanic: light skin tone',
          char: '🧑🏻\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'mechanic: medium-light skin tone',
          char: '🧑🏼\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'mechanic: medium skin tone',
          char: '🧑🏽\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'mechanic: medium-dark skin tone',
          char: '🧑🏾\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'mechanic: dark skin tone',
          char: '🧑🏿\u200d🔧',
          group: 'People & Body',
        },
        { name: 'factory worker', char: '🧑\u200d🏭', group: 'People & Body' },
        {
          name: 'factory worker: light skin tone',
          char: '🧑🏻\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'factory worker: medium-light skin tone',
          char: '🧑🏼\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'factory worker: medium skin tone',
          char: '🧑🏽\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'factory worker: medium-dark skin tone',
          char: '🧑🏾\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'factory worker: dark skin tone',
          char: '🧑🏿\u200d🏭',
          group: 'People & Body',
        },
        { name: 'office worker', char: '🧑\u200d💼', group: 'People & Body' },
        {
          name: 'office worker: light skin tone',
          char: '🧑🏻\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'office worker: medium-light skin tone',
          char: '🧑🏼\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'office worker: medium skin tone',
          char: '🧑🏽\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'office worker: medium-dark skin tone',
          char: '🧑🏾\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'office worker: dark skin tone',
          char: '🧑🏿\u200d💼',
          group: 'People & Body',
        },
        { name: 'scientist', char: '🧑\u200d🔬', group: 'People & Body' },
        {
          name: 'scientist: light skin tone',
          char: '🧑🏻\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'scientist: medium-light skin tone',
          char: '🧑🏼\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'scientist: medium skin tone',
          char: '🧑🏽\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'scientist: medium-dark skin tone',
          char: '🧑🏾\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'scientist: dark skin tone',
          char: '🧑🏿\u200d🔬',
          group: 'People & Body',
        },
        { name: 'technologist', char: '🧑\u200d💻', group: 'People & Body' },
        {
          name: 'technologist: light skin tone',
          char: '🧑🏻\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'technologist: medium-light skin tone',
          char: '🧑🏼\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'technologist: medium skin tone',
          char: '🧑🏽\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'technologist: medium-dark skin tone',
          char: '🧑🏾\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'technologist: dark skin tone',
          char: '🧑🏿\u200d💻',
          group: 'People & Body',
        },
        { name: 'singer', char: '🧑\u200d🎤', group: 'People & Body' },
        {
          name: 'singer: light skin tone',
          char: '🧑🏻\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'singer: medium-light skin tone',
          char: '🧑🏼\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'singer: medium skin tone',
          char: '🧑🏽\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'singer: medium-dark skin tone',
          char: '🧑🏾\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'singer: dark skin tone',
          char: '🧑🏿\u200d🎤',
          group: 'People & Body',
        },
        { name: 'artist', char: '🧑\u200d🎨', group: 'People & Body' },
        {
          name: 'artist: light skin tone',
          char: '🧑🏻\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'artist: medium-light skin tone',
          char: '🧑🏼\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'artist: medium skin tone',
          char: '🧑🏽\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'artist: medium-dark skin tone',
          char: '🧑🏾\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'artist: dark skin tone',
          char: '🧑🏿\u200d🎨',
          group: 'People & Body',
        },
        { name: 'pilot', char: '🧑\u200d✈️', group: 'People & Body' },
        {
          name: 'pilot: light skin tone',
          char: '🧑🏻\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'pilot: medium-light skin tone',
          char: '🧑🏼\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'pilot: medium skin tone',
          char: '🧑🏽\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'pilot: medium-dark skin tone',
          char: '🧑🏾\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'pilot: dark skin tone',
          char: '🧑🏿\u200d✈️',
          group: 'People & Body',
        },
        { name: 'astronaut', char: '🧑\u200d🚀', group: 'People & Body' },
        {
          name: 'astronaut: light skin tone',
          char: '🧑🏻\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'astronaut: medium-light skin tone',
          char: '🧑🏼\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'astronaut: medium skin tone',
          char: '🧑🏽\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'astronaut: medium-dark skin tone',
          char: '🧑🏾\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'astronaut: dark skin tone',
          char: '🧑🏿\u200d🚀',
          group: 'People & Body',
        },
        { name: 'firefighter', char: '🧑\u200d🚒', group: 'People & Body' },
        {
          name: 'firefighter: light skin tone',
          char: '🧑🏻\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'firefighter: medium-light skin tone',
          char: '🧑🏼\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'firefighter: medium skin tone',
          char: '🧑🏽\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'firefighter: medium-dark skin tone',
          char: '🧑🏾\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'firefighter: dark skin tone',
          char: '🧑🏿\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby',
          char: '🧑\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby: light skin tone',
          char: '🧑🏻\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby: medium-light skin tone',
          char: '🧑🏼\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby: medium skin tone',
          char: '🧑🏽\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby: medium-dark skin tone',
          char: '🧑🏾\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'person feeding baby: dark skin tone',
          char: '🧑🏿\u200d🍼',
          group: 'People & Body',
        },
        { name: 'mx claus', char: '🧑\u200d🎄', group: 'People & Body' },
        {
          name: 'mx claus: light skin tone',
          char: '🧑🏻\u200d🎄',
          group: 'People & Body',
        },
        {
          name: 'mx claus: medium-light skin tone',
          char: '🧑🏼\u200d🎄',
          group: 'People & Body',
        },
        {
          name: 'mx claus: medium skin tone',
          char: '🧑🏽\u200d🎄',
          group: 'People & Body',
        },
        {
          name: 'mx claus: medium-dark skin tone',
          char: '🧑🏾\u200d🎄',
          group: 'People & Body',
        },
        {
          name: 'mx claus: dark skin tone',
          char: '🧑🏿\u200d🎄',
          group: 'People & Body',
        },
        {
          name: 'person with white cane',
          char: '🧑\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person with white cane: light skin tone',
          char: '🧑🏻\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person with white cane: medium-light skin tone',
          char: '🧑🏼\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person with white cane: medium skin tone',
          char: '🧑🏽\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person with white cane: medium-dark skin tone',
          char: '🧑🏾\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person with white cane: dark skin tone',
          char: '🧑🏿\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair',
          char: '🧑\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair: light skin tone',
          char: '🧑🏻\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair: medium-light skin tone',
          char: '🧑🏼\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair: medium skin tone',
          char: '🧑🏽\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair: medium-dark skin tone',
          char: '🧑🏾\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in motorized wheelchair: dark skin tone',
          char: '🧑🏿\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair',
          char: '🧑\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair: light skin tone',
          char: '🧑🏻\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair: medium-light skin tone',
          char: '🧑🏼\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair: medium skin tone',
          char: '🧑🏽\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair: medium-dark skin tone',
          char: '🧑🏾\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'person in manual wheelchair: dark skin tone',
          char: '🧑🏿\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'people holding hands',
          char: '🧑\u200d🤝\u200d🧑',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: light skin tone',
          char: '🧑🏻\u200d🤝\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: light skin tone, medium-light skin tone',
          char: '🧑🏻\u200d🤝\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: light skin tone, medium skin tone',
          char: '🧑🏻\u200d🤝\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: light skin tone, medium-dark skin tone',
          char: '🧑🏻\u200d🤝\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: light skin tone, dark skin tone',
          char: '🧑🏻\u200d🤝\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-light skin tone, light skin tone',
          char: '🧑🏼\u200d🤝\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-light skin tone',
          char: '🧑🏼\u200d🤝\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name:
            'people holding hands: medium-light skin tone, medium skin tone',
          char: '🧑🏼\u200d🤝\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'people holding hands: medium-light skin tone, medium-dark skin tone',
          char: '🧑🏼\u200d🤝\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-light skin tone, dark skin tone',
          char: '🧑🏼\u200d🤝\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium skin tone, light skin tone',
          char: '🧑🏽\u200d🤝\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'people holding hands: medium skin tone, medium-light skin tone',
          char: '🧑🏽\u200d🤝\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium skin tone',
          char: '🧑🏽\u200d🤝\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium skin tone, medium-dark skin tone',
          char: '🧑🏽\u200d🤝\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium skin tone, dark skin tone',
          char: '🧑🏽\u200d🤝\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-dark skin tone, light skin tone',
          char: '🧑🏾\u200d🤝\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'people holding hands: medium-dark skin tone, medium-light skin tone',
          char: '🧑🏾\u200d🤝\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-dark skin tone, medium skin tone',
          char: '🧑🏾\u200d🤝\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-dark skin tone',
          char: '🧑🏾\u200d🤝\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: medium-dark skin tone, dark skin tone',
          char: '🧑🏾\u200d🤝\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: dark skin tone, light skin tone',
          char: '🧑🏿\u200d🤝\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: dark skin tone, medium-light skin tone',
          char: '🧑🏿\u200d🤝\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: dark skin tone, medium skin tone',
          char: '🧑🏿\u200d🤝\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: dark skin tone, medium-dark skin tone',
          char: '🧑🏿\u200d🤝\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'people holding hands: dark skin tone',
          char: '🧑🏿\u200d🤝\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, light skin tone, medium-light skin tone',
          char: '🧑🏻\u200d❤️\u200d💋\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, light skin tone, medium skin tone',
          char: '🧑🏻\u200d❤️\u200d💋\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, light skin tone, medium-dark skin tone',
          char: '🧑🏻\u200d❤️\u200d💋\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, light skin tone, dark skin tone',
          char: '🧑🏻\u200d❤️\u200d💋\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium-light skin tone, light skin tone',
          char: '🧑🏼\u200d❤️\u200d💋\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'kiss: person, person, medium-light skin tone, medium skin tone',
          char: '🧑🏼\u200d❤️\u200d💋\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'kiss: person, person, medium-light skin tone, medium-dark skin tone',
          char: '🧑🏼\u200d❤️\u200d💋\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium-light skin tone, dark skin tone',
          char: '🧑🏼\u200d❤️\u200d💋\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium skin tone, light skin tone',
          char: '🧑🏽\u200d❤️\u200d💋\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'kiss: person, person, medium skin tone, medium-light skin tone',
          char: '🧑🏽\u200d❤️\u200d💋\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium skin tone, medium-dark skin tone',
          char: '🧑🏽\u200d❤️\u200d💋\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium skin tone, dark skin tone',
          char: '🧑🏽\u200d❤️\u200d💋\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium-dark skin tone, light skin tone',
          char: '🧑🏾\u200d❤️\u200d💋\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'kiss: person, person, medium-dark skin tone, medium-light skin tone',
          char: '🧑🏾\u200d❤️\u200d💋\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium-dark skin tone, medium skin tone',
          char: '🧑🏾\u200d❤️\u200d💋\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, medium-dark skin tone, dark skin tone',
          char: '🧑🏾\u200d❤️\u200d💋\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, dark skin tone, light skin tone',
          char: '🧑🏿\u200d❤️\u200d💋\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, dark skin tone, medium-light skin tone',
          char: '🧑🏿\u200d❤️\u200d💋\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, dark skin tone, medium skin tone',
          char: '🧑🏿\u200d❤️\u200d💋\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: person, person, dark skin tone, medium-dark skin tone',
          char: '🧑🏿\u200d❤️\u200d💋\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, light skin tone, medium-light skin tone',
          char: '🧑🏻\u200d❤️\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, light skin tone, medium skin tone',
          char: '🧑🏻\u200d❤️\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, light skin tone, medium-dark skin tone',
          char: '🧑🏻\u200d❤️\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, light skin tone, dark skin tone',
          char: '🧑🏻\u200d❤️\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-light skin tone, light skin tone',
          char: '🧑🏼\u200d❤️\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-light skin tone, medium skin tone',
          char: '🧑🏼\u200d❤️\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-light skin tone, medium-dark skin tone',
          char: '🧑🏼\u200d❤️\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-light skin tone, dark skin tone',
          char: '🧑🏼\u200d❤️\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium skin tone, light skin tone',
          char: '🧑🏽\u200d❤️\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium skin tone, medium-light skin tone',
          char: '🧑🏽\u200d❤️\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium skin tone, medium-dark skin tone',
          char: '🧑🏽\u200d❤️\u200d🧑🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium skin tone, dark skin tone',
          char: '🧑🏽\u200d❤️\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-dark skin tone, light skin tone',
          char: '🧑🏾\u200d❤️\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-dark skin tone, medium-light skin tone',
          char: '🧑🏾\u200d❤️\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-dark skin tone, medium skin tone',
          char: '🧑🏾\u200d❤️\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, medium-dark skin tone, dark skin tone',
          char: '🧑🏾\u200d❤️\u200d🧑🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, dark skin tone, light skin tone',
          char: '🧑🏿\u200d❤️\u200d🧑🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, dark skin tone, medium-light skin tone',
          char: '🧑🏿\u200d❤️\u200d🧑🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, dark skin tone, medium skin tone',
          char: '🧑🏿\u200d❤️\u200d🧑🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: person, person, dark skin tone, medium-dark skin tone',
          char: '🧑🏿\u200d❤️\u200d🧑🏾',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person: blond hair',
      char: '👱',
      variants: [
        {
          name: 'person: light skin tone, blond hair',
          char: '👱🏻',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, blond hair',
          char: '👱🏼',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, blond hair',
          char: '👱🏽',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, blond hair',
          char: '👱🏾',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, blond hair',
          char: '👱🏿',
          group: 'People & Body',
        },
        {
          name: 'woman: blond hair',
          char: '👱\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: light skin tone, blond hair',
          char: '👱🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, blond hair',
          char: '👱🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, blond hair',
          char: '👱🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, blond hair',
          char: '👱🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, blond hair',
          char: '👱🏿\u200d♀️',
          group: 'People & Body',
        },
        { name: 'man: blond hair', char: '👱\u200d♂️', group: 'People & Body' },
        {
          name: 'man: light skin tone, blond hair',
          char: '👱🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, blond hair',
          char: '👱🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, blond hair',
          char: '👱🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, blond hair',
          char: '👱🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, blond hair',
          char: '👱🏿\u200d♂️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'man',
      char: '👨',
      variants: [
        { name: 'man: light skin tone', char: '👨🏻', group: 'People & Body' },
        {
          name: 'man: medium-light skin tone',
          char: '👨🏼',
          group: 'People & Body',
        },
        { name: 'man: medium skin tone', char: '👨🏽', group: 'People & Body' },
        {
          name: 'man: medium-dark skin tone',
          char: '👨🏾',
          group: 'People & Body',
        },
        { name: 'man: dark skin tone', char: '👨🏿', group: 'People & Body' },
        { name: 'man: red hair', char: '👨\u200d🦰', group: 'People & Body' },
        {
          name: 'man: light skin tone, red hair',
          char: '👨🏻\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, red hair',
          char: '👨🏼\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, red hair',
          char: '👨🏽\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, red hair',
          char: '👨🏾\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, red hair',
          char: '👨🏿\u200d🦰',
          group: 'People & Body',
        },
        { name: 'man: curly hair', char: '👨\u200d🦱', group: 'People & Body' },
        {
          name: 'man: light skin tone, curly hair',
          char: '👨🏻\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, curly hair',
          char: '👨🏼\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, curly hair',
          char: '👨🏽\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, curly hair',
          char: '👨🏾\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, curly hair',
          char: '👨🏿\u200d🦱',
          group: 'People & Body',
        },
        { name: 'man: white hair', char: '👨\u200d🦳', group: 'People & Body' },
        {
          name: 'man: light skin tone, white hair',
          char: '👨🏻\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, white hair',
          char: '👨🏼\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, white hair',
          char: '👨🏽\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, white hair',
          char: '👨🏾\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, white hair',
          char: '👨🏿\u200d🦳',
          group: 'People & Body',
        },
        { name: 'man: bald', char: '👨\u200d🦲', group: 'People & Body' },
        {
          name: 'man: light skin tone, bald',
          char: '👨🏻\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, bald',
          char: '👨🏼\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, bald',
          char: '👨🏽\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, bald',
          char: '👨🏾\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, bald',
          char: '👨🏿\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'man health worker',
          char: '👨\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'man health worker: light skin tone',
          char: '👨🏻\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'man health worker: medium-light skin tone',
          char: '👨🏼\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'man health worker: medium skin tone',
          char: '👨🏽\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'man health worker: medium-dark skin tone',
          char: '👨🏾\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'man health worker: dark skin tone',
          char: '👨🏿\u200d⚕️',
          group: 'People & Body',
        },
        { name: 'man student', char: '👨\u200d🎓', group: 'People & Body' },
        {
          name: 'man student: light skin tone',
          char: '👨🏻\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'man student: medium-light skin tone',
          char: '👨🏼\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'man student: medium skin tone',
          char: '👨🏽\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'man student: medium-dark skin tone',
          char: '👨🏾\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'man student: dark skin tone',
          char: '👨🏿\u200d🎓',
          group: 'People & Body',
        },
        { name: 'man teacher', char: '👨\u200d🏫', group: 'People & Body' },
        {
          name: 'man teacher: light skin tone',
          char: '👨🏻\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'man teacher: medium-light skin tone',
          char: '👨🏼\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'man teacher: medium skin tone',
          char: '👨🏽\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'man teacher: medium-dark skin tone',
          char: '👨🏾\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'man teacher: dark skin tone',
          char: '👨🏿\u200d🏫',
          group: 'People & Body',
        },
        { name: 'man judge', char: '👨\u200d⚖️', group: 'People & Body' },
        {
          name: 'man judge: light skin tone',
          char: '👨🏻\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'man judge: medium-light skin tone',
          char: '👨🏼\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'man judge: medium skin tone',
          char: '👨🏽\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'man judge: medium-dark skin tone',
          char: '👨🏾\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'man judge: dark skin tone',
          char: '👨🏿\u200d⚖️',
          group: 'People & Body',
        },
        { name: 'man farmer', char: '👨\u200d🌾', group: 'People & Body' },
        {
          name: 'man farmer: light skin tone',
          char: '👨🏻\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'man farmer: medium-light skin tone',
          char: '👨🏼\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'man farmer: medium skin tone',
          char: '👨🏽\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'man farmer: medium-dark skin tone',
          char: '👨🏾\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'man farmer: dark skin tone',
          char: '👨🏿\u200d🌾',
          group: 'People & Body',
        },
        { name: 'man cook', char: '👨\u200d🍳', group: 'People & Body' },
        {
          name: 'man cook: light skin tone',
          char: '👨🏻\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'man cook: medium-light skin tone',
          char: '👨🏼\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'man cook: medium skin tone',
          char: '👨🏽\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'man cook: medium-dark skin tone',
          char: '👨🏾\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'man cook: dark skin tone',
          char: '👨🏿\u200d🍳',
          group: 'People & Body',
        },
        { name: 'man mechanic', char: '👨\u200d🔧', group: 'People & Body' },
        {
          name: 'man mechanic: light skin tone',
          char: '👨🏻\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'man mechanic: medium-light skin tone',
          char: '👨🏼\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'man mechanic: medium skin tone',
          char: '👨🏽\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'man mechanic: medium-dark skin tone',
          char: '👨🏾\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'man mechanic: dark skin tone',
          char: '👨🏿\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'man factory worker',
          char: '👨\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man factory worker: light skin tone',
          char: '👨🏻\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man factory worker: medium-light skin tone',
          char: '👨🏼\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man factory worker: medium skin tone',
          char: '👨🏽\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man factory worker: medium-dark skin tone',
          char: '👨🏾\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man factory worker: dark skin tone',
          char: '👨🏿\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'man office worker',
          char: '👨\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'man office worker: light skin tone',
          char: '👨🏻\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'man office worker: medium-light skin tone',
          char: '👨🏼\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'man office worker: medium skin tone',
          char: '👨🏽\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'man office worker: medium-dark skin tone',
          char: '👨🏾\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'man office worker: dark skin tone',
          char: '👨🏿\u200d💼',
          group: 'People & Body',
        },
        { name: 'man scientist', char: '👨\u200d🔬', group: 'People & Body' },
        {
          name: 'man scientist: light skin tone',
          char: '👨🏻\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'man scientist: medium-light skin tone',
          char: '👨🏼\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'man scientist: medium skin tone',
          char: '👨🏽\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'man scientist: medium-dark skin tone',
          char: '👨🏾\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'man scientist: dark skin tone',
          char: '👨🏿\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'man technologist',
          char: '👨\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'man technologist: light skin tone',
          char: '👨🏻\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'man technologist: medium-light skin tone',
          char: '👨🏼\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'man technologist: medium skin tone',
          char: '👨🏽\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'man technologist: medium-dark skin tone',
          char: '👨🏾\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'man technologist: dark skin tone',
          char: '👨🏿\u200d💻',
          group: 'People & Body',
        },
        { name: 'man singer', char: '👨\u200d🎤', group: 'People & Body' },
        {
          name: 'man singer: light skin tone',
          char: '👨🏻\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'man singer: medium-light skin tone',
          char: '👨🏼\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'man singer: medium skin tone',
          char: '👨🏽\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'man singer: medium-dark skin tone',
          char: '👨🏾\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'man singer: dark skin tone',
          char: '👨🏿\u200d🎤',
          group: 'People & Body',
        },
        { name: 'man artist', char: '👨\u200d🎨', group: 'People & Body' },
        {
          name: 'man artist: light skin tone',
          char: '👨🏻\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'man artist: medium-light skin tone',
          char: '👨🏼\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'man artist: medium skin tone',
          char: '👨🏽\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'man artist: medium-dark skin tone',
          char: '👨🏾\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'man artist: dark skin tone',
          char: '👨🏿\u200d🎨',
          group: 'People & Body',
        },
        { name: 'man pilot', char: '👨\u200d✈️', group: 'People & Body' },
        {
          name: 'man pilot: light skin tone',
          char: '👨🏻\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'man pilot: medium-light skin tone',
          char: '👨🏼\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'man pilot: medium skin tone',
          char: '👨🏽\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'man pilot: medium-dark skin tone',
          char: '👨🏾\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'man pilot: dark skin tone',
          char: '👨🏿\u200d✈️',
          group: 'People & Body',
        },
        { name: 'man astronaut', char: '👨\u200d🚀', group: 'People & Body' },
        {
          name: 'man astronaut: light skin tone',
          char: '👨🏻\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'man astronaut: medium-light skin tone',
          char: '👨🏼\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'man astronaut: medium skin tone',
          char: '👨🏽\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'man astronaut: medium-dark skin tone',
          char: '👨🏾\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'man astronaut: dark skin tone',
          char: '👨🏿\u200d🚀',
          group: 'People & Body',
        },
        { name: 'man firefighter', char: '👨\u200d🚒', group: 'People & Body' },
        {
          name: 'man firefighter: light skin tone',
          char: '👨🏻\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'man firefighter: medium-light skin tone',
          char: '👨🏼\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'man firefighter: medium skin tone',
          char: '👨🏽\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'man firefighter: medium-dark skin tone',
          char: '👨🏾\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'man firefighter: dark skin tone',
          char: '👨🏿\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby',
          char: '👨\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby: light skin tone',
          char: '👨🏻\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby: medium-light skin tone',
          char: '👨🏼\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby: medium skin tone',
          char: '👨🏽\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby: medium-dark skin tone',
          char: '👨🏾\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man feeding baby: dark skin tone',
          char: '👨🏿\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'man with white cane',
          char: '👨\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man with white cane: light skin tone',
          char: '👨🏻\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man with white cane: medium-light skin tone',
          char: '👨🏼\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man with white cane: medium skin tone',
          char: '👨🏽\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man with white cane: medium-dark skin tone',
          char: '👨🏾\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man with white cane: dark skin tone',
          char: '👨🏿\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair',
          char: '👨\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair: light skin tone',
          char: '👨🏻\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair: medium-light skin tone',
          char: '👨🏼\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair: medium skin tone',
          char: '👨🏽\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair: medium-dark skin tone',
          char: '👨🏾\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in motorized wheelchair: dark skin tone',
          char: '👨🏿\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair',
          char: '👨\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair: light skin tone',
          char: '👨🏻\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair: medium-light skin tone',
          char: '👨🏼\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair: medium skin tone',
          char: '👨🏽\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair: medium-dark skin tone',
          char: '👨🏾\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'man in manual wheelchair: dark skin tone',
          char: '👨🏿\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: light skin tone, medium-light skin tone',
          char: '👨🏻\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: light skin tone, medium skin tone',
          char: '👨🏻\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: light skin tone, medium-dark skin tone',
          char: '👨🏻\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: light skin tone, dark skin tone',
          char: '👨🏻\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-light skin tone, light skin tone',
          char: '👨🏼\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-light skin tone, medium skin tone',
          char: '👨🏼\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'men holding hands: medium-light skin tone, medium-dark skin tone',
          char: '👨🏼\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-light skin tone, dark skin tone',
          char: '👨🏼\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium skin tone, light skin tone',
          char: '👨🏽\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium skin tone, medium-light skin tone',
          char: '👨🏽\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium skin tone, medium-dark skin tone',
          char: '👨🏽\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium skin tone, dark skin tone',
          char: '👨🏽\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-dark skin tone, light skin tone',
          char: '👨🏾\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'men holding hands: medium-dark skin tone, medium-light skin tone',
          char: '👨🏾\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-dark skin tone, medium skin tone',
          char: '👨🏾\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-dark skin tone, dark skin tone',
          char: '👨🏾\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: dark skin tone, light skin tone',
          char: '👨🏿\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: dark skin tone, medium-light skin tone',
          char: '👨🏿\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: dark skin tone, medium skin tone',
          char: '👨🏿\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: dark skin tone, medium-dark skin tone',
          char: '👨🏿\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man',
          char: '👨\u200d❤️\u200d💋\u200d👨',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, light skin tone',
          char: '👨🏻\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, light skin tone, medium-light skin tone',
          char: '👨🏻\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, light skin tone, medium skin tone',
          char: '👨🏻\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, light skin tone, medium-dark skin tone',
          char: '👨🏻\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, light skin tone, dark skin tone',
          char: '👨🏻\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-light skin tone, light skin tone',
          char: '👨🏼\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-light skin tone',
          char: '👨🏼\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-light skin tone, medium skin tone',
          char: '👨🏼\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-light skin tone, medium-dark skin tone',
          char: '👨🏼\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-light skin tone, dark skin tone',
          char: '👨🏼\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium skin tone, light skin tone',
          char: '👨🏽\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium skin tone, medium-light skin tone',
          char: '👨🏽\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium skin tone',
          char: '👨🏽\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium skin tone, medium-dark skin tone',
          char: '👨🏽\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium skin tone, dark skin tone',
          char: '👨🏽\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-dark skin tone, light skin tone',
          char: '👨🏾\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-dark skin tone, medium-light skin tone',
          char: '👨🏾\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-dark skin tone, medium skin tone',
          char: '👨🏾\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-dark skin tone',
          char: '👨🏾\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, medium-dark skin tone, dark skin tone',
          char: '👨🏾\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, dark skin tone, light skin tone',
          char: '👨🏿\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, dark skin tone, medium-light skin tone',
          char: '👨🏿\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, dark skin tone, medium skin tone',
          char: '👨🏿\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, dark skin tone, medium-dark skin tone',
          char: '👨🏿\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: man, man, dark skin tone',
          char: '👨🏿\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man',
          char: '👨\u200d❤️\u200d👨',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, light skin tone',
          char: '👨🏻\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, light skin tone, medium-light skin tone',
          char: '👨🏻\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, light skin tone, medium skin tone',
          char: '👨🏻\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, light skin tone, medium-dark skin tone',
          char: '👨🏻\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, light skin tone, dark skin tone',
          char: '👨🏻\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-light skin tone, light skin tone',
          char: '👨🏼\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, medium-light skin tone',
          char: '👨🏼\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-light skin tone, medium skin tone',
          char: '👨🏼\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-light skin tone, medium-dark skin tone',
          char: '👨🏼\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-light skin tone, dark skin tone',
          char: '👨🏼\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium skin tone, light skin tone',
          char: '👨🏽\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium skin tone, medium-light skin tone',
          char: '👨🏽\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, medium skin tone',
          char: '👨🏽\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium skin tone, medium-dark skin tone',
          char: '👨🏽\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, medium skin tone, dark skin tone',
          char: '👨🏽\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-dark skin tone, light skin tone',
          char: '👨🏾\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-dark skin tone, medium-light skin tone',
          char: '👨🏾\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-dark skin tone, medium skin tone',
          char: '👨🏾\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, medium-dark skin tone',
          char: '👨🏾\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, medium-dark skin tone, dark skin tone',
          char: '👨🏾\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, dark skin tone, light skin tone',
          char: '👨🏿\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, dark skin tone, medium-light skin tone',
          char: '👨🏿\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, dark skin tone, medium skin tone',
          char: '👨🏿\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: man, man, dark skin tone, medium-dark skin tone',
          char: '👨🏿\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: man, man, dark skin tone',
          char: '👨🏿\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'family: man, woman, boy',
          char: '👨\u200d👩\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, woman, girl',
          char: '👨\u200d👩\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: man, woman, girl, boy',
          char: '👨\u200d👩\u200d👧\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, woman, boy, boy',
          char: '👨\u200d👩\u200d👦\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, woman, girl, girl',
          char: '👨\u200d👩\u200d👧\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: man, man, boy',
          char: '👨\u200d👨\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, man, girl',
          char: '👨\u200d👨\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: man, man, girl, boy',
          char: '👨\u200d👨\u200d👧\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, man, boy, boy',
          char: '👨\u200d👨\u200d👦\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, man, girl, girl',
          char: '👨\u200d👨\u200d👧\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: man, boy',
          char: '👨\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, boy, boy',
          char: '👨\u200d👦\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, girl',
          char: '👨\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: man, girl, boy',
          char: '👨\u200d👧\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: man, girl, girl',
          char: '👨\u200d👧\u200d👧',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person: beard',
      char: '🧔',
      variants: [
        {
          name: 'person: light skin tone, beard',
          char: '🧔🏻',
          group: 'People & Body',
        },
        {
          name: 'person: medium-light skin tone, beard',
          char: '🧔🏼',
          group: 'People & Body',
        },
        {
          name: 'person: medium skin tone, beard',
          char: '🧔🏽',
          group: 'People & Body',
        },
        {
          name: 'person: medium-dark skin tone, beard',
          char: '🧔🏾',
          group: 'People & Body',
        },
        {
          name: 'person: dark skin tone, beard',
          char: '🧔🏿',
          group: 'People & Body',
        },
        { name: 'man: beard', char: '🧔\u200d♂️', group: 'People & Body' },
        {
          name: 'man: light skin tone, beard',
          char: '🧔🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium-light skin tone, beard',
          char: '🧔🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium skin tone, beard',
          char: '🧔🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: medium-dark skin tone, beard',
          char: '🧔🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man: dark skin tone, beard',
          char: '🧔🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman: beard', char: '🧔\u200d♀️', group: 'People & Body' },
        {
          name: 'woman: light skin tone, beard',
          char: '🧔🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, beard',
          char: '🧔🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, beard',
          char: '🧔🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, beard',
          char: '🧔🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, beard',
          char: '🧔🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'woman',
      char: '👩',
      variants: [
        { name: 'woman: light skin tone', char: '👩🏻', group: 'People & Body' },
        {
          name: 'woman: medium-light skin tone',
          char: '👩🏼',
          group: 'People & Body',
        },
        { name: 'woman: medium skin tone', char: '👩🏽', group: 'People & Body' },
        {
          name: 'woman: medium-dark skin tone',
          char: '👩🏾',
          group: 'People & Body',
        },
        { name: 'woman: dark skin tone', char: '👩🏿', group: 'People & Body' },
        { name: 'woman: red hair', char: '👩\u200d🦰', group: 'People & Body' },
        {
          name: 'woman: light skin tone, red hair',
          char: '👩🏻\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, red hair',
          char: '👩🏼\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, red hair',
          char: '👩🏽\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, red hair',
          char: '👩🏾\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, red hair',
          char: '👩🏿\u200d🦰',
          group: 'People & Body',
        },
        {
          name: 'woman: curly hair',
          char: '👩\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: light skin tone, curly hair',
          char: '👩🏻\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, curly hair',
          char: '👩🏼\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, curly hair',
          char: '👩🏽\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, curly hair',
          char: '👩🏾\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, curly hair',
          char: '👩🏿\u200d🦱',
          group: 'People & Body',
        },
        {
          name: 'woman: white hair',
          char: '👩\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'woman: light skin tone, white hair',
          char: '👩🏻\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, white hair',
          char: '👩🏼\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, white hair',
          char: '👩🏽\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, white hair',
          char: '👩🏾\u200d🦳',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, white hair',
          char: '👩🏿\u200d🦳',
          group: 'People & Body',
        },
        { name: 'woman: bald', char: '👩\u200d🦲', group: 'People & Body' },
        {
          name: 'woman: light skin tone, bald',
          char: '👩🏻\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-light skin tone, bald',
          char: '👩🏼\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'woman: medium skin tone, bald',
          char: '👩🏽\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'woman: medium-dark skin tone, bald',
          char: '👩🏾\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'woman: dark skin tone, bald',
          char: '👩🏿\u200d🦲',
          group: 'People & Body',
        },
        {
          name: 'woman health worker',
          char: '👩\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'woman health worker: light skin tone',
          char: '👩🏻\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'woman health worker: medium-light skin tone',
          char: '👩🏼\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'woman health worker: medium skin tone',
          char: '👩🏽\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'woman health worker: medium-dark skin tone',
          char: '👩🏾\u200d⚕️',
          group: 'People & Body',
        },
        {
          name: 'woman health worker: dark skin tone',
          char: '👩🏿\u200d⚕️',
          group: 'People & Body',
        },
        { name: 'woman student', char: '👩\u200d🎓', group: 'People & Body' },
        {
          name: 'woman student: light skin tone',
          char: '👩🏻\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'woman student: medium-light skin tone',
          char: '👩🏼\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'woman student: medium skin tone',
          char: '👩🏽\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'woman student: medium-dark skin tone',
          char: '👩🏾\u200d🎓',
          group: 'People & Body',
        },
        {
          name: 'woman student: dark skin tone',
          char: '👩🏿\u200d🎓',
          group: 'People & Body',
        },
        { name: 'woman teacher', char: '👩\u200d🏫', group: 'People & Body' },
        {
          name: 'woman teacher: light skin tone',
          char: '👩🏻\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'woman teacher: medium-light skin tone',
          char: '👩🏼\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'woman teacher: medium skin tone',
          char: '👩🏽\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'woman teacher: medium-dark skin tone',
          char: '👩🏾\u200d🏫',
          group: 'People & Body',
        },
        {
          name: 'woman teacher: dark skin tone',
          char: '👩🏿\u200d🏫',
          group: 'People & Body',
        },
        { name: 'woman judge', char: '👩\u200d⚖️', group: 'People & Body' },
        {
          name: 'woman judge: light skin tone',
          char: '👩🏻\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'woman judge: medium-light skin tone',
          char: '👩🏼\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'woman judge: medium skin tone',
          char: '👩🏽\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'woman judge: medium-dark skin tone',
          char: '👩🏾\u200d⚖️',
          group: 'People & Body',
        },
        {
          name: 'woman judge: dark skin tone',
          char: '👩🏿\u200d⚖️',
          group: 'People & Body',
        },
        { name: 'woman farmer', char: '👩\u200d🌾', group: 'People & Body' },
        {
          name: 'woman farmer: light skin tone',
          char: '👩🏻\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'woman farmer: medium-light skin tone',
          char: '👩🏼\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'woman farmer: medium skin tone',
          char: '👩🏽\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'woman farmer: medium-dark skin tone',
          char: '👩🏾\u200d🌾',
          group: 'People & Body',
        },
        {
          name: 'woman farmer: dark skin tone',
          char: '👩🏿\u200d🌾',
          group: 'People & Body',
        },
        { name: 'woman cook', char: '👩\u200d🍳', group: 'People & Body' },
        {
          name: 'woman cook: light skin tone',
          char: '👩🏻\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'woman cook: medium-light skin tone',
          char: '👩🏼\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'woman cook: medium skin tone',
          char: '👩🏽\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'woman cook: medium-dark skin tone',
          char: '👩🏾\u200d🍳',
          group: 'People & Body',
        },
        {
          name: 'woman cook: dark skin tone',
          char: '👩🏿\u200d🍳',
          group: 'People & Body',
        },
        { name: 'woman mechanic', char: '👩\u200d🔧', group: 'People & Body' },
        {
          name: 'woman mechanic: light skin tone',
          char: '👩🏻\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'woman mechanic: medium-light skin tone',
          char: '👩🏼\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'woman mechanic: medium skin tone',
          char: '👩🏽\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'woman mechanic: medium-dark skin tone',
          char: '👩🏾\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'woman mechanic: dark skin tone',
          char: '👩🏿\u200d🔧',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker',
          char: '👩\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker: light skin tone',
          char: '👩🏻\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker: medium-light skin tone',
          char: '👩🏼\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker: medium skin tone',
          char: '👩🏽\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker: medium-dark skin tone',
          char: '👩🏾\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman factory worker: dark skin tone',
          char: '👩🏿\u200d🏭',
          group: 'People & Body',
        },
        {
          name: 'woman office worker',
          char: '👩\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'woman office worker: light skin tone',
          char: '👩🏻\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'woman office worker: medium-light skin tone',
          char: '👩🏼\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'woman office worker: medium skin tone',
          char: '👩🏽\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'woman office worker: medium-dark skin tone',
          char: '👩🏾\u200d💼',
          group: 'People & Body',
        },
        {
          name: 'woman office worker: dark skin tone',
          char: '👩🏿\u200d💼',
          group: 'People & Body',
        },
        { name: 'woman scientist', char: '👩\u200d🔬', group: 'People & Body' },
        {
          name: 'woman scientist: light skin tone',
          char: '👩🏻\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'woman scientist: medium-light skin tone',
          char: '👩🏼\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'woman scientist: medium skin tone',
          char: '👩🏽\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'woman scientist: medium-dark skin tone',
          char: '👩🏾\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'woman scientist: dark skin tone',
          char: '👩🏿\u200d🔬',
          group: 'People & Body',
        },
        {
          name: 'woman technologist',
          char: '👩\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'woman technologist: light skin tone',
          char: '👩🏻\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'woman technologist: medium-light skin tone',
          char: '👩🏼\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'woman technologist: medium skin tone',
          char: '👩🏽\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'woman technologist: medium-dark skin tone',
          char: '👩🏾\u200d💻',
          group: 'People & Body',
        },
        {
          name: 'woman technologist: dark skin tone',
          char: '👩🏿\u200d💻',
          group: 'People & Body',
        },
        { name: 'woman singer', char: '👩\u200d🎤', group: 'People & Body' },
        {
          name: 'woman singer: light skin tone',
          char: '👩🏻\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'woman singer: medium-light skin tone',
          char: '👩🏼\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'woman singer: medium skin tone',
          char: '👩🏽\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'woman singer: medium-dark skin tone',
          char: '👩🏾\u200d🎤',
          group: 'People & Body',
        },
        {
          name: 'woman singer: dark skin tone',
          char: '👩🏿\u200d🎤',
          group: 'People & Body',
        },
        { name: 'woman artist', char: '👩\u200d🎨', group: 'People & Body' },
        {
          name: 'woman artist: light skin tone',
          char: '👩🏻\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'woman artist: medium-light skin tone',
          char: '👩🏼\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'woman artist: medium skin tone',
          char: '👩🏽\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'woman artist: medium-dark skin tone',
          char: '👩🏾\u200d🎨',
          group: 'People & Body',
        },
        {
          name: 'woman artist: dark skin tone',
          char: '👩🏿\u200d🎨',
          group: 'People & Body',
        },
        { name: 'woman pilot', char: '👩\u200d✈️', group: 'People & Body' },
        {
          name: 'woman pilot: light skin tone',
          char: '👩🏻\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'woman pilot: medium-light skin tone',
          char: '👩🏼\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'woman pilot: medium skin tone',
          char: '👩🏽\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'woman pilot: medium-dark skin tone',
          char: '👩🏾\u200d✈️',
          group: 'People & Body',
        },
        {
          name: 'woman pilot: dark skin tone',
          char: '👩🏿\u200d✈️',
          group: 'People & Body',
        },
        { name: 'woman astronaut', char: '👩\u200d🚀', group: 'People & Body' },
        {
          name: 'woman astronaut: light skin tone',
          char: '👩🏻\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'woman astronaut: medium-light skin tone',
          char: '👩🏼\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'woman astronaut: medium skin tone',
          char: '👩🏽\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'woman astronaut: medium-dark skin tone',
          char: '👩🏾\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'woman astronaut: dark skin tone',
          char: '👩🏿\u200d🚀',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter',
          char: '👩\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter: light skin tone',
          char: '👩🏻\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter: medium-light skin tone',
          char: '👩🏼\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter: medium skin tone',
          char: '👩🏽\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter: medium-dark skin tone',
          char: '👩🏾\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman firefighter: dark skin tone',
          char: '👩🏿\u200d🚒',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby',
          char: '👩\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby: light skin tone',
          char: '👩🏻\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby: medium-light skin tone',
          char: '👩🏼\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby: medium skin tone',
          char: '👩🏽\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby: medium-dark skin tone',
          char: '👩🏾\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman feeding baby: dark skin tone',
          char: '👩🏿\u200d🍼',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane',
          char: '👩\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane: light skin tone',
          char: '👩🏻\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane: medium-light skin tone',
          char: '👩🏼\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane: medium skin tone',
          char: '👩🏽\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane: medium-dark skin tone',
          char: '👩🏾\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman with white cane: dark skin tone',
          char: '👩🏿\u200d🦯',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair',
          char: '👩\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair: light skin tone',
          char: '👩🏻\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair: medium-light skin tone',
          char: '👩🏼\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair: medium skin tone',
          char: '👩🏽\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair: medium-dark skin tone',
          char: '👩🏾\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in motorized wheelchair: dark skin tone',
          char: '👩🏿\u200d🦼',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair',
          char: '👩\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair: light skin tone',
          char: '👩🏻\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair: medium-light skin tone',
          char: '👩🏼\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair: medium skin tone',
          char: '👩🏽\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair: medium-dark skin tone',
          char: '👩🏾\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'woman in manual wheelchair: dark skin tone',
          char: '👩🏿\u200d🦽',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: light skin tone, medium-light skin tone',
          char: '👩🏻\u200d🤝\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: light skin tone, medium skin tone',
          char: '👩🏻\u200d🤝\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d🤝\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: light skin tone, dark skin tone',
          char: '👩🏻\u200d🤝\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-light skin tone, light skin tone',
          char: '👩🏼\u200d🤝\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d🤝\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'women holding hands: medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d🤝\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d🤝\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium skin tone, light skin tone',
          char: '👩🏽\u200d🤝\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d🤝\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d🤝\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium skin tone, dark skin tone',
          char: '👩🏽\u200d🤝\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d🤝\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'women holding hands: medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d🤝\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d🤝\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d🤝\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: dark skin tone, light skin tone',
          char: '👩🏿\u200d🤝\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d🤝\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: dark skin tone, medium skin tone',
          char: '👩🏿\u200d🤝\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d🤝\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: light skin tone, medium-light skin tone',
          char: '👩🏻\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: light skin tone, medium skin tone',
          char: '👩🏻\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: light skin tone, dark skin tone',
          char: '👩🏻\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-light skin tone, light skin tone',
          char: '👩🏼\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium skin tone, light skin tone',
          char: '👩🏽\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: medium skin tone, dark skin tone',
          char: '👩🏽\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d🤝\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: dark skin tone, light skin tone',
          char: '👩🏿\u200d🤝\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d🤝\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: dark skin tone, medium skin tone',
          char: '👩🏿\u200d🤝\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'woman and man holding hands: dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d🤝\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man',
          char: '👩\u200d❤️\u200d💋\u200d👨',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, light skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, light skin tone, medium-light skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, light skin tone, medium skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, light skin tone, dark skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-light skin tone, light skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-light skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'kiss: woman, man, medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium skin tone, light skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium skin tone, dark skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'kiss: woman, man, medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-dark skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, dark skin tone, light skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, dark skin tone, medium skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, man, dark skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman',
          char: '👩\u200d❤️\u200d💋\u200d👩',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, light skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, light skin tone, medium-light skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, light skin tone, medium skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, light skin tone, dark skin tone',
          char: '👩🏻\u200d❤️\u200d💋\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-light skin tone, light skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-light skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'kiss: woman, woman, medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d❤️\u200d💋\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium skin tone, light skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium skin tone, dark skin tone',
          char: '👩🏽\u200d❤️\u200d💋\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'kiss: woman, woman, medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-dark skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d❤️\u200d💋\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, dark skin tone, light skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, dark skin tone, medium skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'kiss: woman, woman, dark skin tone',
          char: '👩🏿\u200d❤️\u200d💋\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man',
          char: '👩\u200d❤️\u200d👨',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man, light skin tone',
          char: '👩🏻\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, light skin tone, medium-light skin tone',
          char: '👩🏻\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, light skin tone, medium skin tone',
          char: '👩🏻\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, light skin tone, dark skin tone',
          char: '👩🏻\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-light skin tone, light skin tone',
          char: '👩🏼\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man, medium-light skin tone',
          char: '👩🏼\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium skin tone, light skin tone',
          char: '👩🏽\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man, medium skin tone',
          char: '👩🏽\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium skin tone, dark skin tone',
          char: '👩🏽\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man, medium-dark skin tone',
          char: '👩🏾\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, dark skin tone, light skin tone',
          char: '👩🏿\u200d❤️\u200d👨🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d❤️\u200d👨🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, dark skin tone, medium skin tone',
          char: '👩🏿\u200d❤️\u200d👨🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, man, dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d❤️\u200d👨🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, man, dark skin tone',
          char: '👩🏿\u200d❤️\u200d👨🏿',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman',
          char: '👩\u200d❤️\u200d👩',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman, light skin tone',
          char: '👩🏻\u200d❤️\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, light skin tone, medium-light skin tone',
          char: '👩🏻\u200d❤️\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, light skin tone, medium skin tone',
          char: '👩🏻\u200d❤️\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, light skin tone, medium-dark skin tone',
          char: '👩🏻\u200d❤️\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, light skin tone, dark skin tone',
          char: '👩🏻\u200d❤️\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-light skin tone, light skin tone',
          char: '👩🏼\u200d❤️\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman, medium-light skin tone',
          char: '👩🏼\u200d❤️\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-light skin tone, medium skin tone',
          char: '👩🏼\u200d❤️\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-light skin tone, medium-dark skin tone',
          char: '👩🏼\u200d❤️\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-light skin tone, dark skin tone',
          char: '👩🏼\u200d❤️\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium skin tone, light skin tone',
          char: '👩🏽\u200d❤️\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium skin tone, medium-light skin tone',
          char: '👩🏽\u200d❤️\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman, medium skin tone',
          char: '👩🏽\u200d❤️\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium skin tone, medium-dark skin tone',
          char: '👩🏽\u200d❤️\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium skin tone, dark skin tone',
          char: '👩🏽\u200d❤️\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-dark skin tone, light skin tone',
          char: '👩🏾\u200d❤️\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-dark skin tone, medium-light skin tone',
          char: '👩🏾\u200d❤️\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-dark skin tone, medium skin tone',
          char: '👩🏾\u200d❤️\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman, medium-dark skin tone',
          char: '👩🏾\u200d❤️\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, medium-dark skin tone, dark skin tone',
          char: '👩🏾\u200d❤️\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, dark skin tone, light skin tone',
          char: '👩🏿\u200d❤️\u200d👩🏻',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, dark skin tone, medium-light skin tone',
          char: '👩🏿\u200d❤️\u200d👩🏼',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, dark skin tone, medium skin tone',
          char: '👩🏿\u200d❤️\u200d👩🏽',
          group: 'People & Body',
        },
        {
          name:
            'couple with heart: woman, woman, dark skin tone, medium-dark skin tone',
          char: '👩🏿\u200d❤️\u200d👩🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: woman, woman, dark skin tone',
          char: '👩🏿\u200d❤️\u200d👩🏿',
          group: 'People & Body',
        },
        {
          name: 'family: woman, woman, boy',
          char: '👩\u200d👩\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, woman, girl',
          char: '👩\u200d👩\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: woman, woman, girl, boy',
          char: '👩\u200d👩\u200d👧\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, woman, boy, boy',
          char: '👩\u200d👩\u200d👦\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, woman, girl, girl',
          char: '👩\u200d👩\u200d👧\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: woman, boy',
          char: '👩\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, boy, boy',
          char: '👩\u200d👦\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, girl',
          char: '👩\u200d👧',
          group: 'People & Body',
        },
        {
          name: 'family: woman, girl, boy',
          char: '👩\u200d👧\u200d👦',
          group: 'People & Body',
        },
        {
          name: 'family: woman, girl, girl',
          char: '👩\u200d👧\u200d👧',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'older person',
      char: '🧓',
      variants: [
        {
          name: 'older person: light skin tone',
          char: '🧓🏻',
          group: 'People & Body',
        },
        {
          name: 'older person: medium-light skin tone',
          char: '🧓🏼',
          group: 'People & Body',
        },
        {
          name: 'older person: medium skin tone',
          char: '🧓🏽',
          group: 'People & Body',
        },
        {
          name: 'older person: medium-dark skin tone',
          char: '🧓🏾',
          group: 'People & Body',
        },
        {
          name: 'older person: dark skin tone',
          char: '🧓🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'old man',
      char: '👴',
      variants: [
        {
          name: 'old man: light skin tone',
          char: '👴🏻',
          group: 'People & Body',
        },
        {
          name: 'old man: medium-light skin tone',
          char: '👴🏼',
          group: 'People & Body',
        },
        {
          name: 'old man: medium skin tone',
          char: '👴🏽',
          group: 'People & Body',
        },
        {
          name: 'old man: medium-dark skin tone',
          char: '👴🏾',
          group: 'People & Body',
        },
        { name: 'old man: dark skin tone', char: '👴🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'old woman',
      char: '👵',
      variants: [
        {
          name: 'old woman: light skin tone',
          char: '👵🏻',
          group: 'People & Body',
        },
        {
          name: 'old woman: medium-light skin tone',
          char: '👵🏼',
          group: 'People & Body',
        },
        {
          name: 'old woman: medium skin tone',
          char: '👵🏽',
          group: 'People & Body',
        },
        {
          name: 'old woman: medium-dark skin tone',
          char: '👵🏾',
          group: 'People & Body',
        },
        {
          name: 'old woman: dark skin tone',
          char: '👵🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person frowning',
      char: '🙍',
      variants: [
        {
          name: 'person frowning: light skin tone',
          char: '🙍🏻',
          group: 'People & Body',
        },
        {
          name: 'person frowning: medium-light skin tone',
          char: '🙍🏼',
          group: 'People & Body',
        },
        {
          name: 'person frowning: medium skin tone',
          char: '🙍🏽',
          group: 'People & Body',
        },
        {
          name: 'person frowning: medium-dark skin tone',
          char: '🙍🏾',
          group: 'People & Body',
        },
        {
          name: 'person frowning: dark skin tone',
          char: '🙍🏿',
          group: 'People & Body',
        },
        { name: 'man frowning', char: '🙍\u200d♂️', group: 'People & Body' },
        {
          name: 'man frowning: light skin tone',
          char: '🙍🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man frowning: medium-light skin tone',
          char: '🙍🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man frowning: medium skin tone',
          char: '🙍🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man frowning: medium-dark skin tone',
          char: '🙍🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man frowning: dark skin tone',
          char: '🙍🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman frowning', char: '🙍\u200d♀️', group: 'People & Body' },
        {
          name: 'woman frowning: light skin tone',
          char: '🙍🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman frowning: medium-light skin tone',
          char: '🙍🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman frowning: medium skin tone',
          char: '🙍🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman frowning: medium-dark skin tone',
          char: '🙍🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman frowning: dark skin tone',
          char: '🙍🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person pouting',
      char: '🙎',
      variants: [
        {
          name: 'person pouting: light skin tone',
          char: '🙎🏻',
          group: 'People & Body',
        },
        {
          name: 'person pouting: medium-light skin tone',
          char: '🙎🏼',
          group: 'People & Body',
        },
        {
          name: 'person pouting: medium skin tone',
          char: '🙎🏽',
          group: 'People & Body',
        },
        {
          name: 'person pouting: medium-dark skin tone',
          char: '🙎🏾',
          group: 'People & Body',
        },
        {
          name: 'person pouting: dark skin tone',
          char: '🙎🏿',
          group: 'People & Body',
        },
        { name: 'man pouting', char: '🙎\u200d♂️', group: 'People & Body' },
        {
          name: 'man pouting: light skin tone',
          char: '🙎🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man pouting: medium-light skin tone',
          char: '🙎🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man pouting: medium skin tone',
          char: '🙎🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man pouting: medium-dark skin tone',
          char: '🙎🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man pouting: dark skin tone',
          char: '🙎🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman pouting', char: '🙎\u200d♀️', group: 'People & Body' },
        {
          name: 'woman pouting: light skin tone',
          char: '🙎🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman pouting: medium-light skin tone',
          char: '🙎🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman pouting: medium skin tone',
          char: '🙎🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman pouting: medium-dark skin tone',
          char: '🙎🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman pouting: dark skin tone',
          char: '🙎🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person gesturing NO',
      char: '🙅',
      variants: [
        {
          name: 'person gesturing NO: light skin tone',
          char: '🙅🏻',
          group: 'People & Body',
        },
        {
          name: 'person gesturing NO: medium-light skin tone',
          char: '🙅🏼',
          group: 'People & Body',
        },
        {
          name: 'person gesturing NO: medium skin tone',
          char: '🙅🏽',
          group: 'People & Body',
        },
        {
          name: 'person gesturing NO: medium-dark skin tone',
          char: '🙅🏾',
          group: 'People & Body',
        },
        {
          name: 'person gesturing NO: dark skin tone',
          char: '🙅🏿',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO',
          char: '🙅\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO: light skin tone',
          char: '🙅🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO: medium-light skin tone',
          char: '🙅🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO: medium skin tone',
          char: '🙅🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO: medium-dark skin tone',
          char: '🙅🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing NO: dark skin tone',
          char: '🙅🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO',
          char: '🙅\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO: light skin tone',
          char: '🙅🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO: medium-light skin tone',
          char: '🙅🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO: medium skin tone',
          char: '🙅🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO: medium-dark skin tone',
          char: '🙅🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing NO: dark skin tone',
          char: '🙅🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person gesturing OK',
      char: '🙆',
      variants: [
        {
          name: 'person gesturing OK: light skin tone',
          char: '🙆🏻',
          group: 'People & Body',
        },
        {
          name: 'person gesturing OK: medium-light skin tone',
          char: '🙆🏼',
          group: 'People & Body',
        },
        {
          name: 'person gesturing OK: medium skin tone',
          char: '🙆🏽',
          group: 'People & Body',
        },
        {
          name: 'person gesturing OK: medium-dark skin tone',
          char: '🙆🏾',
          group: 'People & Body',
        },
        {
          name: 'person gesturing OK: dark skin tone',
          char: '🙆🏿',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK',
          char: '🙆\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK: light skin tone',
          char: '🙆🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK: medium-light skin tone',
          char: '🙆🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK: medium skin tone',
          char: '🙆🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK: medium-dark skin tone',
          char: '🙆🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man gesturing OK: dark skin tone',
          char: '🙆🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK',
          char: '🙆\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK: light skin tone',
          char: '🙆🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK: medium-light skin tone',
          char: '🙆🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK: medium skin tone',
          char: '🙆🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK: medium-dark skin tone',
          char: '🙆🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman gesturing OK: dark skin tone',
          char: '🙆🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person tipping hand',
      char: '💁',
      variants: [
        {
          name: 'person tipping hand: light skin tone',
          char: '💁🏻',
          group: 'People & Body',
        },
        {
          name: 'person tipping hand: medium-light skin tone',
          char: '💁🏼',
          group: 'People & Body',
        },
        {
          name: 'person tipping hand: medium skin tone',
          char: '💁🏽',
          group: 'People & Body',
        },
        {
          name: 'person tipping hand: medium-dark skin tone',
          char: '💁🏾',
          group: 'People & Body',
        },
        {
          name: 'person tipping hand: dark skin tone',
          char: '💁🏿',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand',
          char: '💁\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand: light skin tone',
          char: '💁🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand: medium-light skin tone',
          char: '💁🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand: medium skin tone',
          char: '💁🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand: medium-dark skin tone',
          char: '💁🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man tipping hand: dark skin tone',
          char: '💁🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand',
          char: '💁\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand: light skin tone',
          char: '💁🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand: medium-light skin tone',
          char: '💁🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand: medium skin tone',
          char: '💁🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand: medium-dark skin tone',
          char: '💁🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman tipping hand: dark skin tone',
          char: '💁🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person raising hand',
      char: '🙋',
      variants: [
        {
          name: 'person raising hand: light skin tone',
          char: '🙋🏻',
          group: 'People & Body',
        },
        {
          name: 'person raising hand: medium-light skin tone',
          char: '🙋🏼',
          group: 'People & Body',
        },
        {
          name: 'person raising hand: medium skin tone',
          char: '🙋🏽',
          group: 'People & Body',
        },
        {
          name: 'person raising hand: medium-dark skin tone',
          char: '🙋🏾',
          group: 'People & Body',
        },
        {
          name: 'person raising hand: dark skin tone',
          char: '🙋🏿',
          group: 'People & Body',
        },
        {
          name: 'man raising hand',
          char: '🙋\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man raising hand: light skin tone',
          char: '🙋🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man raising hand: medium-light skin tone',
          char: '🙋🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man raising hand: medium skin tone',
          char: '🙋🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man raising hand: medium-dark skin tone',
          char: '🙋🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man raising hand: dark skin tone',
          char: '🙋🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand',
          char: '🙋\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand: light skin tone',
          char: '🙋🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand: medium-light skin tone',
          char: '🙋🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand: medium skin tone',
          char: '🙋🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand: medium-dark skin tone',
          char: '🙋🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman raising hand: dark skin tone',
          char: '🙋🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'deaf person',
      char: '🧏',
      variants: [
        {
          name: 'deaf person: light skin tone',
          char: '🧏🏻',
          group: 'People & Body',
        },
        {
          name: 'deaf person: medium-light skin tone',
          char: '🧏🏼',
          group: 'People & Body',
        },
        {
          name: 'deaf person: medium skin tone',
          char: '🧏🏽',
          group: 'People & Body',
        },
        {
          name: 'deaf person: medium-dark skin tone',
          char: '🧏🏾',
          group: 'People & Body',
        },
        {
          name: 'deaf person: dark skin tone',
          char: '🧏🏿',
          group: 'People & Body',
        },
        { name: 'deaf man', char: '🧏\u200d♂️', group: 'People & Body' },
        {
          name: 'deaf man: light skin tone',
          char: '🧏🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'deaf man: medium-light skin tone',
          char: '🧏🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'deaf man: medium skin tone',
          char: '🧏🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'deaf man: medium-dark skin tone',
          char: '🧏🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'deaf man: dark skin tone',
          char: '🧏🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'deaf woman', char: '🧏\u200d♀️', group: 'People & Body' },
        {
          name: 'deaf woman: light skin tone',
          char: '🧏🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'deaf woman: medium-light skin tone',
          char: '🧏🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'deaf woman: medium skin tone',
          char: '🧏🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'deaf woman: medium-dark skin tone',
          char: '🧏🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'deaf woman: dark skin tone',
          char: '🧏🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person bowing',
      char: '🙇',
      variants: [
        {
          name: 'person bowing: light skin tone',
          char: '🙇🏻',
          group: 'People & Body',
        },
        {
          name: 'person bowing: medium-light skin tone',
          char: '🙇🏼',
          group: 'People & Body',
        },
        {
          name: 'person bowing: medium skin tone',
          char: '🙇🏽',
          group: 'People & Body',
        },
        {
          name: 'person bowing: medium-dark skin tone',
          char: '🙇🏾',
          group: 'People & Body',
        },
        {
          name: 'person bowing: dark skin tone',
          char: '🙇🏿',
          group: 'People & Body',
        },
        { name: 'man bowing', char: '🙇\u200d♂️', group: 'People & Body' },
        {
          name: 'man bowing: light skin tone',
          char: '🙇🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bowing: medium-light skin tone',
          char: '🙇🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bowing: medium skin tone',
          char: '🙇🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bowing: medium-dark skin tone',
          char: '🙇🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bowing: dark skin tone',
          char: '🙇🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman bowing', char: '🙇\u200d♀️', group: 'People & Body' },
        {
          name: 'woman bowing: light skin tone',
          char: '🙇🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bowing: medium-light skin tone',
          char: '🙇🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bowing: medium skin tone',
          char: '🙇🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bowing: medium-dark skin tone',
          char: '🙇🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bowing: dark skin tone',
          char: '🙇🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person facepalming',
      char: '🤦',
      variants: [
        {
          name: 'person facepalming: light skin tone',
          char: '🤦🏻',
          group: 'People & Body',
        },
        {
          name: 'person facepalming: medium-light skin tone',
          char: '🤦🏼',
          group: 'People & Body',
        },
        {
          name: 'person facepalming: medium skin tone',
          char: '🤦🏽',
          group: 'People & Body',
        },
        {
          name: 'person facepalming: medium-dark skin tone',
          char: '🤦🏾',
          group: 'People & Body',
        },
        {
          name: 'person facepalming: dark skin tone',
          char: '🤦🏿',
          group: 'People & Body',
        },
        { name: 'man facepalming', char: '🤦\u200d♂️', group: 'People & Body' },
        {
          name: 'man facepalming: light skin tone',
          char: '🤦🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man facepalming: medium-light skin tone',
          char: '🤦🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man facepalming: medium skin tone',
          char: '🤦🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man facepalming: medium-dark skin tone',
          char: '🤦🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man facepalming: dark skin tone',
          char: '🤦🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming',
          char: '🤦\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming: light skin tone',
          char: '🤦🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming: medium-light skin tone',
          char: '🤦🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming: medium skin tone',
          char: '🤦🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming: medium-dark skin tone',
          char: '🤦🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman facepalming: dark skin tone',
          char: '🤦🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person shrugging',
      char: '🤷',
      variants: [
        {
          name: 'person shrugging: light skin tone',
          char: '🤷🏻',
          group: 'People & Body',
        },
        {
          name: 'person shrugging: medium-light skin tone',
          char: '🤷🏼',
          group: 'People & Body',
        },
        {
          name: 'person shrugging: medium skin tone',
          char: '🤷🏽',
          group: 'People & Body',
        },
        {
          name: 'person shrugging: medium-dark skin tone',
          char: '🤷🏾',
          group: 'People & Body',
        },
        {
          name: 'person shrugging: dark skin tone',
          char: '🤷🏿',
          group: 'People & Body',
        },
        { name: 'man shrugging', char: '🤷\u200d♂️', group: 'People & Body' },
        {
          name: 'man shrugging: light skin tone',
          char: '🤷🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man shrugging: medium-light skin tone',
          char: '🤷🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man shrugging: medium skin tone',
          char: '🤷🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man shrugging: medium-dark skin tone',
          char: '🤷🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man shrugging: dark skin tone',
          char: '🤷🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman shrugging', char: '🤷\u200d♀️', group: 'People & Body' },
        {
          name: 'woman shrugging: light skin tone',
          char: '🤷🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman shrugging: medium-light skin tone',
          char: '🤷🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman shrugging: medium skin tone',
          char: '🤷🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman shrugging: medium-dark skin tone',
          char: '🤷🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman shrugging: dark skin tone',
          char: '🤷🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'police officer',
      char: '👮',
      variants: [
        {
          name: 'police officer: light skin tone',
          char: '👮🏻',
          group: 'People & Body',
        },
        {
          name: 'police officer: medium-light skin tone',
          char: '👮🏼',
          group: 'People & Body',
        },
        {
          name: 'police officer: medium skin tone',
          char: '👮🏽',
          group: 'People & Body',
        },
        {
          name: 'police officer: medium-dark skin tone',
          char: '👮🏾',
          group: 'People & Body',
        },
        {
          name: 'police officer: dark skin tone',
          char: '👮🏿',
          group: 'People & Body',
        },
        {
          name: 'man police officer',
          char: '👮\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man police officer: light skin tone',
          char: '👮🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man police officer: medium-light skin tone',
          char: '👮🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man police officer: medium skin tone',
          char: '👮🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man police officer: medium-dark skin tone',
          char: '👮🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man police officer: dark skin tone',
          char: '👮🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer',
          char: '👮\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer: light skin tone',
          char: '👮🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer: medium-light skin tone',
          char: '👮🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer: medium skin tone',
          char: '👮🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer: medium-dark skin tone',
          char: '👮🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman police officer: dark skin tone',
          char: '👮🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'detective',
      char: '🕵️',
      variants: [
        { name: 'detective', char: '🕵️', group: 'People & Body' },
        {
          name: 'detective: light skin tone',
          char: '🕵🏻',
          group: 'People & Body',
        },
        {
          name: 'detective: medium-light skin tone',
          char: '🕵🏼',
          group: 'People & Body',
        },
        {
          name: 'detective: medium skin tone',
          char: '🕵🏽',
          group: 'People & Body',
        },
        {
          name: 'detective: medium-dark skin tone',
          char: '🕵🏾',
          group: 'People & Body',
        },
        {
          name: 'detective: dark skin tone',
          char: '🕵🏿',
          group: 'People & Body',
        },
        { name: 'man detective', char: '🕵️\u200d♂️', group: 'People & Body' },
        {
          name: 'man detective: light skin tone',
          char: '🕵🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man detective: medium-light skin tone',
          char: '🕵🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man detective: medium skin tone',
          char: '🕵🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man detective: medium-dark skin tone',
          char: '🕵🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man detective: dark skin tone',
          char: '🕵🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman detective', char: '🕵️\u200d♀️', group: 'People & Body' },
        {
          name: 'woman detective: light skin tone',
          char: '🕵🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman detective: medium-light skin tone',
          char: '🕵🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman detective: medium skin tone',
          char: '🕵🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman detective: medium-dark skin tone',
          char: '🕵🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman detective: dark skin tone',
          char: '🕵🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'guard',
      char: '💂',
      variants: [
        { name: 'guard: light skin tone', char: '💂🏻', group: 'People & Body' },
        {
          name: 'guard: medium-light skin tone',
          char: '💂🏼',
          group: 'People & Body',
        },
        { name: 'guard: medium skin tone', char: '💂🏽', group: 'People & Body' },
        {
          name: 'guard: medium-dark skin tone',
          char: '💂🏾',
          group: 'People & Body',
        },
        { name: 'guard: dark skin tone', char: '💂🏿', group: 'People & Body' },
        { name: 'man guard', char: '💂\u200d♂️', group: 'People & Body' },
        {
          name: 'man guard: light skin tone',
          char: '💂🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man guard: medium-light skin tone',
          char: '💂🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man guard: medium skin tone',
          char: '💂🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man guard: medium-dark skin tone',
          char: '💂🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man guard: dark skin tone',
          char: '💂🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman guard', char: '💂\u200d♀️', group: 'People & Body' },
        {
          name: 'woman guard: light skin tone',
          char: '💂🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman guard: medium-light skin tone',
          char: '💂🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman guard: medium skin tone',
          char: '💂🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman guard: medium-dark skin tone',
          char: '💂🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman guard: dark skin tone',
          char: '💂🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'ninja',
      char: '🥷',
      variants: [
        { name: 'ninja: light skin tone', char: '🥷🏻', group: 'People & Body' },
        {
          name: 'ninja: medium-light skin tone',
          char: '🥷🏼',
          group: 'People & Body',
        },
        {
          name: 'ninja: medium skin tone',
          char: '🥷🏽',
          group: 'People & Body',
        },
        {
          name: 'ninja: medium-dark skin tone',
          char: '🥷🏾',
          group: 'People & Body',
        },
        { name: 'ninja: dark skin tone', char: '🥷🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'construction worker',
      char: '👷',
      variants: [
        {
          name: 'construction worker: light skin tone',
          char: '👷🏻',
          group: 'People & Body',
        },
        {
          name: 'construction worker: medium-light skin tone',
          char: '👷🏼',
          group: 'People & Body',
        },
        {
          name: 'construction worker: medium skin tone',
          char: '👷🏽',
          group: 'People & Body',
        },
        {
          name: 'construction worker: medium-dark skin tone',
          char: '👷🏾',
          group: 'People & Body',
        },
        {
          name: 'construction worker: dark skin tone',
          char: '👷🏿',
          group: 'People & Body',
        },
        {
          name: 'man construction worker',
          char: '👷\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man construction worker: light skin tone',
          char: '👷🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man construction worker: medium-light skin tone',
          char: '👷🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man construction worker: medium skin tone',
          char: '👷🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man construction worker: medium-dark skin tone',
          char: '👷🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man construction worker: dark skin tone',
          char: '👷🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker',
          char: '👷\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker: light skin tone',
          char: '👷🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker: medium-light skin tone',
          char: '👷🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker: medium skin tone',
          char: '👷🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker: medium-dark skin tone',
          char: '👷🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman construction worker: dark skin tone',
          char: '👷🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'prince',
      char: '🤴',
      variants: [
        { name: 'prince: light skin tone', char: '🤴🏻', group: 'People & Body' },
        {
          name: 'prince: medium-light skin tone',
          char: '🤴🏼',
          group: 'People & Body',
        },
        {
          name: 'prince: medium skin tone',
          char: '🤴🏽',
          group: 'People & Body',
        },
        {
          name: 'prince: medium-dark skin tone',
          char: '🤴🏾',
          group: 'People & Body',
        },
        { name: 'prince: dark skin tone', char: '🤴🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'princess',
      char: '👸',
      variants: [
        {
          name: 'princess: light skin tone',
          char: '👸🏻',
          group: 'People & Body',
        },
        {
          name: 'princess: medium-light skin tone',
          char: '👸🏼',
          group: 'People & Body',
        },
        {
          name: 'princess: medium skin tone',
          char: '👸🏽',
          group: 'People & Body',
        },
        {
          name: 'princess: medium-dark skin tone',
          char: '👸🏾',
          group: 'People & Body',
        },
        {
          name: 'princess: dark skin tone',
          char: '👸🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person wearing turban',
      char: '👳',
      variants: [
        {
          name: 'person wearing turban: light skin tone',
          char: '👳🏻',
          group: 'People & Body',
        },
        {
          name: 'person wearing turban: medium-light skin tone',
          char: '👳🏼',
          group: 'People & Body',
        },
        {
          name: 'person wearing turban: medium skin tone',
          char: '👳🏽',
          group: 'People & Body',
        },
        {
          name: 'person wearing turban: medium-dark skin tone',
          char: '👳🏾',
          group: 'People & Body',
        },
        {
          name: 'person wearing turban: dark skin tone',
          char: '👳🏿',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban',
          char: '👳\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban: light skin tone',
          char: '👳🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban: medium-light skin tone',
          char: '👳🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban: medium skin tone',
          char: '👳🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban: medium-dark skin tone',
          char: '👳🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man wearing turban: dark skin tone',
          char: '👳🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban',
          char: '👳\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban: light skin tone',
          char: '👳🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban: medium-light skin tone',
          char: '👳🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban: medium skin tone',
          char: '👳🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban: medium-dark skin tone',
          char: '👳🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman wearing turban: dark skin tone',
          char: '👳🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person with skullcap',
      char: '👲',
      variants: [
        {
          name: 'person with skullcap: light skin tone',
          char: '👲🏻',
          group: 'People & Body',
        },
        {
          name: 'person with skullcap: medium-light skin tone',
          char: '👲🏼',
          group: 'People & Body',
        },
        {
          name: 'person with skullcap: medium skin tone',
          char: '👲🏽',
          group: 'People & Body',
        },
        {
          name: 'person with skullcap: medium-dark skin tone',
          char: '👲🏾',
          group: 'People & Body',
        },
        {
          name: 'person with skullcap: dark skin tone',
          char: '👲🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'woman with headscarf',
      char: '🧕',
      variants: [
        {
          name: 'woman with headscarf: light skin tone',
          char: '🧕🏻',
          group: 'People & Body',
        },
        {
          name: 'woman with headscarf: medium-light skin tone',
          char: '🧕🏼',
          group: 'People & Body',
        },
        {
          name: 'woman with headscarf: medium skin tone',
          char: '🧕🏽',
          group: 'People & Body',
        },
        {
          name: 'woman with headscarf: medium-dark skin tone',
          char: '🧕🏾',
          group: 'People & Body',
        },
        {
          name: 'woman with headscarf: dark skin tone',
          char: '🧕🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person in tuxedo',
      char: '🤵',
      variants: [
        {
          name: 'person in tuxedo: light skin tone',
          char: '🤵🏻',
          group: 'People & Body',
        },
        {
          name: 'person in tuxedo: medium-light skin tone',
          char: '🤵🏼',
          group: 'People & Body',
        },
        {
          name: 'person in tuxedo: medium skin tone',
          char: '🤵🏽',
          group: 'People & Body',
        },
        {
          name: 'person in tuxedo: medium-dark skin tone',
          char: '🤵🏾',
          group: 'People & Body',
        },
        {
          name: 'person in tuxedo: dark skin tone',
          char: '🤵🏿',
          group: 'People & Body',
        },
        { name: 'man in tuxedo', char: '🤵\u200d♂️', group: 'People & Body' },
        {
          name: 'man in tuxedo: light skin tone',
          char: '🤵🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in tuxedo: medium-light skin tone',
          char: '🤵🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in tuxedo: medium skin tone',
          char: '🤵🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in tuxedo: medium-dark skin tone',
          char: '🤵🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in tuxedo: dark skin tone',
          char: '🤵🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman in tuxedo', char: '🤵\u200d♀️', group: 'People & Body' },
        {
          name: 'woman in tuxedo: light skin tone',
          char: '🤵🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in tuxedo: medium-light skin tone',
          char: '🤵🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in tuxedo: medium skin tone',
          char: '🤵🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in tuxedo: medium-dark skin tone',
          char: '🤵🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in tuxedo: dark skin tone',
          char: '🤵🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person with veil',
      char: '👰',
      variants: [
        {
          name: 'person with veil: light skin tone',
          char: '👰🏻',
          group: 'People & Body',
        },
        {
          name: 'person with veil: medium-light skin tone',
          char: '👰🏼',
          group: 'People & Body',
        },
        {
          name: 'person with veil: medium skin tone',
          char: '👰🏽',
          group: 'People & Body',
        },
        {
          name: 'person with veil: medium-dark skin tone',
          char: '👰🏾',
          group: 'People & Body',
        },
        {
          name: 'person with veil: dark skin tone',
          char: '👰🏿',
          group: 'People & Body',
        },
        { name: 'man with veil', char: '👰\u200d♂️', group: 'People & Body' },
        {
          name: 'man with veil: light skin tone',
          char: '👰🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man with veil: medium-light skin tone',
          char: '👰🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man with veil: medium skin tone',
          char: '👰🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man with veil: medium-dark skin tone',
          char: '👰🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man with veil: dark skin tone',
          char: '👰🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman with veil', char: '👰\u200d♀️', group: 'People & Body' },
        {
          name: 'woman with veil: light skin tone',
          char: '👰🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman with veil: medium-light skin tone',
          char: '👰🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman with veil: medium skin tone',
          char: '👰🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman with veil: medium-dark skin tone',
          char: '👰🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman with veil: dark skin tone',
          char: '👰🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'pregnant woman',
      char: '🤰',
      variants: [
        {
          name: 'pregnant woman: light skin tone',
          char: '🤰🏻',
          group: 'People & Body',
        },
        {
          name: 'pregnant woman: medium-light skin tone',
          char: '🤰🏼',
          group: 'People & Body',
        },
        {
          name: 'pregnant woman: medium skin tone',
          char: '🤰🏽',
          group: 'People & Body',
        },
        {
          name: 'pregnant woman: medium-dark skin tone',
          char: '🤰🏾',
          group: 'People & Body',
        },
        {
          name: 'pregnant woman: dark skin tone',
          char: '🤰🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'breast-feeding',
      char: '🤱',
      variants: [
        {
          name: 'breast-feeding: light skin tone',
          char: '🤱🏻',
          group: 'People & Body',
        },
        {
          name: 'breast-feeding: medium-light skin tone',
          char: '🤱🏼',
          group: 'People & Body',
        },
        {
          name: 'breast-feeding: medium skin tone',
          char: '🤱🏽',
          group: 'People & Body',
        },
        {
          name: 'breast-feeding: medium-dark skin tone',
          char: '🤱🏾',
          group: 'People & Body',
        },
        {
          name: 'breast-feeding: dark skin tone',
          char: '🤱🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'baby angel',
      char: '👼',
      variants: [
        {
          name: 'baby angel: light skin tone',
          char: '👼🏻',
          group: 'People & Body',
        },
        {
          name: 'baby angel: medium-light skin tone',
          char: '👼🏼',
          group: 'People & Body',
        },
        {
          name: 'baby angel: medium skin tone',
          char: '👼🏽',
          group: 'People & Body',
        },
        {
          name: 'baby angel: medium-dark skin tone',
          char: '👼🏾',
          group: 'People & Body',
        },
        {
          name: 'baby angel: dark skin tone',
          char: '👼🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'Santa Claus',
      char: '🎅',
      variants: [
        {
          name: 'Santa Claus: light skin tone',
          char: '🎅🏻',
          group: 'People & Body',
        },
        {
          name: 'Santa Claus: medium-light skin tone',
          char: '🎅🏼',
          group: 'People & Body',
        },
        {
          name: 'Santa Claus: medium skin tone',
          char: '🎅🏽',
          group: 'People & Body',
        },
        {
          name: 'Santa Claus: medium-dark skin tone',
          char: '🎅🏾',
          group: 'People & Body',
        },
        {
          name: 'Santa Claus: dark skin tone',
          char: '🎅🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'Mrs. Claus',
      char: '🤶',
      variants: [
        {
          name: 'Mrs. Claus: light skin tone',
          char: '🤶🏻',
          group: 'People & Body',
        },
        {
          name: 'Mrs. Claus: medium-light skin tone',
          char: '🤶🏼',
          group: 'People & Body',
        },
        {
          name: 'Mrs. Claus: medium skin tone',
          char: '🤶🏽',
          group: 'People & Body',
        },
        {
          name: 'Mrs. Claus: medium-dark skin tone',
          char: '🤶🏾',
          group: 'People & Body',
        },
        {
          name: 'Mrs. Claus: dark skin tone',
          char: '🤶🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'superhero',
      char: '🦸',
      variants: [
        {
          name: 'superhero: light skin tone',
          char: '🦸🏻',
          group: 'People & Body',
        },
        {
          name: 'superhero: medium-light skin tone',
          char: '🦸🏼',
          group: 'People & Body',
        },
        {
          name: 'superhero: medium skin tone',
          char: '🦸🏽',
          group: 'People & Body',
        },
        {
          name: 'superhero: medium-dark skin tone',
          char: '🦸🏾',
          group: 'People & Body',
        },
        {
          name: 'superhero: dark skin tone',
          char: '🦸🏿',
          group: 'People & Body',
        },
        { name: 'man superhero', char: '🦸\u200d♂️', group: 'People & Body' },
        {
          name: 'man superhero: light skin tone',
          char: '🦸🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man superhero: medium-light skin tone',
          char: '🦸🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man superhero: medium skin tone',
          char: '🦸🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man superhero: medium-dark skin tone',
          char: '🦸🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man superhero: dark skin tone',
          char: '🦸🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman superhero', char: '🦸\u200d♀️', group: 'People & Body' },
        {
          name: 'woman superhero: light skin tone',
          char: '🦸🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman superhero: medium-light skin tone',
          char: '🦸🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman superhero: medium skin tone',
          char: '🦸🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman superhero: medium-dark skin tone',
          char: '🦸🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman superhero: dark skin tone',
          char: '🦸🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'supervillain',
      char: '🦹',
      variants: [
        {
          name: 'supervillain: light skin tone',
          char: '🦹🏻',
          group: 'People & Body',
        },
        {
          name: 'supervillain: medium-light skin tone',
          char: '🦹🏼',
          group: 'People & Body',
        },
        {
          name: 'supervillain: medium skin tone',
          char: '🦹🏽',
          group: 'People & Body',
        },
        {
          name: 'supervillain: medium-dark skin tone',
          char: '🦹🏾',
          group: 'People & Body',
        },
        {
          name: 'supervillain: dark skin tone',
          char: '🦹🏿',
          group: 'People & Body',
        },
        {
          name: 'man supervillain',
          char: '🦹\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man supervillain: light skin tone',
          char: '🦹🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man supervillain: medium-light skin tone',
          char: '🦹🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man supervillain: medium skin tone',
          char: '🦹🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man supervillain: medium-dark skin tone',
          char: '🦹🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man supervillain: dark skin tone',
          char: '🦹🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain',
          char: '🦹\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain: light skin tone',
          char: '🦹🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain: medium-light skin tone',
          char: '🦹🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain: medium skin tone',
          char: '🦹🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain: medium-dark skin tone',
          char: '🦹🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman supervillain: dark skin tone',
          char: '🦹🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'mage',
      char: '🧙',
      variants: [
        { name: 'mage: light skin tone', char: '🧙🏻', group: 'People & Body' },
        {
          name: 'mage: medium-light skin tone',
          char: '🧙🏼',
          group: 'People & Body',
        },
        { name: 'mage: medium skin tone', char: '🧙🏽', group: 'People & Body' },
        {
          name: 'mage: medium-dark skin tone',
          char: '🧙🏾',
          group: 'People & Body',
        },
        { name: 'mage: dark skin tone', char: '🧙🏿', group: 'People & Body' },
        { name: 'man mage', char: '🧙\u200d♂️', group: 'People & Body' },
        {
          name: 'man mage: light skin tone',
          char: '🧙🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mage: medium-light skin tone',
          char: '🧙🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mage: medium skin tone',
          char: '🧙🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mage: medium-dark skin tone',
          char: '🧙🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mage: dark skin tone',
          char: '🧙🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman mage', char: '🧙\u200d♀️', group: 'People & Body' },
        {
          name: 'woman mage: light skin tone',
          char: '🧙🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mage: medium-light skin tone',
          char: '🧙🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mage: medium skin tone',
          char: '🧙🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mage: medium-dark skin tone',
          char: '🧙🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mage: dark skin tone',
          char: '🧙🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'fairy',
      char: '🧚',
      variants: [
        { name: 'fairy: light skin tone', char: '🧚🏻', group: 'People & Body' },
        {
          name: 'fairy: medium-light skin tone',
          char: '🧚🏼',
          group: 'People & Body',
        },
        { name: 'fairy: medium skin tone', char: '🧚🏽', group: 'People & Body' },
        {
          name: 'fairy: medium-dark skin tone',
          char: '🧚🏾',
          group: 'People & Body',
        },
        { name: 'fairy: dark skin tone', char: '🧚🏿', group: 'People & Body' },
        { name: 'man fairy', char: '🧚\u200d♂️', group: 'People & Body' },
        {
          name: 'man fairy: light skin tone',
          char: '🧚🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man fairy: medium-light skin tone',
          char: '🧚🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man fairy: medium skin tone',
          char: '🧚🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man fairy: medium-dark skin tone',
          char: '🧚🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man fairy: dark skin tone',
          char: '🧚🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman fairy', char: '🧚\u200d♀️', group: 'People & Body' },
        {
          name: 'woman fairy: light skin tone',
          char: '🧚🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman fairy: medium-light skin tone',
          char: '🧚🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman fairy: medium skin tone',
          char: '🧚🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman fairy: medium-dark skin tone',
          char: '🧚🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman fairy: dark skin tone',
          char: '🧚🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'vampire',
      char: '🧛',
      variants: [
        {
          name: 'vampire: light skin tone',
          char: '🧛🏻',
          group: 'People & Body',
        },
        {
          name: 'vampire: medium-light skin tone',
          char: '🧛🏼',
          group: 'People & Body',
        },
        {
          name: 'vampire: medium skin tone',
          char: '🧛🏽',
          group: 'People & Body',
        },
        {
          name: 'vampire: medium-dark skin tone',
          char: '🧛🏾',
          group: 'People & Body',
        },
        { name: 'vampire: dark skin tone', char: '🧛🏿', group: 'People & Body' },
        { name: 'man vampire', char: '🧛\u200d♂️', group: 'People & Body' },
        {
          name: 'man vampire: light skin tone',
          char: '🧛🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man vampire: medium-light skin tone',
          char: '🧛🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man vampire: medium skin tone',
          char: '🧛🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man vampire: medium-dark skin tone',
          char: '🧛🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man vampire: dark skin tone',
          char: '🧛🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman vampire', char: '🧛\u200d♀️', group: 'People & Body' },
        {
          name: 'woman vampire: light skin tone',
          char: '🧛🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman vampire: medium-light skin tone',
          char: '🧛🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman vampire: medium skin tone',
          char: '🧛🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman vampire: medium-dark skin tone',
          char: '🧛🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman vampire: dark skin tone',
          char: '🧛🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'merperson',
      char: '🧜',
      variants: [
        {
          name: 'merperson: light skin tone',
          char: '🧜🏻',
          group: 'People & Body',
        },
        {
          name: 'merperson: medium-light skin tone',
          char: '🧜🏼',
          group: 'People & Body',
        },
        {
          name: 'merperson: medium skin tone',
          char: '🧜🏽',
          group: 'People & Body',
        },
        {
          name: 'merperson: medium-dark skin tone',
          char: '🧜🏾',
          group: 'People & Body',
        },
        {
          name: 'merperson: dark skin tone',
          char: '🧜🏿',
          group: 'People & Body',
        },
        { name: 'merman', char: '🧜\u200d♂️', group: 'People & Body' },
        {
          name: 'merman: light skin tone',
          char: '🧜🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'merman: medium-light skin tone',
          char: '🧜🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'merman: medium skin tone',
          char: '🧜🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'merman: medium-dark skin tone',
          char: '🧜🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'merman: dark skin tone',
          char: '🧜🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'mermaid', char: '🧜\u200d♀️', group: 'People & Body' },
        {
          name: 'mermaid: light skin tone',
          char: '🧜🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'mermaid: medium-light skin tone',
          char: '🧜🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'mermaid: medium skin tone',
          char: '🧜🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'mermaid: medium-dark skin tone',
          char: '🧜🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'mermaid: dark skin tone',
          char: '🧜🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'elf',
      char: '🧝',
      variants: [
        { name: 'elf: light skin tone', char: '🧝🏻', group: 'People & Body' },
        {
          name: 'elf: medium-light skin tone',
          char: '🧝🏼',
          group: 'People & Body',
        },
        { name: 'elf: medium skin tone', char: '🧝🏽', group: 'People & Body' },
        {
          name: 'elf: medium-dark skin tone',
          char: '🧝🏾',
          group: 'People & Body',
        },
        { name: 'elf: dark skin tone', char: '🧝🏿', group: 'People & Body' },
        { name: 'man elf', char: '🧝\u200d♂️', group: 'People & Body' },
        {
          name: 'man elf: light skin tone',
          char: '🧝🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man elf: medium-light skin tone',
          char: '🧝🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man elf: medium skin tone',
          char: '🧝🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man elf: medium-dark skin tone',
          char: '🧝🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man elf: dark skin tone',
          char: '🧝🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman elf', char: '🧝\u200d♀️', group: 'People & Body' },
        {
          name: 'woman elf: light skin tone',
          char: '🧝🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman elf: medium-light skin tone',
          char: '🧝🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman elf: medium skin tone',
          char: '🧝🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman elf: medium-dark skin tone',
          char: '🧝🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman elf: dark skin tone',
          char: '🧝🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'genie',
      char: '🧞',
      variants: [
        { name: 'man genie', char: '🧞\u200d♂️', group: 'People & Body' },
        { name: 'woman genie', char: '🧞\u200d♀️', group: 'People & Body' },
      ],
    },
    {
      name: 'zombie',
      char: '🧟',
      variants: [
        { name: 'man zombie', char: '🧟\u200d♂️', group: 'People & Body' },
        { name: 'woman zombie', char: '🧟\u200d♀️', group: 'People & Body' },
      ],
    },
    {
      name: 'person getting massage',
      char: '💆',
      variants: [
        {
          name: 'person getting massage: light skin tone',
          char: '💆🏻',
          group: 'People & Body',
        },
        {
          name: 'person getting massage: medium-light skin tone',
          char: '💆🏼',
          group: 'People & Body',
        },
        {
          name: 'person getting massage: medium skin tone',
          char: '💆🏽',
          group: 'People & Body',
        },
        {
          name: 'person getting massage: medium-dark skin tone',
          char: '💆🏾',
          group: 'People & Body',
        },
        {
          name: 'person getting massage: dark skin tone',
          char: '💆🏿',
          group: 'People & Body',
        },
        {
          name: 'man getting massage',
          char: '💆\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting massage: light skin tone',
          char: '💆🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting massage: medium-light skin tone',
          char: '💆🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting massage: medium skin tone',
          char: '💆🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting massage: medium-dark skin tone',
          char: '💆🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting massage: dark skin tone',
          char: '💆🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage',
          char: '💆\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage: light skin tone',
          char: '💆🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage: medium-light skin tone',
          char: '💆🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage: medium skin tone',
          char: '💆🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage: medium-dark skin tone',
          char: '💆🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting massage: dark skin tone',
          char: '💆🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person getting haircut',
      char: '💇',
      variants: [
        {
          name: 'person getting haircut: light skin tone',
          char: '💇🏻',
          group: 'People & Body',
        },
        {
          name: 'person getting haircut: medium-light skin tone',
          char: '💇🏼',
          group: 'People & Body',
        },
        {
          name: 'person getting haircut: medium skin tone',
          char: '💇🏽',
          group: 'People & Body',
        },
        {
          name: 'person getting haircut: medium-dark skin tone',
          char: '💇🏾',
          group: 'People & Body',
        },
        {
          name: 'person getting haircut: dark skin tone',
          char: '💇🏿',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut',
          char: '💇\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut: light skin tone',
          char: '💇🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut: medium-light skin tone',
          char: '💇🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut: medium skin tone',
          char: '💇🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut: medium-dark skin tone',
          char: '💇🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man getting haircut: dark skin tone',
          char: '💇🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut',
          char: '💇\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut: light skin tone',
          char: '💇🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut: medium-light skin tone',
          char: '💇🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut: medium skin tone',
          char: '💇🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut: medium-dark skin tone',
          char: '💇🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman getting haircut: dark skin tone',
          char: '💇🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person walking',
      char: '🚶',
      variants: [
        {
          name: 'person walking: light skin tone',
          char: '🚶🏻',
          group: 'People & Body',
        },
        {
          name: 'person walking: medium-light skin tone',
          char: '🚶🏼',
          group: 'People & Body',
        },
        {
          name: 'person walking: medium skin tone',
          char: '🚶🏽',
          group: 'People & Body',
        },
        {
          name: 'person walking: medium-dark skin tone',
          char: '🚶🏾',
          group: 'People & Body',
        },
        {
          name: 'person walking: dark skin tone',
          char: '🚶🏿',
          group: 'People & Body',
        },
        { name: 'man walking', char: '🚶\u200d♂️', group: 'People & Body' },
        {
          name: 'man walking: light skin tone',
          char: '🚶🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man walking: medium-light skin tone',
          char: '🚶🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man walking: medium skin tone',
          char: '🚶🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man walking: medium-dark skin tone',
          char: '🚶🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man walking: dark skin tone',
          char: '🚶🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman walking', char: '🚶\u200d♀️', group: 'People & Body' },
        {
          name: 'woman walking: light skin tone',
          char: '🚶🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman walking: medium-light skin tone',
          char: '🚶🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman walking: medium skin tone',
          char: '🚶🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman walking: medium-dark skin tone',
          char: '🚶🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman walking: dark skin tone',
          char: '🚶🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person standing',
      char: '🧍',
      variants: [
        {
          name: 'person standing: light skin tone',
          char: '🧍🏻',
          group: 'People & Body',
        },
        {
          name: 'person standing: medium-light skin tone',
          char: '🧍🏼',
          group: 'People & Body',
        },
        {
          name: 'person standing: medium skin tone',
          char: '🧍🏽',
          group: 'People & Body',
        },
        {
          name: 'person standing: medium-dark skin tone',
          char: '🧍🏾',
          group: 'People & Body',
        },
        {
          name: 'person standing: dark skin tone',
          char: '🧍🏿',
          group: 'People & Body',
        },
        { name: 'man standing', char: '🧍\u200d♂️', group: 'People & Body' },
        {
          name: 'man standing: light skin tone',
          char: '🧍🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man standing: medium-light skin tone',
          char: '🧍🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man standing: medium skin tone',
          char: '🧍🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man standing: medium-dark skin tone',
          char: '🧍🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man standing: dark skin tone',
          char: '🧍🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman standing', char: '🧍\u200d♀️', group: 'People & Body' },
        {
          name: 'woman standing: light skin tone',
          char: '🧍🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman standing: medium-light skin tone',
          char: '🧍🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman standing: medium skin tone',
          char: '🧍🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman standing: medium-dark skin tone',
          char: '🧍🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman standing: dark skin tone',
          char: '🧍🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person kneeling',
      char: '🧎',
      variants: [
        {
          name: 'person kneeling: light skin tone',
          char: '🧎🏻',
          group: 'People & Body',
        },
        {
          name: 'person kneeling: medium-light skin tone',
          char: '🧎🏼',
          group: 'People & Body',
        },
        {
          name: 'person kneeling: medium skin tone',
          char: '🧎🏽',
          group: 'People & Body',
        },
        {
          name: 'person kneeling: medium-dark skin tone',
          char: '🧎🏾',
          group: 'People & Body',
        },
        {
          name: 'person kneeling: dark skin tone',
          char: '🧎🏿',
          group: 'People & Body',
        },
        { name: 'man kneeling', char: '🧎\u200d♂️', group: 'People & Body' },
        {
          name: 'man kneeling: light skin tone',
          char: '🧎🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man kneeling: medium-light skin tone',
          char: '🧎🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man kneeling: medium skin tone',
          char: '🧎🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man kneeling: medium-dark skin tone',
          char: '🧎🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man kneeling: dark skin tone',
          char: '🧎🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman kneeling', char: '🧎\u200d♀️', group: 'People & Body' },
        {
          name: 'woman kneeling: light skin tone',
          char: '🧎🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman kneeling: medium-light skin tone',
          char: '🧎🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman kneeling: medium skin tone',
          char: '🧎🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman kneeling: medium-dark skin tone',
          char: '🧎🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman kneeling: dark skin tone',
          char: '🧎🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person running',
      char: '🏃',
      variants: [
        {
          name: 'person running: light skin tone',
          char: '🏃🏻',
          group: 'People & Body',
        },
        {
          name: 'person running: medium-light skin tone',
          char: '🏃🏼',
          group: 'People & Body',
        },
        {
          name: 'person running: medium skin tone',
          char: '🏃🏽',
          group: 'People & Body',
        },
        {
          name: 'person running: medium-dark skin tone',
          char: '🏃🏾',
          group: 'People & Body',
        },
        {
          name: 'person running: dark skin tone',
          char: '🏃🏿',
          group: 'People & Body',
        },
        { name: 'man running', char: '🏃\u200d♂️', group: 'People & Body' },
        {
          name: 'man running: light skin tone',
          char: '🏃🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man running: medium-light skin tone',
          char: '🏃🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man running: medium skin tone',
          char: '🏃🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man running: medium-dark skin tone',
          char: '🏃🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man running: dark skin tone',
          char: '🏃🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman running', char: '🏃\u200d♀️', group: 'People & Body' },
        {
          name: 'woman running: light skin tone',
          char: '🏃🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman running: medium-light skin tone',
          char: '🏃🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman running: medium skin tone',
          char: '🏃🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman running: medium-dark skin tone',
          char: '🏃🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman running: dark skin tone',
          char: '🏃🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'woman dancing',
      char: '💃',
      variants: [
        {
          name: 'woman dancing: light skin tone',
          char: '💃🏻',
          group: 'People & Body',
        },
        {
          name: 'woman dancing: medium-light skin tone',
          char: '💃🏼',
          group: 'People & Body',
        },
        {
          name: 'woman dancing: medium skin tone',
          char: '💃🏽',
          group: 'People & Body',
        },
        {
          name: 'woman dancing: medium-dark skin tone',
          char: '💃🏾',
          group: 'People & Body',
        },
        {
          name: 'woman dancing: dark skin tone',
          char: '💃🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'man dancing',
      char: '🕺',
      variants: [
        {
          name: 'man dancing: light skin tone',
          char: '🕺🏻',
          group: 'People & Body',
        },
        {
          name: 'man dancing: medium-light skin tone',
          char: '🕺🏼',
          group: 'People & Body',
        },
        {
          name: 'man dancing: medium skin tone',
          char: '🕺🏽',
          group: 'People & Body',
        },
        {
          name: 'man dancing: medium-dark skin tone',
          char: '🕺🏾',
          group: 'People & Body',
        },
        {
          name: 'man dancing: dark skin tone',
          char: '🕺🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person in suit levitating',
      char: '🕴️',
      variants: [
        {
          name: 'person in suit levitating',
          char: '🕴️',
          group: 'People & Body',
        },
        {
          name: 'person in suit levitating: light skin tone',
          char: '🕴🏻',
          group: 'People & Body',
        },
        {
          name: 'person in suit levitating: medium-light skin tone',
          char: '🕴🏼',
          group: 'People & Body',
        },
        {
          name: 'person in suit levitating: medium skin tone',
          char: '🕴🏽',
          group: 'People & Body',
        },
        {
          name: 'person in suit levitating: medium-dark skin tone',
          char: '🕴🏾',
          group: 'People & Body',
        },
        {
          name: 'person in suit levitating: dark skin tone',
          char: '🕴🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'people with bunny ears',
      char: '👯',
      variants: [
        {
          name: 'men with bunny ears',
          char: '👯\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'women with bunny ears',
          char: '👯\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person in steamy room',
      char: '🧖',
      variants: [
        {
          name: 'person in steamy room: light skin tone',
          char: '🧖🏻',
          group: 'People & Body',
        },
        {
          name: 'person in steamy room: medium-light skin tone',
          char: '🧖🏼',
          group: 'People & Body',
        },
        {
          name: 'person in steamy room: medium skin tone',
          char: '🧖🏽',
          group: 'People & Body',
        },
        {
          name: 'person in steamy room: medium-dark skin tone',
          char: '🧖🏾',
          group: 'People & Body',
        },
        {
          name: 'person in steamy room: dark skin tone',
          char: '🧖🏿',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room',
          char: '🧖\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room: light skin tone',
          char: '🧖🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room: medium-light skin tone',
          char: '🧖🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room: medium skin tone',
          char: '🧖🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room: medium-dark skin tone',
          char: '🧖🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in steamy room: dark skin tone',
          char: '🧖🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room',
          char: '🧖\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room: light skin tone',
          char: '🧖🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room: medium-light skin tone',
          char: '🧖🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room: medium skin tone',
          char: '🧖🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room: medium-dark skin tone',
          char: '🧖🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in steamy room: dark skin tone',
          char: '🧖🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person climbing',
      char: '🧗',
      variants: [
        {
          name: 'person climbing: light skin tone',
          char: '🧗🏻',
          group: 'People & Body',
        },
        {
          name: 'person climbing: medium-light skin tone',
          char: '🧗🏼',
          group: 'People & Body',
        },
        {
          name: 'person climbing: medium skin tone',
          char: '🧗🏽',
          group: 'People & Body',
        },
        {
          name: 'person climbing: medium-dark skin tone',
          char: '🧗🏾',
          group: 'People & Body',
        },
        {
          name: 'person climbing: dark skin tone',
          char: '🧗🏿',
          group: 'People & Body',
        },
        { name: 'man climbing', char: '🧗\u200d♂️', group: 'People & Body' },
        {
          name: 'man climbing: light skin tone',
          char: '🧗🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man climbing: medium-light skin tone',
          char: '🧗🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man climbing: medium skin tone',
          char: '🧗🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man climbing: medium-dark skin tone',
          char: '🧗🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man climbing: dark skin tone',
          char: '🧗🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman climbing', char: '🧗\u200d♀️', group: 'People & Body' },
        {
          name: 'woman climbing: light skin tone',
          char: '🧗🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman climbing: medium-light skin tone',
          char: '🧗🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman climbing: medium skin tone',
          char: '🧗🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman climbing: medium-dark skin tone',
          char: '🧗🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman climbing: dark skin tone',
          char: '🧗🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    { name: 'person fencing', char: '🤺', variants: [] },
    {
      name: 'horse racing',
      char: '🏇',
      variants: [
        {
          name: 'horse racing: light skin tone',
          char: '🏇🏻',
          group: 'People & Body',
        },
        {
          name: 'horse racing: medium-light skin tone',
          char: '🏇🏼',
          group: 'People & Body',
        },
        {
          name: 'horse racing: medium skin tone',
          char: '🏇🏽',
          group: 'People & Body',
        },
        {
          name: 'horse racing: medium-dark skin tone',
          char: '🏇🏾',
          group: 'People & Body',
        },
        {
          name: 'horse racing: dark skin tone',
          char: '🏇🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'skier',
      char: '⛷️',
      variants: [{ name: 'skier', char: '⛷️', group: 'People & Body' }],
    },
    {
      name: 'snowboarder',
      char: '🏂',
      variants: [
        {
          name: 'snowboarder: light skin tone',
          char: '🏂🏻',
          group: 'People & Body',
        },
        {
          name: 'snowboarder: medium-light skin tone',
          char: '🏂🏼',
          group: 'People & Body',
        },
        {
          name: 'snowboarder: medium skin tone',
          char: '🏂🏽',
          group: 'People & Body',
        },
        {
          name: 'snowboarder: medium-dark skin tone',
          char: '🏂🏾',
          group: 'People & Body',
        },
        {
          name: 'snowboarder: dark skin tone',
          char: '🏂🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person golfing',
      char: '🏌️',
      variants: [
        { name: 'person golfing', char: '🏌️', group: 'People & Body' },
        {
          name: 'person golfing: light skin tone',
          char: '🏌🏻',
          group: 'People & Body',
        },
        {
          name: 'person golfing: medium-light skin tone',
          char: '🏌🏼',
          group: 'People & Body',
        },
        {
          name: 'person golfing: medium skin tone',
          char: '🏌🏽',
          group: 'People & Body',
        },
        {
          name: 'person golfing: medium-dark skin tone',
          char: '🏌🏾',
          group: 'People & Body',
        },
        {
          name: 'person golfing: dark skin tone',
          char: '🏌🏿',
          group: 'People & Body',
        },
        { name: 'man golfing', char: '🏌️\u200d♂️', group: 'People & Body' },
        {
          name: 'man golfing: light skin tone',
          char: '🏌🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man golfing: medium-light skin tone',
          char: '🏌🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man golfing: medium skin tone',
          char: '🏌🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man golfing: medium-dark skin tone',
          char: '🏌🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man golfing: dark skin tone',
          char: '🏌🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman golfing', char: '🏌️\u200d♀️', group: 'People & Body' },
        {
          name: 'woman golfing: light skin tone',
          char: '🏌🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman golfing: medium-light skin tone',
          char: '🏌🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman golfing: medium skin tone',
          char: '🏌🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman golfing: medium-dark skin tone',
          char: '🏌🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman golfing: dark skin tone',
          char: '🏌🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person surfing',
      char: '🏄',
      variants: [
        {
          name: 'person surfing: light skin tone',
          char: '🏄🏻',
          group: 'People & Body',
        },
        {
          name: 'person surfing: medium-light skin tone',
          char: '🏄🏼',
          group: 'People & Body',
        },
        {
          name: 'person surfing: medium skin tone',
          char: '🏄🏽',
          group: 'People & Body',
        },
        {
          name: 'person surfing: medium-dark skin tone',
          char: '🏄🏾',
          group: 'People & Body',
        },
        {
          name: 'person surfing: dark skin tone',
          char: '🏄🏿',
          group: 'People & Body',
        },
        { name: 'man surfing', char: '🏄\u200d♂️', group: 'People & Body' },
        {
          name: 'man surfing: light skin tone',
          char: '🏄🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man surfing: medium-light skin tone',
          char: '🏄🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man surfing: medium skin tone',
          char: '🏄🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man surfing: medium-dark skin tone',
          char: '🏄🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man surfing: dark skin tone',
          char: '🏄🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman surfing', char: '🏄\u200d♀️', group: 'People & Body' },
        {
          name: 'woman surfing: light skin tone',
          char: '🏄🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman surfing: medium-light skin tone',
          char: '🏄🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman surfing: medium skin tone',
          char: '🏄🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman surfing: medium-dark skin tone',
          char: '🏄🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman surfing: dark skin tone',
          char: '🏄🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person rowing boat',
      char: '🚣',
      variants: [
        {
          name: 'person rowing boat: light skin tone',
          char: '🚣🏻',
          group: 'People & Body',
        },
        {
          name: 'person rowing boat: medium-light skin tone',
          char: '🚣🏼',
          group: 'People & Body',
        },
        {
          name: 'person rowing boat: medium skin tone',
          char: '🚣🏽',
          group: 'People & Body',
        },
        {
          name: 'person rowing boat: medium-dark skin tone',
          char: '🚣🏾',
          group: 'People & Body',
        },
        {
          name: 'person rowing boat: dark skin tone',
          char: '🚣🏿',
          group: 'People & Body',
        },
        { name: 'man rowing boat', char: '🚣\u200d♂️', group: 'People & Body' },
        {
          name: 'man rowing boat: light skin tone',
          char: '🚣🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man rowing boat: medium-light skin tone',
          char: '🚣🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man rowing boat: medium skin tone',
          char: '🚣🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man rowing boat: medium-dark skin tone',
          char: '🚣🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man rowing boat: dark skin tone',
          char: '🚣🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat',
          char: '🚣\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat: light skin tone',
          char: '🚣🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat: medium-light skin tone',
          char: '🚣🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat: medium skin tone',
          char: '🚣🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat: medium-dark skin tone',
          char: '🚣🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman rowing boat: dark skin tone',
          char: '🚣🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person swimming',
      char: '🏊',
      variants: [
        {
          name: 'person swimming: light skin tone',
          char: '🏊🏻',
          group: 'People & Body',
        },
        {
          name: 'person swimming: medium-light skin tone',
          char: '🏊🏼',
          group: 'People & Body',
        },
        {
          name: 'person swimming: medium skin tone',
          char: '🏊🏽',
          group: 'People & Body',
        },
        {
          name: 'person swimming: medium-dark skin tone',
          char: '🏊🏾',
          group: 'People & Body',
        },
        {
          name: 'person swimming: dark skin tone',
          char: '🏊🏿',
          group: 'People & Body',
        },
        { name: 'man swimming', char: '🏊\u200d♂️', group: 'People & Body' },
        {
          name: 'man swimming: light skin tone',
          char: '🏊🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man swimming: medium-light skin tone',
          char: '🏊🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man swimming: medium skin tone',
          char: '🏊🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man swimming: medium-dark skin tone',
          char: '🏊🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man swimming: dark skin tone',
          char: '🏊🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman swimming', char: '🏊\u200d♀️', group: 'People & Body' },
        {
          name: 'woman swimming: light skin tone',
          char: '🏊🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman swimming: medium-light skin tone',
          char: '🏊🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman swimming: medium skin tone',
          char: '🏊🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman swimming: medium-dark skin tone',
          char: '🏊🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman swimming: dark skin tone',
          char: '🏊🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person bouncing ball',
      char: '⛹️',
      variants: [
        { name: 'person bouncing ball', char: '⛹️', group: 'People & Body' },
        {
          name: 'person bouncing ball: light skin tone',
          char: '⛹🏻',
          group: 'People & Body',
        },
        {
          name: 'person bouncing ball: medium-light skin tone',
          char: '⛹🏼',
          group: 'People & Body',
        },
        {
          name: 'person bouncing ball: medium skin tone',
          char: '⛹🏽',
          group: 'People & Body',
        },
        {
          name: 'person bouncing ball: medium-dark skin tone',
          char: '⛹🏾',
          group: 'People & Body',
        },
        {
          name: 'person bouncing ball: dark skin tone',
          char: '⛹🏿',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball',
          char: '⛹️\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball: light skin tone',
          char: '⛹🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball: medium-light skin tone',
          char: '⛹🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball: medium skin tone',
          char: '⛹🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball: medium-dark skin tone',
          char: '⛹🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man bouncing ball: dark skin tone',
          char: '⛹🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball',
          char: '⛹️\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball: light skin tone',
          char: '⛹🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball: medium-light skin tone',
          char: '⛹🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball: medium skin tone',
          char: '⛹🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball: medium-dark skin tone',
          char: '⛹🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman bouncing ball: dark skin tone',
          char: '⛹🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person lifting weights',
      char: '🏋️',
      variants: [
        { name: 'person lifting weights', char: '🏋️', group: 'People & Body' },
        {
          name: 'person lifting weights: light skin tone',
          char: '🏋🏻',
          group: 'People & Body',
        },
        {
          name: 'person lifting weights: medium-light skin tone',
          char: '🏋🏼',
          group: 'People & Body',
        },
        {
          name: 'person lifting weights: medium skin tone',
          char: '🏋🏽',
          group: 'People & Body',
        },
        {
          name: 'person lifting weights: medium-dark skin tone',
          char: '🏋🏾',
          group: 'People & Body',
        },
        {
          name: 'person lifting weights: dark skin tone',
          char: '🏋🏿',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights',
          char: '🏋️\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights: light skin tone',
          char: '🏋🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights: medium-light skin tone',
          char: '🏋🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights: medium skin tone',
          char: '🏋🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights: medium-dark skin tone',
          char: '🏋🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man lifting weights: dark skin tone',
          char: '🏋🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights',
          char: '🏋️\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights: light skin tone',
          char: '🏋🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights: medium-light skin tone',
          char: '🏋🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights: medium skin tone',
          char: '🏋🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights: medium-dark skin tone',
          char: '🏋🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman lifting weights: dark skin tone',
          char: '🏋🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person biking',
      char: '🚴',
      variants: [
        {
          name: 'person biking: light skin tone',
          char: '🚴🏻',
          group: 'People & Body',
        },
        {
          name: 'person biking: medium-light skin tone',
          char: '🚴🏼',
          group: 'People & Body',
        },
        {
          name: 'person biking: medium skin tone',
          char: '🚴🏽',
          group: 'People & Body',
        },
        {
          name: 'person biking: medium-dark skin tone',
          char: '🚴🏾',
          group: 'People & Body',
        },
        {
          name: 'person biking: dark skin tone',
          char: '🚴🏿',
          group: 'People & Body',
        },
        { name: 'man biking', char: '🚴\u200d♂️', group: 'People & Body' },
        {
          name: 'man biking: light skin tone',
          char: '🚴🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man biking: medium-light skin tone',
          char: '🚴🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man biking: medium skin tone',
          char: '🚴🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man biking: medium-dark skin tone',
          char: '🚴🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man biking: dark skin tone',
          char: '🚴🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman biking', char: '🚴\u200d♀️', group: 'People & Body' },
        {
          name: 'woman biking: light skin tone',
          char: '🚴🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman biking: medium-light skin tone',
          char: '🚴🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman biking: medium skin tone',
          char: '🚴🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman biking: medium-dark skin tone',
          char: '🚴🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman biking: dark skin tone',
          char: '🚴🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person mountain biking',
      char: '🚵',
      variants: [
        {
          name: 'person mountain biking: light skin tone',
          char: '🚵🏻',
          group: 'People & Body',
        },
        {
          name: 'person mountain biking: medium-light skin tone',
          char: '🚵🏼',
          group: 'People & Body',
        },
        {
          name: 'person mountain biking: medium skin tone',
          char: '🚵🏽',
          group: 'People & Body',
        },
        {
          name: 'person mountain biking: medium-dark skin tone',
          char: '🚵🏾',
          group: 'People & Body',
        },
        {
          name: 'person mountain biking: dark skin tone',
          char: '🚵🏿',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking',
          char: '🚵\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking: light skin tone',
          char: '🚵🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking: medium-light skin tone',
          char: '🚵🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking: medium skin tone',
          char: '🚵🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking: medium-dark skin tone',
          char: '🚵🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man mountain biking: dark skin tone',
          char: '🚵🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking',
          char: '🚵\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking: light skin tone',
          char: '🚵🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking: medium-light skin tone',
          char: '🚵🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking: medium skin tone',
          char: '🚵🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking: medium-dark skin tone',
          char: '🚵🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman mountain biking: dark skin tone',
          char: '🚵🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person cartwheeling',
      char: '🤸',
      variants: [
        {
          name: 'person cartwheeling: light skin tone',
          char: '🤸🏻',
          group: 'People & Body',
        },
        {
          name: 'person cartwheeling: medium-light skin tone',
          char: '🤸🏼',
          group: 'People & Body',
        },
        {
          name: 'person cartwheeling: medium skin tone',
          char: '🤸🏽',
          group: 'People & Body',
        },
        {
          name: 'person cartwheeling: medium-dark skin tone',
          char: '🤸🏾',
          group: 'People & Body',
        },
        {
          name: 'person cartwheeling: dark skin tone',
          char: '🤸🏿',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling',
          char: '🤸\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling: light skin tone',
          char: '🤸🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling: medium-light skin tone',
          char: '🤸🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling: medium skin tone',
          char: '🤸🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling: medium-dark skin tone',
          char: '🤸🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man cartwheeling: dark skin tone',
          char: '🤸🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling',
          char: '🤸\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling: light skin tone',
          char: '🤸🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling: medium-light skin tone',
          char: '🤸🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling: medium skin tone',
          char: '🤸🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling: medium-dark skin tone',
          char: '🤸🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman cartwheeling: dark skin tone',
          char: '🤸🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'people wrestling',
      char: '🤼',
      variants: [
        { name: 'men wrestling', char: '🤼\u200d♂️', group: 'People & Body' },
        { name: 'women wrestling', char: '🤼\u200d♀️', group: 'People & Body' },
      ],
    },
    {
      name: 'person playing water polo',
      char: '🤽',
      variants: [
        {
          name: 'person playing water polo: light skin tone',
          char: '🤽🏻',
          group: 'People & Body',
        },
        {
          name: 'person playing water polo: medium-light skin tone',
          char: '🤽🏼',
          group: 'People & Body',
        },
        {
          name: 'person playing water polo: medium skin tone',
          char: '🤽🏽',
          group: 'People & Body',
        },
        {
          name: 'person playing water polo: medium-dark skin tone',
          char: '🤽🏾',
          group: 'People & Body',
        },
        {
          name: 'person playing water polo: dark skin tone',
          char: '🤽🏿',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo',
          char: '🤽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo: light skin tone',
          char: '🤽🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo: medium-light skin tone',
          char: '🤽🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo: medium skin tone',
          char: '🤽🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo: medium-dark skin tone',
          char: '🤽🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing water polo: dark skin tone',
          char: '🤽🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo',
          char: '🤽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo: light skin tone',
          char: '🤽🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo: medium-light skin tone',
          char: '🤽🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo: medium skin tone',
          char: '🤽🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo: medium-dark skin tone',
          char: '🤽🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing water polo: dark skin tone',
          char: '🤽🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person playing handball',
      char: '🤾',
      variants: [
        {
          name: 'person playing handball: light skin tone',
          char: '🤾🏻',
          group: 'People & Body',
        },
        {
          name: 'person playing handball: medium-light skin tone',
          char: '🤾🏼',
          group: 'People & Body',
        },
        {
          name: 'person playing handball: medium skin tone',
          char: '🤾🏽',
          group: 'People & Body',
        },
        {
          name: 'person playing handball: medium-dark skin tone',
          char: '🤾🏾',
          group: 'People & Body',
        },
        {
          name: 'person playing handball: dark skin tone',
          char: '🤾🏿',
          group: 'People & Body',
        },
        {
          name: 'man playing handball',
          char: '🤾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing handball: light skin tone',
          char: '🤾🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing handball: medium-light skin tone',
          char: '🤾🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing handball: medium skin tone',
          char: '🤾🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing handball: medium-dark skin tone',
          char: '🤾🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man playing handball: dark skin tone',
          char: '🤾🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball',
          char: '🤾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball: light skin tone',
          char: '🤾🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball: medium-light skin tone',
          char: '🤾🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball: medium skin tone',
          char: '🤾🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball: medium-dark skin tone',
          char: '🤾🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman playing handball: dark skin tone',
          char: '🤾🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person juggling',
      char: '🤹',
      variants: [
        {
          name: 'person juggling: light skin tone',
          char: '🤹🏻',
          group: 'People & Body',
        },
        {
          name: 'person juggling: medium-light skin tone',
          char: '🤹🏼',
          group: 'People & Body',
        },
        {
          name: 'person juggling: medium skin tone',
          char: '🤹🏽',
          group: 'People & Body',
        },
        {
          name: 'person juggling: medium-dark skin tone',
          char: '🤹🏾',
          group: 'People & Body',
        },
        {
          name: 'person juggling: dark skin tone',
          char: '🤹🏿',
          group: 'People & Body',
        },
        { name: 'man juggling', char: '🤹\u200d♂️', group: 'People & Body' },
        {
          name: 'man juggling: light skin tone',
          char: '🤹🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man juggling: medium-light skin tone',
          char: '🤹🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man juggling: medium skin tone',
          char: '🤹🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man juggling: medium-dark skin tone',
          char: '🤹🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man juggling: dark skin tone',
          char: '🤹🏿\u200d♂️',
          group: 'People & Body',
        },
        { name: 'woman juggling', char: '🤹\u200d♀️', group: 'People & Body' },
        {
          name: 'woman juggling: light skin tone',
          char: '🤹🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman juggling: medium-light skin tone',
          char: '🤹🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman juggling: medium skin tone',
          char: '🤹🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman juggling: medium-dark skin tone',
          char: '🤹🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman juggling: dark skin tone',
          char: '🤹🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person in lotus position',
      char: '🧘',
      variants: [
        {
          name: 'person in lotus position: light skin tone',
          char: '🧘🏻',
          group: 'People & Body',
        },
        {
          name: 'person in lotus position: medium-light skin tone',
          char: '🧘🏼',
          group: 'People & Body',
        },
        {
          name: 'person in lotus position: medium skin tone',
          char: '🧘🏽',
          group: 'People & Body',
        },
        {
          name: 'person in lotus position: medium-dark skin tone',
          char: '🧘🏾',
          group: 'People & Body',
        },
        {
          name: 'person in lotus position: dark skin tone',
          char: '🧘🏿',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position',
          char: '🧘\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position: light skin tone',
          char: '🧘🏻\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position: medium-light skin tone',
          char: '🧘🏼\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position: medium skin tone',
          char: '🧘🏽\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position: medium-dark skin tone',
          char: '🧘🏾\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'man in lotus position: dark skin tone',
          char: '🧘🏿\u200d♂️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position',
          char: '🧘\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position: light skin tone',
          char: '🧘🏻\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position: medium-light skin tone',
          char: '🧘🏼\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position: medium skin tone',
          char: '🧘🏽\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position: medium-dark skin tone',
          char: '🧘🏾\u200d♀️',
          group: 'People & Body',
        },
        {
          name: 'woman in lotus position: dark skin tone',
          char: '🧘🏿\u200d♀️',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person taking bath',
      char: '🛀',
      variants: [
        {
          name: 'person taking bath: light skin tone',
          char: '🛀🏻',
          group: 'People & Body',
        },
        {
          name: 'person taking bath: medium-light skin tone',
          char: '🛀🏼',
          group: 'People & Body',
        },
        {
          name: 'person taking bath: medium skin tone',
          char: '🛀🏽',
          group: 'People & Body',
        },
        {
          name: 'person taking bath: medium-dark skin tone',
          char: '🛀🏾',
          group: 'People & Body',
        },
        {
          name: 'person taking bath: dark skin tone',
          char: '🛀🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'person in bed',
      char: '🛌',
      variants: [
        {
          name: 'person in bed: light skin tone',
          char: '🛌🏻',
          group: 'People & Body',
        },
        {
          name: 'person in bed: medium-light skin tone',
          char: '🛌🏼',
          group: 'People & Body',
        },
        {
          name: 'person in bed: medium skin tone',
          char: '🛌🏽',
          group: 'People & Body',
        },
        {
          name: 'person in bed: medium-dark skin tone',
          char: '🛌🏾',
          group: 'People & Body',
        },
        {
          name: 'person in bed: dark skin tone',
          char: '🛌🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'women holding hands',
      char: '👭',
      variants: [
        {
          name: 'women holding hands: light skin tone',
          char: '👭🏻',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-light skin tone',
          char: '👭🏼',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium skin tone',
          char: '👭🏽',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: medium-dark skin tone',
          char: '👭🏾',
          group: 'People & Body',
        },
        {
          name: 'women holding hands: dark skin tone',
          char: '👭🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'woman and man holding hands',
      char: '👫',
      variants: [
        {
          name: 'woman and man holding hands: light skin tone',
          char: '👫🏻',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: medium-light skin tone',
          char: '👫🏼',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: medium skin tone',
          char: '👫🏽',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: medium-dark skin tone',
          char: '👫🏾',
          group: 'People & Body',
        },
        {
          name: 'woman and man holding hands: dark skin tone',
          char: '👫🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'men holding hands',
      char: '👬',
      variants: [
        {
          name: 'men holding hands: light skin tone',
          char: '👬🏻',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-light skin tone',
          char: '👬🏼',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium skin tone',
          char: '👬🏽',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: medium-dark skin tone',
          char: '👬🏾',
          group: 'People & Body',
        },
        {
          name: 'men holding hands: dark skin tone',
          char: '👬🏿',
          group: 'People & Body',
        },
      ],
    },
    {
      name: 'kiss',
      char: '💏',
      variants: [
        { name: 'kiss: light skin tone', char: '💏🏻', group: 'People & Body' },
        {
          name: 'kiss: medium-light skin tone',
          char: '💏🏼',
          group: 'People & Body',
        },
        {
          name: 'kiss: medium skin tone',
          char: '💏🏽',
          group: 'People & Body',
        },
        {
          name: 'kiss: medium-dark skin tone',
          char: '💏🏾',
          group: 'People & Body',
        },
        { name: 'kiss: dark skin tone', char: '💏🏿', group: 'People & Body' },
      ],
    },
    {
      name: 'couple with heart',
      char: '💑',
      variants: [
        {
          name: 'couple with heart: light skin tone',
          char: '💑🏻',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: medium-light skin tone',
          char: '💑🏼',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: medium skin tone',
          char: '💑🏽',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: medium-dark skin tone',
          char: '💑🏾',
          group: 'People & Body',
        },
        {
          name: 'couple with heart: dark skin tone',
          char: '💑🏿',
          group: 'People & Body',
        },
      ],
    },
    { name: 'family', char: '👪', variants: [] },
    {
      name: 'speaking head',
      char: '🗣️',
      variants: [{ name: 'speaking head', char: '🗣️', group: 'People & Body' }],
    },
    { name: 'bust in silhouette', char: '👤', variants: [] },
    { name: 'busts in silhouette', char: '👥', variants: [] },
    { name: 'people hugging', char: '🫂', variants: [] },
    { name: 'footprints', char: '👣', variants: [] },
  ],
  'Food & Drink': [
    { name: 'grapes', char: '🍇', variants: [] },
    { name: 'melon', char: '🍈', variants: [] },
    { name: 'watermelon', char: '🍉', variants: [] },
    { name: 'tangerine', char: '🍊', variants: [] },
    { name: 'lemon', char: '🍋', variants: [] },
    { name: 'banana', char: '🍌', variants: [] },
    { name: 'pineapple', char: '🍍', variants: [] },
    { name: 'mango', char: '🥭', variants: [] },
    { name: 'red apple', char: '🍎', variants: [] },
    { name: 'green apple', char: '🍏', variants: [] },
    { name: 'pear', char: '🍐', variants: [] },
    { name: 'peach', char: '🍑', variants: [] },
    { name: 'cherries', char: '🍒', variants: [] },
    { name: 'strawberry', char: '🍓', variants: [] },
    { name: 'blueberries', char: '🫐', variants: [] },
    { name: 'kiwi fruit', char: '🥝', variants: [] },
    { name: 'tomato', char: '🍅', variants: [] },
    { name: 'olive', char: '🫒', variants: [] },
    { name: 'coconut', char: '🥥', variants: [] },
    { name: 'avocado', char: '🥑', variants: [] },
    { name: 'eggplant', char: '🍆', variants: [] },
    { name: 'potato', char: '🥔', variants: [] },
    { name: 'carrot', char: '🥕', variants: [] },
    { name: 'ear of corn', char: '🌽', variants: [] },
    {
      name: 'hot pepper',
      char: '🌶️',
      variants: [{ name: 'hot pepper', char: '🌶️', group: 'Food & Drink' }],
    },
    { name: 'bell pepper', char: '🫑', variants: [] },
    { name: 'cucumber', char: '🥒', variants: [] },
    { name: 'leafy green', char: '🥬', variants: [] },
    { name: 'broccoli', char: '🥦', variants: [] },
    { name: 'garlic', char: '🧄', variants: [] },
    { name: 'onion', char: '🧅', variants: [] },
    { name: 'mushroom', char: '🍄', variants: [] },
    { name: 'peanuts', char: '🥜', variants: [] },
    { name: 'chestnut', char: '🌰', variants: [] },
    { name: 'bread', char: '🍞', variants: [] },
    { name: 'croissant', char: '🥐', variants: [] },
    { name: 'baguette bread', char: '🥖', variants: [] },
    { name: 'flatbread', char: '🫓', variants: [] },
    { name: 'pretzel', char: '🥨', variants: [] },
    { name: 'bagel', char: '🥯', variants: [] },
    { name: 'pancakes', char: '🥞', variants: [] },
    { name: 'waffle', char: '🧇', variants: [] },
    { name: 'cheese wedge', char: '🧀', variants: [] },
    { name: 'meat on bone', char: '🍖', variants: [] },
    { name: 'poultry leg', char: '🍗', variants: [] },
    { name: 'cut of meat', char: '🥩', variants: [] },
    { name: 'bacon', char: '🥓', variants: [] },
    { name: 'hamburger', char: '🍔', variants: [] },
    { name: 'french fries', char: '🍟', variants: [] },
    { name: 'pizza', char: '🍕', variants: [] },
    { name: 'hot dog', char: '🌭', variants: [] },
    { name: 'sandwich', char: '🥪', variants: [] },
    { name: 'taco', char: '🌮', variants: [] },
    { name: 'burrito', char: '🌯', variants: [] },
    { name: 'tamale', char: '🫔', variants: [] },
    { name: 'stuffed flatbread', char: '🥙', variants: [] },
    { name: 'falafel', char: '🧆', variants: [] },
    { name: 'egg', char: '🥚', variants: [] },
    { name: 'cooking', char: '🍳', variants: [] },
    { name: 'shallow pan of food', char: '🥘', variants: [] },
    { name: 'pot of food', char: '🍲', variants: [] },
    { name: 'fondue', char: '🫕', variants: [] },
    { name: 'bowl with spoon', char: '🥣', variants: [] },
    { name: 'green salad', char: '🥗', variants: [] },
    { name: 'popcorn', char: '🍿', variants: [] },
    { name: 'butter', char: '🧈', variants: [] },
    { name: 'salt', char: '🧂', variants: [] },
    { name: 'canned food', char: '🥫', variants: [] },
    { name: 'bento box', char: '🍱', variants: [] },
    { name: 'rice cracker', char: '🍘', variants: [] },
    { name: 'rice ball', char: '🍙', variants: [] },
    { name: 'cooked rice', char: '🍚', variants: [] },
    { name: 'curry rice', char: '🍛', variants: [] },
    { name: 'steaming bowl', char: '🍜', variants: [] },
    { name: 'spaghetti', char: '🍝', variants: [] },
    { name: 'roasted sweet potato', char: '🍠', variants: [] },
    { name: 'oden', char: '🍢', variants: [] },
    { name: 'sushi', char: '🍣', variants: [] },
    { name: 'fried shrimp', char: '🍤', variants: [] },
    { name: 'fish cake with swirl', char: '🍥', variants: [] },
    { name: 'moon cake', char: '🥮', variants: [] },
    { name: 'dango', char: '🍡', variants: [] },
    { name: 'dumpling', char: '🥟', variants: [] },
    { name: 'fortune cookie', char: '🥠', variants: [] },
    { name: 'takeout box', char: '🥡', variants: [] },
    { name: 'crab', char: '🦀', variants: [] },
    { name: 'lobster', char: '🦞', variants: [] },
    { name: 'shrimp', char: '🦐', variants: [] },
    { name: 'squid', char: '🦑', variants: [] },
    { name: 'oyster', char: '🦪', variants: [] },
    { name: 'soft ice cream', char: '🍦', variants: [] },
    { name: 'shaved ice', char: '🍧', variants: [] },
    { name: 'ice cream', char: '🍨', variants: [] },
    { name: 'doughnut', char: '🍩', variants: [] },
    { name: 'cookie', char: '🍪', variants: [] },
    { name: 'birthday cake', char: '🎂', variants: [] },
    { name: 'shortcake', char: '🍰', variants: [] },
    { name: 'cupcake', char: '🧁', variants: [] },
    { name: 'pie', char: '🥧', variants: [] },
    { name: 'chocolate bar', char: '🍫', variants: [] },
    { name: 'candy', char: '🍬', variants: [] },
    { name: 'lollipop', char: '🍭', variants: [] },
    { name: 'custard', char: '🍮', variants: [] },
    { name: 'honey pot', char: '🍯', variants: [] },
    { name: 'baby bottle', char: '🍼', variants: [] },
    { name: 'glass of milk', char: '🥛', variants: [] },
    { name: 'hot beverage', char: '☕', variants: [] },
    { name: 'teapot', char: '🫖', variants: [] },
    { name: 'teacup without handle', char: '🍵', variants: [] },
    { name: 'sake', char: '🍶', variants: [] },
    { name: 'bottle with popping cork', char: '🍾', variants: [] },
    { name: 'wine glass', char: '🍷', variants: [] },
    { name: 'cocktail glass', char: '🍸', variants: [] },
    { name: 'tropical drink', char: '🍹', variants: [] },
    { name: 'beer mug', char: '🍺', variants: [] },
    { name: 'clinking beer mugs', char: '🍻', variants: [] },
    { name: 'clinking glasses', char: '🥂', variants: [] },
    { name: 'tumbler glass', char: '🥃', variants: [] },
    { name: 'cup with straw', char: '🥤', variants: [] },
    { name: 'bubble tea', char: '🧋', variants: [] },
    { name: 'beverage box', char: '🧃', variants: [] },
    { name: 'mate', char: '🧉', variants: [] },
    { name: 'ice', char: '🧊', variants: [] },
    { name: 'chopsticks', char: '🥢', variants: [] },
    {
      name: 'fork and knife with plate',
      char: '🍽️',
      variants: [
        {
          name: 'fork and knife with plate',
          char: '🍽️',
          group: 'Food & Drink',
        },
      ],
    },
    { name: 'fork and knife', char: '🍴', variants: [] },
    { name: 'spoon', char: '🥄', variants: [] },
    { name: 'kitchen knife', char: '🔪', variants: [] },
    { name: 'amphora', char: '🏺', variants: [] },
  ],
  Symbols: [
    { name: 'ATM sign', char: '🏧', variants: [] },
    { name: 'litter in bin sign', char: '🚮', variants: [] },
    { name: 'potable water', char: '🚰', variants: [] },
    { name: 'wheelchair symbol', char: '♿', variants: [] },
    { name: 'men’s room', char: '🚹', variants: [] },
    { name: 'women’s room', char: '🚺', variants: [] },
    { name: 'restroom', char: '🚻', variants: [] },
    { name: 'baby symbol', char: '🚼', variants: [] },
    { name: 'water closet', char: '🚾', variants: [] },
    { name: 'passport control', char: '🛂', variants: [] },
    { name: 'customs', char: '🛃', variants: [] },
    { name: 'baggage claim', char: '🛄', variants: [] },
    { name: 'left luggage', char: '🛅', variants: [] },
    {
      name: 'warning',
      char: '⚠️',
      variants: [{ name: 'warning', char: '⚠️', group: 'Symbols' }],
    },
    { name: 'children crossing', char: '🚸', variants: [] },
    { name: 'no entry', char: '⛔', variants: [] },
    { name: 'prohibited', char: '🚫', variants: [] },
    { name: 'no bicycles', char: '🚳', variants: [] },
    { name: 'no smoking', char: '🚭', variants: [] },
    { name: 'no littering', char: '🚯', variants: [] },
    { name: 'non-potable water', char: '🚱', variants: [] },
    { name: 'no pedestrians', char: '🚷', variants: [] },
    { name: 'no mobile phones', char: '📵', variants: [] },
    { name: 'no one under eighteen', char: '🔞', variants: [] },
    {
      name: 'radioactive',
      char: '☢️',
      variants: [{ name: 'radioactive', char: '☢️', group: 'Symbols' }],
    },
    {
      name: 'biohazard',
      char: '☣️',
      variants: [{ name: 'biohazard', char: '☣️', group: 'Symbols' }],
    },
    {
      name: 'up arrow',
      char: '⬆️',
      variants: [{ name: 'up arrow', char: '⬆️', group: 'Symbols' }],
    },
    {
      name: 'up-right arrow',
      char: '↗️',
      variants: [{ name: 'up-right arrow', char: '↗️', group: 'Symbols' }],
    },
    {
      name: 'right arrow',
      char: '➡️',
      variants: [{ name: 'right arrow', char: '➡️', group: 'Symbols' }],
    },
    {
      name: 'down-right arrow',
      char: '↘️',
      variants: [{ name: 'down-right arrow', char: '↘️', group: 'Symbols' }],
    },
    {
      name: 'down arrow',
      char: '⬇️',
      variants: [{ name: 'down arrow', char: '⬇️', group: 'Symbols' }],
    },
    {
      name: 'down-left arrow',
      char: '↙️',
      variants: [{ name: 'down-left arrow', char: '↙️', group: 'Symbols' }],
    },
    {
      name: 'left arrow',
      char: '⬅️',
      variants: [{ name: 'left arrow', char: '⬅️', group: 'Symbols' }],
    },
    {
      name: 'up-left arrow',
      char: '↖️',
      variants: [{ name: 'up-left arrow', char: '↖️', group: 'Symbols' }],
    },
    {
      name: 'up-down arrow',
      char: '↕️',
      variants: [{ name: 'up-down arrow', char: '↕️', group: 'Symbols' }],
    },
    {
      name: 'left-right arrow',
      char: '↔️',
      variants: [{ name: 'left-right arrow', char: '↔️', group: 'Symbols' }],
    },
    {
      name: 'right arrow curving left',
      char: '↩️',
      variants: [
        { name: 'right arrow curving left', char: '↩️', group: 'Symbols' },
      ],
    },
    {
      name: 'left arrow curving right',
      char: '↪️',
      variants: [
        { name: 'left arrow curving right', char: '↪️', group: 'Symbols' },
      ],
    },
    {
      name: 'right arrow curving up',
      char: '⤴️',
      variants: [
        { name: 'right arrow curving up', char: '⤴️', group: 'Symbols' },
      ],
    },
    {
      name: 'right arrow curving down',
      char: '⤵️',
      variants: [
        { name: 'right arrow curving down', char: '⤵️', group: 'Symbols' },
      ],
    },
    { name: 'clockwise vertical arrows', char: '🔃', variants: [] },
    { name: 'counterclockwise arrows button', char: '🔄', variants: [] },
    { name: 'BACK arrow', char: '🔙', variants: [] },
    { name: 'END arrow', char: '🔚', variants: [] },
    { name: 'ON! arrow', char: '🔛', variants: [] },
    { name: 'SOON arrow', char: '🔜', variants: [] },
    { name: 'TOP arrow', char: '🔝', variants: [] },
    { name: 'place of worship', char: '🛐', variants: [] },
    {
      name: 'atom symbol',
      char: '⚛️',
      variants: [{ name: 'atom symbol', char: '⚛️', group: 'Symbols' }],
    },
    {
      name: 'om',
      char: '🕉️',
      variants: [{ name: 'om', char: '🕉️', group: 'Symbols' }],
    },
    {
      name: 'star of David',
      char: '✡️',
      variants: [{ name: 'star of David', char: '✡️', group: 'Symbols' }],
    },
    {
      name: 'wheel of dharma',
      char: '☸️',
      variants: [{ name: 'wheel of dharma', char: '☸️', group: 'Symbols' }],
    },
    {
      name: 'yin yang',
      char: '☯️',
      variants: [{ name: 'yin yang', char: '☯️', group: 'Symbols' }],
    },
    {
      name: 'latin cross',
      char: '✝️',
      variants: [{ name: 'latin cross', char: '✝️', group: 'Symbols' }],
    },
    {
      name: 'orthodox cross',
      char: '☦️',
      variants: [{ name: 'orthodox cross', char: '☦️', group: 'Symbols' }],
    },
    {
      name: 'star and crescent',
      char: '☪️',
      variants: [{ name: 'star and crescent', char: '☪️', group: 'Symbols' }],
    },
    {
      name: 'peace symbol',
      char: '☮️',
      variants: [{ name: 'peace symbol', char: '☮️', group: 'Symbols' }],
    },
    { name: 'menorah', char: '🕎', variants: [] },
    { name: 'dotted six-pointed star', char: '🔯', variants: [] },
    { name: 'Aries', char: '♈', variants: [] },
    { name: 'Taurus', char: '♉', variants: [] },
    { name: 'Gemini', char: '♊', variants: [] },
    { name: 'Cancer', char: '♋', variants: [] },
    { name: 'Leo', char: '♌', variants: [] },
    { name: 'Virgo', char: '♍', variants: [] },
    { name: 'Libra', char: '♎', variants: [] },
    { name: 'Scorpio', char: '♏', variants: [] },
    { name: 'Sagittarius', char: '♐', variants: [] },
    { name: 'Capricorn', char: '♑', variants: [] },
    { name: 'Aquarius', char: '♒', variants: [] },
    { name: 'Pisces', char: '♓', variants: [] },
    { name: 'Ophiuchus', char: '⛎', variants: [] },
    { name: 'shuffle tracks button', char: '🔀', variants: [] },
    { name: 'repeat button', char: '🔁', variants: [] },
    { name: 'repeat single button', char: '🔂', variants: [] },
    {
      name: 'play button',
      char: '▶️',
      variants: [{ name: 'play button', char: '▶️', group: 'Symbols' }],
    },
    { name: 'fast-forward button', char: '⏩', variants: [] },
    {
      name: 'next track button',
      char: '⏭️',
      variants: [{ name: 'next track button', char: '⏭️', group: 'Symbols' }],
    },
    {
      name: 'play or pause button',
      char: '⏯️',
      variants: [
        { name: 'play or pause button', char: '⏯️', group: 'Symbols' },
      ],
    },
    {
      name: 'reverse button',
      char: '◀️',
      variants: [{ name: 'reverse button', char: '◀️', group: 'Symbols' }],
    },
    { name: 'fast reverse button', char: '⏪', variants: [] },
    {
      name: 'last track button',
      char: '⏮️',
      variants: [{ name: 'last track button', char: '⏮️', group: 'Symbols' }],
    },
    { name: 'upwards button', char: '🔼', variants: [] },
    { name: 'fast up button', char: '⏫', variants: [] },
    { name: 'downwards button', char: '🔽', variants: [] },
    { name: 'fast down button', char: '⏬', variants: [] },
    {
      name: 'pause button',
      char: '⏸️',
      variants: [{ name: 'pause button', char: '⏸️', group: 'Symbols' }],
    },
    {
      name: 'stop button',
      char: '⏹️',
      variants: [{ name: 'stop button', char: '⏹️', group: 'Symbols' }],
    },
    {
      name: 'record button',
      char: '⏺️',
      variants: [{ name: 'record button', char: '⏺️', group: 'Symbols' }],
    },
    {
      name: 'eject button',
      char: '⏏️',
      variants: [{ name: 'eject button', char: '⏏️', group: 'Symbols' }],
    },
    { name: 'cinema', char: '🎦', variants: [] },
    { name: 'dim button', char: '🔅', variants: [] },
    { name: 'bright button', char: '🔆', variants: [] },
    { name: 'antenna bars', char: '📶', variants: [] },
    { name: 'vibration mode', char: '📳', variants: [] },
    { name: 'mobile phone off', char: '📴', variants: [] },
    {
      name: 'female sign',
      char: '♀️',
      variants: [{ name: 'female sign', char: '♀️', group: 'Symbols' }],
    },
    {
      name: 'male sign',
      char: '♂️',
      variants: [{ name: 'male sign', char: '♂️', group: 'Symbols' }],
    },
    {
      name: 'transgender symbol',
      char: '⚧️',
      variants: [{ name: 'transgender symbol', char: '⚧️', group: 'Symbols' }],
    },
    {
      name: 'multiply',
      char: '✖️',
      variants: [{ name: 'multiply', char: '✖️', group: 'Symbols' }],
    },
    { name: 'plus', char: '➕', variants: [] },
    { name: 'minus', char: '➖', variants: [] },
    { name: 'divide', char: '➗', variants: [] },
    {
      name: 'infinity',
      char: '♾️',
      variants: [{ name: 'infinity', char: '♾️', group: 'Symbols' }],
    },
    {
      name: 'double exclamation mark',
      char: '‼️',
      variants: [
        { name: 'double exclamation mark', char: '‼️', group: 'Symbols' },
      ],
    },
    {
      name: 'exclamation question mark',
      char: '⁉️',
      variants: [
        { name: 'exclamation question mark', char: '⁉️', group: 'Symbols' },
      ],
    },
    { name: 'red question mark', char: '❓', variants: [] },
    { name: 'white question mark', char: '❔', variants: [] },
    { name: 'white exclamation mark', char: '❕', variants: [] },
    { name: 'red exclamation mark', char: '❗', variants: [] },
    {
      name: 'wavy dash',
      char: '〰️',
      variants: [{ name: 'wavy dash', char: '〰️', group: 'Symbols' }],
    },
    { name: 'currency exchange', char: '💱', variants: [] },
    { name: 'heavy dollar sign', char: '💲', variants: [] },
    {
      name: 'medical symbol',
      char: '⚕️',
      variants: [{ name: 'medical symbol', char: '⚕️', group: 'Symbols' }],
    },
    {
      name: 'recycling symbol',
      char: '♻️',
      variants: [{ name: 'recycling symbol', char: '♻️', group: 'Symbols' }],
    },
    {
      name: 'fleur-de-lis',
      char: '⚜️',
      variants: [{ name: 'fleur-de-lis', char: '⚜️', group: 'Symbols' }],
    },
    { name: 'trident emblem', char: '🔱', variants: [] },
    { name: 'name badge', char: '📛', variants: [] },
    { name: 'Japanese symbol for beginner', char: '🔰', variants: [] },
    { name: 'hollow red circle', char: '⭕', variants: [] },
    { name: 'check mark button', char: '✅', variants: [] },
    {
      name: 'check box with check',
      char: '☑️',
      variants: [
        { name: 'check box with check', char: '☑️', group: 'Symbols' },
      ],
    },
    {
      name: 'check mark',
      char: '✔️',
      variants: [{ name: 'check mark', char: '✔️', group: 'Symbols' }],
    },
    { name: 'cross mark', char: '❌', variants: [] },
    { name: 'cross mark button', char: '❎', variants: [] },
    { name: 'curly loop', char: '➰', variants: [] },
    { name: 'double curly loop', char: '➿', variants: [] },
    {
      name: 'part alternation mark',
      char: '〽️',
      variants: [
        { name: 'part alternation mark', char: '〽️', group: 'Symbols' },
      ],
    },
    {
      name: 'eight-spoked asterisk',
      char: '✳️',
      variants: [
        { name: 'eight-spoked asterisk', char: '✳️', group: 'Symbols' },
      ],
    },
    {
      name: 'eight-pointed star',
      char: '✴️',
      variants: [{ name: 'eight-pointed star', char: '✴️', group: 'Symbols' }],
    },
    {
      name: 'sparkle',
      char: '❇️',
      variants: [{ name: 'sparkle', char: '❇️', group: 'Symbols' }],
    },
    {
      name: 'copyright',
      char: '©️',
      variants: [{ name: 'copyright', char: '©️', group: 'Symbols' }],
    },
    {
      name: 'registered',
      char: '®️',
      variants: [{ name: 'registered', char: '®️', group: 'Symbols' }],
    },
    {
      name: 'trade mark',
      char: '™️',
      variants: [{ name: 'trade mark', char: '™️', group: 'Symbols' }],
    },
    { name: 'keycap: 10', char: '🔟', variants: [] },
    { name: 'input latin uppercase', char: '🔠', variants: [] },
    { name: 'input latin lowercase', char: '🔡', variants: [] },
    { name: 'input numbers', char: '🔢', variants: [] },
    { name: 'input symbols', char: '🔣', variants: [] },
    { name: 'input latin letters', char: '🔤', variants: [] },
    {
      name: 'A button (blood type)',
      char: '🅰️',
      variants: [
        { name: 'A button (blood type)', char: '🅰️', group: 'Symbols' },
      ],
    },
    { name: 'AB button (blood type)', char: '🆎', variants: [] },
    {
      name: 'B button (blood type)',
      char: '🅱️',
      variants: [
        { name: 'B button (blood type)', char: '🅱️', group: 'Symbols' },
      ],
    },
    { name: 'CL button', char: '🆑', variants: [] },
    { name: 'COOL button', char: '🆒', variants: [] },
    { name: 'FREE button', char: '🆓', variants: [] },
    {
      name: 'information',
      char: 'ℹ️',
      variants: [{ name: 'information', char: 'ℹ️', group: 'Symbols' }],
    },
    { name: 'ID button', char: '🆔', variants: [] },
    {
      name: 'circled M',
      char: 'Ⓜ️',
      variants: [{ name: 'circled M', char: 'Ⓜ️', group: 'Symbols' }],
    },
    { name: 'NEW button', char: '🆕', variants: [] },
    { name: 'NG button', char: '🆖', variants: [] },
    {
      name: 'O button (blood type)',
      char: '🅾️',
      variants: [
        { name: 'O button (blood type)', char: '🅾️', group: 'Symbols' },
      ],
    },
    { name: 'OK button', char: '🆗', variants: [] },
    {
      name: 'P button',
      char: '🅿️',
      variants: [{ name: 'P button', char: '🅿️', group: 'Symbols' }],
    },
    { name: 'SOS button', char: '🆘', variants: [] },
    { name: 'UP! button', char: '🆙', variants: [] },
    { name: 'VS button', char: '🆚', variants: [] },
    { name: 'Japanese “here” button', char: '🈁', variants: [] },
    {
      name: 'Japanese “service charge” button',
      char: '🈂️',
      variants: [
        {
          name: 'Japanese “service charge” button',
          char: '🈂️',
          group: 'Symbols',
        },
      ],
    },
    {
      name: 'Japanese “monthly amount” button',
      char: '🈷️',
      variants: [
        {
          name: 'Japanese “monthly amount” button',
          char: '🈷️',
          group: 'Symbols',
        },
      ],
    },
    { name: 'Japanese “not free of charge” button', char: '🈶', variants: [] },
    { name: 'Japanese “reserved” button', char: '🈯', variants: [] },
    { name: 'Japanese “bargain” button', char: '🉐', variants: [] },
    { name: 'Japanese “discount” button', char: '🈹', variants: [] },
    { name: 'Japanese “free of charge” button', char: '🈚', variants: [] },
    { name: 'Japanese “prohibited” button', char: '🈲', variants: [] },
    { name: 'Japanese “acceptable” button', char: '🉑', variants: [] },
    { name: 'Japanese “application” button', char: '🈸', variants: [] },
    { name: 'Japanese “passing grade” button', char: '🈴', variants: [] },
    { name: 'Japanese “vacancy” button', char: '🈳', variants: [] },
    {
      name: 'Japanese “congratulations” button',
      char: '㊗️',
      variants: [
        {
          name: 'Japanese “congratulations” button',
          char: '㊗️',
          group: 'Symbols',
        },
      ],
    },
    {
      name: 'Japanese “secret” button',
      char: '㊙️',
      variants: [
        { name: 'Japanese “secret” button', char: '㊙️', group: 'Symbols' },
      ],
    },
    { name: 'Japanese “open for business” button', char: '🈺', variants: [] },
    { name: 'Japanese “no vacancy” button', char: '🈵', variants: [] },
    { name: 'red circle', char: '🔴', variants: [] },
    { name: 'orange circle', char: '🟠', variants: [] },
    { name: 'yellow circle', char: '🟡', variants: [] },
    { name: 'green circle', char: '🟢', variants: [] },
    { name: 'blue circle', char: '🔵', variants: [] },
    { name: 'purple circle', char: '🟣', variants: [] },
    { name: 'brown circle', char: '🟤', variants: [] },
    { name: 'black circle', char: '⚫', variants: [] },
    { name: 'white circle', char: '⚪', variants: [] },
    { name: 'red square', char: '🟥', variants: [] },
    { name: 'orange square', char: '🟧', variants: [] },
    { name: 'yellow square', char: '🟨', variants: [] },
    { name: 'green square', char: '🟩', variants: [] },
    { name: 'blue square', char: '🟦', variants: [] },
    { name: 'purple square', char: '🟪', variants: [] },
    { name: 'brown square', char: '🟫', variants: [] },
    { name: 'black large square', char: '⬛', variants: [] },
    { name: 'white large square', char: '⬜', variants: [] },
    {
      name: 'black medium square',
      char: '◼️',
      variants: [{ name: 'black medium square', char: '◼️', group: 'Symbols' }],
    },
    {
      name: 'white medium square',
      char: '◻️',
      variants: [{ name: 'white medium square', char: '◻️', group: 'Symbols' }],
    },
    { name: 'black medium-small square', char: '◾', variants: [] },
    { name: 'white medium-small square', char: '◽', variants: [] },
    {
      name: 'black small square',
      char: '▪️',
      variants: [{ name: 'black small square', char: '▪️', group: 'Symbols' }],
    },
    {
      name: 'white small square',
      char: '▫️',
      variants: [{ name: 'white small square', char: '▫️', group: 'Symbols' }],
    },
    { name: 'large orange diamond', char: '🔶', variants: [] },
    { name: 'large blue diamond', char: '🔷', variants: [] },
    { name: 'small orange diamond', char: '🔸', variants: [] },
    { name: 'small blue diamond', char: '🔹', variants: [] },
    { name: 'red triangle pointed up', char: '🔺', variants: [] },
    { name: 'red triangle pointed down', char: '🔻', variants: [] },
    { name: 'diamond with a dot', char: '💠', variants: [] },
    { name: 'radio button', char: '🔘', variants: [] },
    { name: 'white square button', char: '🔳', variants: [] },
    { name: 'black square button', char: '🔲', variants: [] },
  ],
  Flags: [
    { name: 'chequered flag', char: '🏁', variants: [] },
    { name: 'triangular flag', char: '🚩', variants: [] },
    { name: 'crossed flags', char: '🎌', variants: [] },
    {
      name: 'black flag',
      char: '🏴',
      variants: [
        { name: 'pirate flag', char: '🏴\u200d☠️', group: 'Flags' },
        {
          name: 'flag: England',
          char: '🏴U000e0067U000e0062U000e0065U000e006eU000e0067U000e007f',
          group: 'Flags',
        },
        {
          name: 'flag: Scotland',
          char: '🏴U000e0067U000e0062U000e0073U000e0063U000e0074U000e007f',
          group: 'Flags',
        },
        {
          name: 'flag: Wales',
          char: '🏴U000e0067U000e0062U000e0077U000e006cU000e0073U000e007f',
          group: 'Flags',
        },
      ],
    },
    {
      name: 'white flag',
      char: '🏳️',
      variants: [
        { name: 'white flag', char: '🏳️', group: 'Flags' },
        { name: 'rainbow flag', char: '🏳️\u200d🌈', group: 'Flags' },
        { name: 'transgender flag', char: '🏳️\u200d⚧️', group: 'Flags' },
      ],
    },
  ],
  'Smileys & Emotion': [
    { name: 'grinning face', char: '😀', variants: [] },
    { name: 'grinning face with big eyes', char: '😃', variants: [] },
    { name: 'grinning face with smiling eyes', char: '😄', variants: [] },
    { name: 'beaming face with smiling eyes', char: '😁', variants: [] },
    { name: 'grinning squinting face', char: '😆', variants: [] },
    { name: 'grinning face with sweat', char: '😅', variants: [] },
    { name: 'rolling on the floor laughing', char: '🤣', variants: [] },
    { name: 'face with tears of joy', char: '😂', variants: [] },
    { name: 'slightly smiling face', char: '🙂', variants: [] },
    { name: 'upside-down face', char: '🙃', variants: [] },
    { name: 'winking face', char: '😉', variants: [] },
    { name: 'smiling face with smiling eyes', char: '😊', variants: [] },
    { name: 'smiling face with halo', char: '😇', variants: [] },
    { name: 'smiling face with hearts', char: '🥰', variants: [] },
    { name: 'smiling face with heart-eyes', char: '😍', variants: [] },
    { name: 'star-struck', char: '🤩', variants: [] },
    { name: 'face blowing a kiss', char: '😘', variants: [] },
    { name: 'kissing face', char: '😗', variants: [] },
    {
      name: 'smiling face',
      char: '☺️',
      variants: [
        { name: 'smiling face', char: '☺️', group: 'Smileys & Emotion' },
      ],
    },
    { name: 'kissing face with closed eyes', char: '😚', variants: [] },
    { name: 'kissing face with smiling eyes', char: '😙', variants: [] },
    { name: 'smiling face with tear', char: '🥲', variants: [] },
    { name: 'face savoring food', char: '😋', variants: [] },
    { name: 'face with tongue', char: '😛', variants: [] },
    { name: 'winking face with tongue', char: '😜', variants: [] },
    { name: 'zany face', char: '🤪', variants: [] },
    { name: 'squinting face with tongue', char: '😝', variants: [] },
    { name: 'money-mouth face', char: '🤑', variants: [] },
    { name: 'hugging face', char: '🤗', variants: [] },
    { name: 'face with hand over mouth', char: '🤭', variants: [] },
    { name: 'shushing face', char: '🤫', variants: [] },
    { name: 'thinking face', char: '🤔', variants: [] },
    { name: 'zipper-mouth face', char: '🤐', variants: [] },
    { name: 'face with raised eyebrow', char: '🤨', variants: [] },
    { name: 'neutral face', char: '😐', variants: [] },
    { name: 'expressionless face', char: '😑', variants: [] },
    {
      name: 'face without mouth',
      char: '😶',
      variants: [
        {
          name: 'face in clouds',
          char: '😶\u200d🌫️',
          group: 'Smileys & Emotion',
        },
      ],
    },
    { name: 'smirking face', char: '😏', variants: [] },
    { name: 'unamused face', char: '😒', variants: [] },
    { name: 'face with rolling eyes', char: '🙄', variants: [] },
    { name: 'grimacing face', char: '😬', variants: [] },
    { name: 'lying face', char: '🤥', variants: [] },
    { name: 'relieved face', char: '😌', variants: [] },
    { name: 'pensive face', char: '😔', variants: [] },
    { name: 'sleepy face', char: '😪', variants: [] },
    { name: 'drooling face', char: '🤤', variants: [] },
    { name: 'sleeping face', char: '😴', variants: [] },
    { name: 'face with medical mask', char: '😷', variants: [] },
    { name: 'face with thermometer', char: '🤒', variants: [] },
    { name: 'face with head-bandage', char: '🤕', variants: [] },
    { name: 'nauseated face', char: '🤢', variants: [] },
    { name: 'face vomiting', char: '🤮', variants: [] },
    { name: 'sneezing face', char: '🤧', variants: [] },
    { name: 'hot face', char: '🥵', variants: [] },
    { name: 'cold face', char: '🥶', variants: [] },
    { name: 'woozy face', char: '🥴', variants: [] },
    {
      name: 'knocked-out face',
      char: '😵',
      variants: [
        {
          name: 'face with spiral eyes',
          char: '😵\u200d💫',
          group: 'Smileys & Emotion',
        },
      ],
    },
    { name: 'exploding head', char: '🤯', variants: [] },
    { name: 'cowboy hat face', char: '🤠', variants: [] },
    { name: 'partying face', char: '🥳', variants: [] },
    { name: 'disguised face', char: '🥸', variants: [] },
    { name: 'smiling face with sunglasses', char: '😎', variants: [] },
    { name: 'nerd face', char: '🤓', variants: [] },
    { name: 'face with monocle', char: '🧐', variants: [] },
    { name: 'confused face', char: '😕', variants: [] },
    { name: 'worried face', char: '😟', variants: [] },
    { name: 'slightly frowning face', char: '🙁', variants: [] },
    {
      name: 'frowning face',
      char: '☹️',
      variants: [
        { name: 'frowning face', char: '☹️', group: 'Smileys & Emotion' },
      ],
    },
    {
      name: 'face with open mouth',
      char: '😮',
      variants: [
        {
          name: 'face exhaling',
          char: '😮\u200d💨',
          group: 'Smileys & Emotion',
        },
      ],
    },
    { name: 'hushed face', char: '😯', variants: [] },
    { name: 'astonished face', char: '😲', variants: [] },
    { name: 'flushed face', char: '😳', variants: [] },
    { name: 'pleading face', char: '🥺', variants: [] },
    { name: 'frowning face with open mouth', char: '😦', variants: [] },
    { name: 'anguished face', char: '😧', variants: [] },
    { name: 'fearful face', char: '😨', variants: [] },
    { name: 'anxious face with sweat', char: '😰', variants: [] },
    { name: 'sad but relieved face', char: '😥', variants: [] },
    { name: 'crying face', char: '😢', variants: [] },
    { name: 'loudly crying face', char: '😭', variants: [] },
    { name: 'face screaming in fear', char: '😱', variants: [] },
    { name: 'confounded face', char: '😖', variants: [] },
    { name: 'persevering face', char: '😣', variants: [] },
    { name: 'disappointed face', char: '😞', variants: [] },
    { name: 'downcast face with sweat', char: '😓', variants: [] },
    { name: 'weary face', char: '😩', variants: [] },
    { name: 'tired face', char: '😫', variants: [] },
    { name: 'yawning face', char: '🥱', variants: [] },
    { name: 'face with steam from nose', char: '😤', variants: [] },
    { name: 'pouting face', char: '😡', variants: [] },
    { name: 'angry face', char: '😠', variants: [] },
    { name: 'face with symbols on mouth', char: '🤬', variants: [] },
    { name: 'smiling face with horns', char: '😈', variants: [] },
    { name: 'angry face with horns', char: '👿', variants: [] },
    { name: 'skull', char: '💀', variants: [] },
    {
      name: 'skull and crossbones',
      char: '☠️',
      variants: [
        {
          name: 'skull and crossbones',
          char: '☠️',
          group: 'Smileys & Emotion',
        },
      ],
    },
    { name: 'pile of poo', char: '💩', variants: [] },
    { name: 'clown face', char: '🤡', variants: [] },
    { name: 'ogre', char: '👹', variants: [] },
    { name: 'goblin', char: '👺', variants: [] },
    { name: 'ghost', char: '👻', variants: [] },
    { name: 'alien', char: '👽', variants: [] },
    { name: 'alien monster', char: '👾', variants: [] },
    { name: 'robot', char: '🤖', variants: [] },
    { name: 'grinning cat', char: '😺', variants: [] },
    { name: 'grinning cat with smiling eyes', char: '😸', variants: [] },
    { name: 'cat with tears of joy', char: '😹', variants: [] },
    { name: 'smiling cat with heart-eyes', char: '😻', variants: [] },
    { name: 'cat with wry smile', char: '😼', variants: [] },
    { name: 'kissing cat', char: '😽', variants: [] },
    { name: 'weary cat', char: '🙀', variants: [] },
    { name: 'crying cat', char: '😿', variants: [] },
    { name: 'pouting cat', char: '😾', variants: [] },
    { name: 'see-no-evil monkey', char: '🙈', variants: [] },
    { name: 'hear-no-evil monkey', char: '🙉', variants: [] },
    { name: 'speak-no-evil monkey', char: '🙊', variants: [] },
    { name: 'kiss mark', char: '💋', variants: [] },
    { name: 'love letter', char: '💌', variants: [] },
    { name: 'heart with arrow', char: '💘', variants: [] },
    { name: 'heart with ribbon', char: '💝', variants: [] },
    { name: 'sparkling heart', char: '💖', variants: [] },
    { name: 'growing heart', char: '💗', variants: [] },
    { name: 'beating heart', char: '💓', variants: [] },
    { name: 'revolving hearts', char: '💞', variants: [] },
    { name: 'two hearts', char: '💕', variants: [] },
    { name: 'heart decoration', char: '💟', variants: [] },
    {
      name: 'heart exclamation',
      char: '❣️',
      variants: [
        { name: 'heart exclamation', char: '❣️', group: 'Smileys & Emotion' },
      ],
    },
    { name: 'broken heart', char: '💔', variants: [] },
    {
      name: 'red heart',
      char: '❤️',
      variants: [
        {
          name: 'heart on fire',
          char: '❤️\u200d🔥',
          group: 'Smileys & Emotion',
        },
        {
          name: 'mending heart',
          char: '❤️\u200d🩹',
          group: 'Smileys & Emotion',
        },
        { name: 'red heart', char: '❤️', group: 'Smileys & Emotion' },
      ],
    },
    { name: 'orange heart', char: '🧡', variants: [] },
    { name: 'yellow heart', char: '💛', variants: [] },
    { name: 'green heart', char: '💚', variants: [] },
    { name: 'blue heart', char: '💙', variants: [] },
    { name: 'purple heart', char: '💜', variants: [] },
    { name: 'brown heart', char: '🤎', variants: [] },
    { name: 'black heart', char: '🖤', variants: [] },
    { name: 'white heart', char: '🤍', variants: [] },
    { name: 'hundred points', char: '💯', variants: [] },
    { name: 'anger symbol', char: '💢', variants: [] },
    { name: 'collision', char: '💥', variants: [] },
    { name: 'dizzy', char: '💫', variants: [] },
    { name: 'sweat droplets', char: '💦', variants: [] },
    { name: 'dashing away', char: '💨', variants: [] },
    {
      name: 'hole',
      char: '🕳️',
      variants: [{ name: 'hole', char: '🕳️', group: 'Smileys & Emotion' }],
    },
    { name: 'bomb', char: '💣', variants: [] },
    { name: 'speech balloon', char: '💬', variants: [] },
    {
      name: 'left speech bubble',
      char: '🗨️',
      variants: [
        { name: 'left speech bubble', char: '🗨️', group: 'Smileys & Emotion' },
      ],
    },
    {
      name: 'right anger bubble',
      char: '🗯️',
      variants: [
        { name: 'right anger bubble', char: '🗯️', group: 'Smileys & Emotion' },
      ],
    },
    { name: 'thought balloon', char: '💭', variants: [] },
    { name: 'zzz', char: '💤', variants: [] },
  ],
  'Animals & Nature': [
    { name: 'monkey face', char: '🐵', variants: [] },
    { name: 'monkey', char: '🐒', variants: [] },
    { name: 'gorilla', char: '🦍', variants: [] },
    { name: 'orangutan', char: '🦧', variants: [] },
    { name: 'dog face', char: '🐶', variants: [] },
    {
      name: 'dog',
      char: '🐕',
      variants: [
        { name: 'service dog', char: '🐕\u200d🦺', group: 'Animals & Nature' },
      ],
    },
    { name: 'guide dog', char: '🦮', variants: [] },
    { name: 'poodle', char: '🐩', variants: [] },
    { name: 'wolf', char: '🐺', variants: [] },
    { name: 'fox', char: '🦊', variants: [] },
    { name: 'raccoon', char: '🦝', variants: [] },
    { name: 'cat face', char: '🐱', variants: [] },
    {
      name: 'cat',
      char: '🐈',
      variants: [
        { name: 'black cat', char: '🐈\u200d⬛', group: 'Animals & Nature' },
      ],
    },
    { name: 'lion', char: '🦁', variants: [] },
    { name: 'tiger face', char: '🐯', variants: [] },
    { name: 'tiger', char: '🐅', variants: [] },
    { name: 'leopard', char: '🐆', variants: [] },
    { name: 'horse face', char: '🐴', variants: [] },
    { name: 'horse', char: '🐎', variants: [] },
    { name: 'unicorn', char: '🦄', variants: [] },
    { name: 'zebra', char: '🦓', variants: [] },
    { name: 'deer', char: '🦌', variants: [] },
    { name: 'bison', char: '🦬', variants: [] },
    { name: 'cow face', char: '🐮', variants: [] },
    { name: 'ox', char: '🐂', variants: [] },
    { name: 'water buffalo', char: '🐃', variants: [] },
    { name: 'cow', char: '🐄', variants: [] },
    { name: 'pig face', char: '🐷', variants: [] },
    { name: 'pig', char: '🐖', variants: [] },
    { name: 'boar', char: '🐗', variants: [] },
    { name: 'pig nose', char: '🐽', variants: [] },
    { name: 'ram', char: '🐏', variants: [] },
    { name: 'ewe', char: '🐑', variants: [] },
    { name: 'goat', char: '🐐', variants: [] },
    { name: 'camel', char: '🐪', variants: [] },
    { name: 'two-hump camel', char: '🐫', variants: [] },
    { name: 'llama', char: '🦙', variants: [] },
    { name: 'giraffe', char: '🦒', variants: [] },
    { name: 'elephant', char: '🐘', variants: [] },
    { name: 'mammoth', char: '🦣', variants: [] },
    { name: 'rhinoceros', char: '🦏', variants: [] },
    { name: 'hippopotamus', char: '🦛', variants: [] },
    { name: 'mouse face', char: '🐭', variants: [] },
    { name: 'mouse', char: '🐁', variants: [] },
    { name: 'rat', char: '🐀', variants: [] },
    { name: 'hamster', char: '🐹', variants: [] },
    { name: 'rabbit face', char: '🐰', variants: [] },
    { name: 'rabbit', char: '🐇', variants: [] },
    {
      name: 'chipmunk',
      char: '🐿️',
      variants: [{ name: 'chipmunk', char: '🐿️', group: 'Animals & Nature' }],
    },
    { name: 'beaver', char: '🦫', variants: [] },
    { name: 'hedgehog', char: '🦔', variants: [] },
    { name: 'bat', char: '🦇', variants: [] },
    {
      name: 'bear',
      char: '🐻',
      variants: [
        { name: 'polar bear', char: '🐻\u200d❄️', group: 'Animals & Nature' },
      ],
    },
    { name: 'koala', char: '🐨', variants: [] },
    { name: 'panda', char: '🐼', variants: [] },
    { name: 'sloth', char: '🦥', variants: [] },
    { name: 'otter', char: '🦦', variants: [] },
    { name: 'skunk', char: '🦨', variants: [] },
    { name: 'kangaroo', char: '🦘', variants: [] },
    { name: 'badger', char: '🦡', variants: [] },
    { name: 'paw prints', char: '🐾', variants: [] },
    { name: 'turkey', char: '🦃', variants: [] },
    { name: 'chicken', char: '🐔', variants: [] },
    { name: 'rooster', char: '🐓', variants: [] },
    { name: 'hatching chick', char: '🐣', variants: [] },
    { name: 'baby chick', char: '🐤', variants: [] },
    { name: 'front-facing baby chick', char: '🐥', variants: [] },
    { name: 'bird', char: '🐦', variants: [] },
    { name: 'penguin', char: '🐧', variants: [] },
    {
      name: 'dove',
      char: '🕊️',
      variants: [{ name: 'dove', char: '🕊️', group: 'Animals & Nature' }],
    },
    { name: 'eagle', char: '🦅', variants: [] },
    { name: 'duck', char: '🦆', variants: [] },
    { name: 'swan', char: '🦢', variants: [] },
    { name: 'owl', char: '🦉', variants: [] },
    { name: 'dodo', char: '🦤', variants: [] },
    { name: 'feather', char: '🪶', variants: [] },
    { name: 'flamingo', char: '🦩', variants: [] },
    { name: 'peacock', char: '🦚', variants: [] },
    { name: 'parrot', char: '🦜', variants: [] },
    { name: 'frog', char: '🐸', variants: [] },
    { name: 'crocodile', char: '🐊', variants: [] },
    { name: 'turtle', char: '🐢', variants: [] },
    { name: 'lizard', char: '🦎', variants: [] },
    { name: 'snake', char: '🐍', variants: [] },
    { name: 'dragon face', char: '🐲', variants: [] },
    { name: 'dragon', char: '🐉', variants: [] },
    { name: 'sauropod', char: '🦕', variants: [] },
    { name: 'T-Rex', char: '🦖', variants: [] },
    { name: 'spouting whale', char: '🐳', variants: [] },
    { name: 'whale', char: '🐋', variants: [] },
    { name: 'dolphin', char: '🐬', variants: [] },
    { name: 'seal', char: '🦭', variants: [] },
    { name: 'fish', char: '🐟', variants: [] },
    { name: 'tropical fish', char: '🐠', variants: [] },
    { name: 'blowfish', char: '🐡', variants: [] },
    { name: 'shark', char: '🦈', variants: [] },
    { name: 'octopus', char: '🐙', variants: [] },
    { name: 'spiral shell', char: '🐚', variants: [] },
    { name: 'snail', char: '🐌', variants: [] },
    { name: 'butterfly', char: '🦋', variants: [] },
    { name: 'bug', char: '🐛', variants: [] },
    { name: 'ant', char: '🐜', variants: [] },
    { name: 'honeybee', char: '🐝', variants: [] },
    { name: 'beetle', char: '🪲', variants: [] },
    { name: 'lady beetle', char: '🐞', variants: [] },
    { name: 'cricket', char: '🦗', variants: [] },
    { name: 'cockroach', char: '🪳', variants: [] },
    {
      name: 'spider',
      char: '🕷️',
      variants: [{ name: 'spider', char: '🕷️', group: 'Animals & Nature' }],
    },
    {
      name: 'spider web',
      char: '🕸️',
      variants: [{ name: 'spider web', char: '🕸️', group: 'Animals & Nature' }],
    },
    { name: 'scorpion', char: '🦂', variants: [] },
    { name: 'mosquito', char: '🦟', variants: [] },
    { name: 'fly', char: '🪰', variants: [] },
    { name: 'worm', char: '🪱', variants: [] },
    { name: 'microbe', char: '🦠', variants: [] },
    { name: 'bouquet', char: '💐', variants: [] },
    { name: 'cherry blossom', char: '🌸', variants: [] },
    { name: 'white flower', char: '💮', variants: [] },
    {
      name: 'rosette',
      char: '🏵️',
      variants: [{ name: 'rosette', char: '🏵️', group: 'Animals & Nature' }],
    },
    { name: 'rose', char: '🌹', variants: [] },
    { name: 'wilted flower', char: '🥀', variants: [] },
    { name: 'hibiscus', char: '🌺', variants: [] },
    { name: 'sunflower', char: '🌻', variants: [] },
    { name: 'blossom', char: '🌼', variants: [] },
    { name: 'tulip', char: '🌷', variants: [] },
    { name: 'seedling', char: '🌱', variants: [] },
    { name: 'potted plant', char: '🪴', variants: [] },
    { name: 'evergreen tree', char: '🌲', variants: [] },
    { name: 'deciduous tree', char: '🌳', variants: [] },
    { name: 'palm tree', char: '🌴', variants: [] },
    { name: 'cactus', char: '🌵', variants: [] },
    { name: 'sheaf of rice', char: '🌾', variants: [] },
    { name: 'herb', char: '🌿', variants: [] },
    {
      name: 'shamrock',
      char: '☘️',
      variants: [{ name: 'shamrock', char: '☘️', group: 'Animals & Nature' }],
    },
    { name: 'four leaf clover', char: '🍀', variants: [] },
    { name: 'maple leaf', char: '🍁', variants: [] },
    { name: 'fallen leaf', char: '🍂', variants: [] },
    { name: 'leaf fluttering in wind', char: '🍃', variants: [] },
  ],
  Activities: [
    { name: 'jack-o-lantern', char: '🎃', variants: [] },
    { name: 'Christmas tree', char: '🎄', variants: [] },
    { name: 'fireworks', char: '🎆', variants: [] },
    { name: 'sparkler', char: '🎇', variants: [] },
    { name: 'firecracker', char: '🧨', variants: [] },
    { name: 'sparkles', char: '✨', variants: [] },
    { name: 'balloon', char: '🎈', variants: [] },
    { name: 'party popper', char: '🎉', variants: [] },
    { name: 'confetti ball', char: '🎊', variants: [] },
    { name: 'tanabata tree', char: '🎋', variants: [] },
    { name: 'pine decoration', char: '🎍', variants: [] },
    { name: 'Japanese dolls', char: '🎎', variants: [] },
    { name: 'carp streamer', char: '🎏', variants: [] },
    { name: 'wind chime', char: '🎐', variants: [] },
    { name: 'moon viewing ceremony', char: '🎑', variants: [] },
    { name: 'red envelope', char: '🧧', variants: [] },
    { name: 'ribbon', char: '🎀', variants: [] },
    { name: 'wrapped gift', char: '🎁', variants: [] },
    {
      name: 'reminder ribbon',
      char: '🎗️',
      variants: [{ name: 'reminder ribbon', char: '🎗️', group: 'Activities' }],
    },
    {
      name: 'admission tickets',
      char: '🎟️',
      variants: [
        { name: 'admission tickets', char: '🎟️', group: 'Activities' },
      ],
    },
    { name: 'ticket', char: '🎫', variants: [] },
    {
      name: 'military medal',
      char: '🎖️',
      variants: [{ name: 'military medal', char: '🎖️', group: 'Activities' }],
    },
    { name: 'trophy', char: '🏆', variants: [] },
    { name: 'sports medal', char: '🏅', variants: [] },
    { name: '1st place medal', char: '🥇', variants: [] },
    { name: '2nd place medal', char: '🥈', variants: [] },
    { name: '3rd place medal', char: '🥉', variants: [] },
    { name: 'soccer ball', char: '⚽', variants: [] },
    { name: 'baseball', char: '⚾', variants: [] },
    { name: 'softball', char: '🥎', variants: [] },
    { name: 'basketball', char: '🏀', variants: [] },
    { name: 'volleyball', char: '🏐', variants: [] },
    { name: 'american football', char: '🏈', variants: [] },
    { name: 'rugby football', char: '🏉', variants: [] },
    { name: 'tennis', char: '🎾', variants: [] },
    { name: 'flying disc', char: '🥏', variants: [] },
    { name: 'bowling', char: '🎳', variants: [] },
    { name: 'cricket game', char: '🏏', variants: [] },
    { name: 'field hockey', char: '🏑', variants: [] },
    { name: 'ice hockey', char: '🏒', variants: [] },
    { name: 'lacrosse', char: '🥍', variants: [] },
    { name: 'ping pong', char: '🏓', variants: [] },
    { name: 'badminton', char: '🏸', variants: [] },
    { name: 'boxing glove', char: '🥊', variants: [] },
    { name: 'martial arts uniform', char: '🥋', variants: [] },
    { name: 'goal net', char: '🥅', variants: [] },
    { name: 'flag in hole', char: '⛳', variants: [] },
    {
      name: 'ice skate',
      char: '⛸️',
      variants: [{ name: 'ice skate', char: '⛸️', group: 'Activities' }],
    },
    { name: 'fishing pole', char: '🎣', variants: [] },
    { name: 'diving mask', char: '🤿', variants: [] },
    { name: 'running shirt', char: '🎽', variants: [] },
    { name: 'skis', char: '🎿', variants: [] },
    { name: 'sled', char: '🛷', variants: [] },
    { name: 'curling stone', char: '🥌', variants: [] },
    { name: 'bullseye', char: '🎯', variants: [] },
    { name: 'yo-yo', char: '🪀', variants: [] },
    { name: 'kite', char: '🪁', variants: [] },
    { name: 'pool 8 ball', char: '🎱', variants: [] },
    { name: 'crystal ball', char: '🔮', variants: [] },
    { name: 'magic wand', char: '🪄', variants: [] },
    { name: 'nazar amulet', char: '🧿', variants: [] },
    { name: 'video game', char: '🎮', variants: [] },
    {
      name: 'joystick',
      char: '🕹️',
      variants: [{ name: 'joystick', char: '🕹️', group: 'Activities' }],
    },
    { name: 'slot machine', char: '🎰', variants: [] },
    { name: 'game die', char: '🎲', variants: [] },
    { name: 'puzzle piece', char: '🧩', variants: [] },
    { name: 'teddy bear', char: '🧸', variants: [] },
    { name: 'piñata', char: '🪅', variants: [] },
    { name: 'nesting dolls', char: '🪆', variants: [] },
    {
      name: 'spade suit',
      char: '♠️',
      variants: [{ name: 'spade suit', char: '♠️', group: 'Activities' }],
    },
    {
      name: 'heart suit',
      char: '♥️',
      variants: [{ name: 'heart suit', char: '♥️', group: 'Activities' }],
    },
    {
      name: 'diamond suit',
      char: '♦️',
      variants: [{ name: 'diamond suit', char: '♦️', group: 'Activities' }],
    },
    {
      name: 'club suit',
      char: '♣️',
      variants: [{ name: 'club suit', char: '♣️', group: 'Activities' }],
    },
    {
      name: 'chess pawn',
      char: '♟️',
      variants: [{ name: 'chess pawn', char: '♟️', group: 'Activities' }],
    },
    { name: 'joker', char: '🃏', variants: [] },
    { name: 'mahjong red dragon', char: '🀄', variants: [] },
    { name: 'flower playing cards', char: '🎴', variants: [] },
    { name: 'performing arts', char: '🎭', variants: [] },
    {
      name: 'framed picture',
      char: '🖼️',
      variants: [{ name: 'framed picture', char: '🖼️', group: 'Activities' }],
    },
    { name: 'artist palette', char: '🎨', variants: [] },
    { name: 'thread', char: '🧵', variants: [] },
    { name: 'sewing needle', char: '🪡', variants: [] },
    { name: 'yarn', char: '🧶', variants: [] },
    { name: 'knot', char: '🪢', variants: [] },
  ],
  Component: [
    { name: 'light skin tone', char: '🏻', variants: [] },
    { name: 'medium-light skin tone', char: '🏼', variants: [] },
    { name: 'medium skin tone', char: '🏽', variants: [] },
    { name: 'medium-dark skin tone', char: '🏾', variants: [] },
    { name: 'dark skin tone', char: '🏿', variants: [] },
    { name: 'red hair', char: '🦰', variants: [] },
    { name: 'curly hair', char: '🦱', variants: [] },
    { name: 'white hair', char: '🦳', variants: [] },
    { name: 'bald', char: '🦲', variants: [] },
  ],
  'Travel & Places': [
    { name: 'globe showing Europe-Africa', char: '🌍', variants: [] },
    { name: 'globe showing Americas', char: '🌎', variants: [] },
    { name: 'globe showing Asia-Australia', char: '🌏', variants: [] },
    { name: 'globe with meridians', char: '🌐', variants: [] },
    {
      name: 'world map',
      char: '🗺️',
      variants: [{ name: 'world map', char: '🗺️', group: 'Travel & Places' }],
    },
    { name: 'map of Japan', char: '🗾', variants: [] },
    { name: 'compass', char: '🧭', variants: [] },
    {
      name: 'snow-capped mountain',
      char: '🏔️',
      variants: [
        { name: 'snow-capped mountain', char: '🏔️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'mountain',
      char: '⛰️',
      variants: [{ name: 'mountain', char: '⛰️', group: 'Travel & Places' }],
    },
    { name: 'volcano', char: '🌋', variants: [] },
    { name: 'mount fuji', char: '🗻', variants: [] },
    {
      name: 'camping',
      char: '🏕️',
      variants: [{ name: 'camping', char: '🏕️', group: 'Travel & Places' }],
    },
    {
      name: 'beach with umbrella',
      char: '🏖️',
      variants: [
        { name: 'beach with umbrella', char: '🏖️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'desert',
      char: '🏜️',
      variants: [{ name: 'desert', char: '🏜️', group: 'Travel & Places' }],
    },
    {
      name: 'desert island',
      char: '🏝️',
      variants: [
        { name: 'desert island', char: '🏝️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'national park',
      char: '🏞️',
      variants: [
        { name: 'national park', char: '🏞️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'stadium',
      char: '🏟️',
      variants: [{ name: 'stadium', char: '🏟️', group: 'Travel & Places' }],
    },
    {
      name: 'classical building',
      char: '🏛️',
      variants: [
        { name: 'classical building', char: '🏛️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'building construction',
      char: '🏗️',
      variants: [
        { name: 'building construction', char: '🏗️', group: 'Travel & Places' },
      ],
    },
    { name: 'brick', char: '🧱', variants: [] },
    { name: 'rock', char: '🪨', variants: [] },
    { name: 'wood', char: '🪵', variants: [] },
    { name: 'hut', char: '🛖', variants: [] },
    {
      name: 'houses',
      char: '🏘️',
      variants: [{ name: 'houses', char: '🏘️', group: 'Travel & Places' }],
    },
    {
      name: 'derelict house',
      char: '🏚️',
      variants: [
        { name: 'derelict house', char: '🏚️', group: 'Travel & Places' },
      ],
    },
    { name: 'house', char: '🏠', variants: [] },
    { name: 'house with garden', char: '🏡', variants: [] },
    { name: 'office building', char: '🏢', variants: [] },
    { name: 'Japanese post office', char: '🏣', variants: [] },
    { name: 'post office', char: '🏤', variants: [] },
    { name: 'hospital', char: '🏥', variants: [] },
    { name: 'bank', char: '🏦', variants: [] },
    { name: 'hotel', char: '🏨', variants: [] },
    { name: 'love hotel', char: '🏩', variants: [] },
    { name: 'convenience store', char: '🏪', variants: [] },
    { name: 'school', char: '🏫', variants: [] },
    { name: 'department store', char: '🏬', variants: [] },
    { name: 'factory', char: '🏭', variants: [] },
    { name: 'Japanese castle', char: '🏯', variants: [] },
    { name: 'castle', char: '🏰', variants: [] },
    { name: 'wedding', char: '💒', variants: [] },
    { name: 'Tokyo tower', char: '🗼', variants: [] },
    { name: 'Statue of Liberty', char: '🗽', variants: [] },
    { name: 'church', char: '⛪', variants: [] },
    { name: 'mosque', char: '🕌', variants: [] },
    { name: 'hindu temple', char: '🛕', variants: [] },
    { name: 'synagogue', char: '🕍', variants: [] },
    {
      name: 'shinto shrine',
      char: '⛩️',
      variants: [
        { name: 'shinto shrine', char: '⛩️', group: 'Travel & Places' },
      ],
    },
    { name: 'kaaba', char: '🕋', variants: [] },
    { name: 'fountain', char: '⛲', variants: [] },
    { name: 'tent', char: '⛺', variants: [] },
    { name: 'foggy', char: '🌁', variants: [] },
    { name: 'night with stars', char: '🌃', variants: [] },
    {
      name: 'cityscape',
      char: '🏙️',
      variants: [{ name: 'cityscape', char: '🏙️', group: 'Travel & Places' }],
    },
    { name: 'sunrise over mountains', char: '🌄', variants: [] },
    { name: 'sunrise', char: '🌅', variants: [] },
    { name: 'cityscape at dusk', char: '🌆', variants: [] },
    { name: 'sunset', char: '🌇', variants: [] },
    { name: 'bridge at night', char: '🌉', variants: [] },
    {
      name: 'hot springs',
      char: '♨️',
      variants: [{ name: 'hot springs', char: '♨️', group: 'Travel & Places' }],
    },
    { name: 'carousel horse', char: '🎠', variants: [] },
    { name: 'ferris wheel', char: '🎡', variants: [] },
    { name: 'roller coaster', char: '🎢', variants: [] },
    { name: 'barber pole', char: '💈', variants: [] },
    { name: 'circus tent', char: '🎪', variants: [] },
    { name: 'locomotive', char: '🚂', variants: [] },
    { name: 'railway car', char: '🚃', variants: [] },
    { name: 'high-speed train', char: '🚄', variants: [] },
    { name: 'bullet train', char: '🚅', variants: [] },
    { name: 'train', char: '🚆', variants: [] },
    { name: 'metro', char: '🚇', variants: [] },
    { name: 'light rail', char: '🚈', variants: [] },
    { name: 'station', char: '🚉', variants: [] },
    { name: 'tram', char: '🚊', variants: [] },
    { name: 'monorail', char: '🚝', variants: [] },
    { name: 'mountain railway', char: '🚞', variants: [] },
    { name: 'tram car', char: '🚋', variants: [] },
    { name: 'bus', char: '🚌', variants: [] },
    { name: 'oncoming bus', char: '🚍', variants: [] },
    { name: 'trolleybus', char: '🚎', variants: [] },
    { name: 'minibus', char: '🚐', variants: [] },
    { name: 'ambulance', char: '🚑', variants: [] },
    { name: 'fire engine', char: '🚒', variants: [] },
    { name: 'police car', char: '🚓', variants: [] },
    { name: 'oncoming police car', char: '🚔', variants: [] },
    { name: 'taxi', char: '🚕', variants: [] },
    { name: 'oncoming taxi', char: '🚖', variants: [] },
    { name: 'automobile', char: '🚗', variants: [] },
    { name: 'oncoming automobile', char: '🚘', variants: [] },
    { name: 'sport utility vehicle', char: '🚙', variants: [] },
    { name: 'pickup truck', char: '🛻', variants: [] },
    { name: 'delivery truck', char: '🚚', variants: [] },
    { name: 'articulated lorry', char: '🚛', variants: [] },
    { name: 'tractor', char: '🚜', variants: [] },
    {
      name: 'racing car',
      char: '🏎️',
      variants: [{ name: 'racing car', char: '🏎️', group: 'Travel & Places' }],
    },
    {
      name: 'motorcycle',
      char: '🏍️',
      variants: [{ name: 'motorcycle', char: '🏍️', group: 'Travel & Places' }],
    },
    { name: 'motor scooter', char: '🛵', variants: [] },
    { name: 'manual wheelchair', char: '🦽', variants: [] },
    { name: 'motorized wheelchair', char: '🦼', variants: [] },
    { name: 'auto rickshaw', char: '🛺', variants: [] },
    { name: 'bicycle', char: '🚲', variants: [] },
    { name: 'kick scooter', char: '🛴', variants: [] },
    { name: 'skateboard', char: '🛹', variants: [] },
    { name: 'roller skate', char: '🛼', variants: [] },
    { name: 'bus stop', char: '🚏', variants: [] },
    {
      name: 'motorway',
      char: '🛣️',
      variants: [{ name: 'motorway', char: '🛣️', group: 'Travel & Places' }],
    },
    {
      name: 'railway track',
      char: '🛤️',
      variants: [
        { name: 'railway track', char: '🛤️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'oil drum',
      char: '🛢️',
      variants: [{ name: 'oil drum', char: '🛢️', group: 'Travel & Places' }],
    },
    { name: 'fuel pump', char: '⛽', variants: [] },
    { name: 'police car light', char: '🚨', variants: [] },
    { name: 'horizontal traffic light', char: '🚥', variants: [] },
    { name: 'vertical traffic light', char: '🚦', variants: [] },
    { name: 'stop sign', char: '🛑', variants: [] },
    { name: 'construction', char: '🚧', variants: [] },
    { name: 'anchor', char: '⚓', variants: [] },
    { name: 'sailboat', char: '⛵', variants: [] },
    { name: 'canoe', char: '🛶', variants: [] },
    { name: 'speedboat', char: '🚤', variants: [] },
    {
      name: 'passenger ship',
      char: '🛳️',
      variants: [
        { name: 'passenger ship', char: '🛳️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'ferry',
      char: '⛴️',
      variants: [{ name: 'ferry', char: '⛴️', group: 'Travel & Places' }],
    },
    {
      name: 'motor boat',
      char: '🛥️',
      variants: [{ name: 'motor boat', char: '🛥️', group: 'Travel & Places' }],
    },
    { name: 'ship', char: '🚢', variants: [] },
    {
      name: 'airplane',
      char: '✈️',
      variants: [{ name: 'airplane', char: '✈️', group: 'Travel & Places' }],
    },
    {
      name: 'small airplane',
      char: '🛩️',
      variants: [
        { name: 'small airplane', char: '🛩️', group: 'Travel & Places' },
      ],
    },
    { name: 'airplane departure', char: '🛫', variants: [] },
    { name: 'airplane arrival', char: '🛬', variants: [] },
    { name: 'parachute', char: '🪂', variants: [] },
    { name: 'seat', char: '💺', variants: [] },
    { name: 'helicopter', char: '🚁', variants: [] },
    { name: 'suspension railway', char: '🚟', variants: [] },
    { name: 'mountain cableway', char: '🚠', variants: [] },
    { name: 'aerial tramway', char: '🚡', variants: [] },
    {
      name: 'satellite',
      char: '🛰️',
      variants: [{ name: 'satellite', char: '🛰️', group: 'Travel & Places' }],
    },
    { name: 'rocket', char: '🚀', variants: [] },
    { name: 'flying saucer', char: '🛸', variants: [] },
    {
      name: 'bellhop bell',
      char: '🛎️',
      variants: [
        { name: 'bellhop bell', char: '🛎️', group: 'Travel & Places' },
      ],
    },
    { name: 'luggage', char: '🧳', variants: [] },
    { name: 'hourglass done', char: '⌛', variants: [] },
    { name: 'hourglass not done', char: '⏳', variants: [] },
    { name: 'watch', char: '⌚', variants: [] },
    { name: 'alarm clock', char: '⏰', variants: [] },
    {
      name: 'stopwatch',
      char: '⏱️',
      variants: [{ name: 'stopwatch', char: '⏱️', group: 'Travel & Places' }],
    },
    {
      name: 'timer clock',
      char: '⏲️',
      variants: [{ name: 'timer clock', char: '⏲️', group: 'Travel & Places' }],
    },
    {
      name: 'mantelpiece clock',
      char: '🕰️',
      variants: [
        { name: 'mantelpiece clock', char: '🕰️', group: 'Travel & Places' },
      ],
    },
    { name: 'twelve o’clock', char: '🕛', variants: [] },
    { name: 'twelve-thirty', char: '🕧', variants: [] },
    { name: 'one o’clock', char: '🕐', variants: [] },
    { name: 'one-thirty', char: '🕜', variants: [] },
    { name: 'two o’clock', char: '🕑', variants: [] },
    { name: 'two-thirty', char: '🕝', variants: [] },
    { name: 'three o’clock', char: '🕒', variants: [] },
    { name: 'three-thirty', char: '🕞', variants: [] },
    { name: 'four o’clock', char: '🕓', variants: [] },
    { name: 'four-thirty', char: '🕟', variants: [] },
    { name: 'five o’clock', char: '🕔', variants: [] },
    { name: 'five-thirty', char: '🕠', variants: [] },
    { name: 'six o’clock', char: '🕕', variants: [] },
    { name: 'six-thirty', char: '🕡', variants: [] },
    { name: 'seven o’clock', char: '🕖', variants: [] },
    { name: 'seven-thirty', char: '🕢', variants: [] },
    { name: 'eight o’clock', char: '🕗', variants: [] },
    { name: 'eight-thirty', char: '🕣', variants: [] },
    { name: 'nine o’clock', char: '🕘', variants: [] },
    { name: 'nine-thirty', char: '🕤', variants: [] },
    { name: 'ten o’clock', char: '🕙', variants: [] },
    { name: 'ten-thirty', char: '🕥', variants: [] },
    { name: 'eleven o’clock', char: '🕚', variants: [] },
    { name: 'eleven-thirty', char: '🕦', variants: [] },
    { name: 'new moon', char: '🌑', variants: [] },
    { name: 'waxing crescent moon', char: '🌒', variants: [] },
    { name: 'first quarter moon', char: '🌓', variants: [] },
    { name: 'waxing gibbous moon', char: '🌔', variants: [] },
    { name: 'full moon', char: '🌕', variants: [] },
    { name: 'waning gibbous moon', char: '🌖', variants: [] },
    { name: 'last quarter moon', char: '🌗', variants: [] },
    { name: 'waning crescent moon', char: '🌘', variants: [] },
    { name: 'crescent moon', char: '🌙', variants: [] },
    { name: 'new moon face', char: '🌚', variants: [] },
    { name: 'first quarter moon face', char: '🌛', variants: [] },
    { name: 'last quarter moon face', char: '🌜', variants: [] },
    {
      name: 'thermometer',
      char: '🌡️',
      variants: [{ name: 'thermometer', char: '🌡️', group: 'Travel & Places' }],
    },
    {
      name: 'sun',
      char: '☀️',
      variants: [{ name: 'sun', char: '☀️', group: 'Travel & Places' }],
    },
    { name: 'full moon face', char: '🌝', variants: [] },
    { name: 'sun with face', char: '🌞', variants: [] },
    { name: 'ringed planet', char: '🪐', variants: [] },
    { name: 'star', char: '⭐', variants: [] },
    { name: 'glowing star', char: '🌟', variants: [] },
    { name: 'shooting star', char: '🌠', variants: [] },
    { name: 'milky way', char: '🌌', variants: [] },
    {
      name: 'cloud',
      char: '☁️',
      variants: [{ name: 'cloud', char: '☁️', group: 'Travel & Places' }],
    },
    { name: 'sun behind cloud', char: '⛅', variants: [] },
    {
      name: 'cloud with lightning and rain',
      char: '⛈️',
      variants: [
        {
          name: 'cloud with lightning and rain',
          char: '⛈️',
          group: 'Travel & Places',
        },
      ],
    },
    {
      name: 'sun behind small cloud',
      char: '🌤️',
      variants: [
        {
          name: 'sun behind small cloud',
          char: '🌤️',
          group: 'Travel & Places',
        },
      ],
    },
    {
      name: 'sun behind large cloud',
      char: '🌥️',
      variants: [
        {
          name: 'sun behind large cloud',
          char: '🌥️',
          group: 'Travel & Places',
        },
      ],
    },
    {
      name: 'sun behind rain cloud',
      char: '🌦️',
      variants: [
        { name: 'sun behind rain cloud', char: '🌦️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'cloud with rain',
      char: '🌧️',
      variants: [
        { name: 'cloud with rain', char: '🌧️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'cloud with snow',
      char: '🌨️',
      variants: [
        { name: 'cloud with snow', char: '🌨️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'cloud with lightning',
      char: '🌩️',
      variants: [
        { name: 'cloud with lightning', char: '🌩️', group: 'Travel & Places' },
      ],
    },
    {
      name: 'tornado',
      char: '🌪️',
      variants: [{ name: 'tornado', char: '🌪️', group: 'Travel & Places' }],
    },
    {
      name: 'fog',
      char: '🌫️',
      variants: [{ name: 'fog', char: '🌫️', group: 'Travel & Places' }],
    },
    {
      name: 'wind face',
      char: '🌬️',
      variants: [{ name: 'wind face', char: '🌬️', group: 'Travel & Places' }],
    },
    { name: 'cyclone', char: '🌀', variants: [] },
    { name: 'rainbow', char: '🌈', variants: [] },
    { name: 'closed umbrella', char: '🌂', variants: [] },
    {
      name: 'umbrella',
      char: '☂️',
      variants: [{ name: 'umbrella', char: '☂️', group: 'Travel & Places' }],
    },
    { name: 'umbrella with rain drops', char: '☔', variants: [] },
    {
      name: 'umbrella on ground',
      char: '⛱️',
      variants: [
        { name: 'umbrella on ground', char: '⛱️', group: 'Travel & Places' },
      ],
    },
    { name: 'high voltage', char: '⚡', variants: [] },
    {
      name: 'snowflake',
      char: '❄️',
      variants: [{ name: 'snowflake', char: '❄️', group: 'Travel & Places' }],
    },
    {
      name: 'snowman',
      char: '☃️',
      variants: [{ name: 'snowman', char: '☃️', group: 'Travel & Places' }],
    },
    { name: 'snowman without snow', char: '⛄', variants: [] },
    {
      name: 'comet',
      char: '☄️',
      variants: [{ name: 'comet', char: '☄️', group: 'Travel & Places' }],
    },
    { name: 'fire', char: '🔥', variants: [] },
    { name: 'droplet', char: '💧', variants: [] },
    { name: 'water wave', char: '🌊', variants: [] },
  ],
}
