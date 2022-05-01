# Autocode Discord.js "Support"

This module allows you to use Discord.js code! Well... sort of.
This module doesn't have all of the Discord.js API because of Autocode limitations. (You can check what are available by console logging the event.)

# Usage

Currently, `CommandInteraction`, `ButtonInteraction` and `SelectMenuInteraction` are only supported.

```js
const { CommandInteractionEvent } = require('autocode-djs');

await CommandInteractionEvent(context, lib, async (interaction) => {
  await interaction.reply({ content: 'Hello, world!' });
});
```

# NOTE

You'll have to use await for every single function, I don't know how ill fix this currently.
