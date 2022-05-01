const ButtonInteraction = require('../Internals/ButtonInteraction.js');
async function ButtonInteractionEvent(context, lib, func) {
  const Event = new ButtonInteraction(context, lib);
  return func(Event);
}

module.exports = ButtonInteractionEvent;
