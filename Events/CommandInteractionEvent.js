const CommandInteraction = require('../Internals/CommandInteraction.js');
async function CommandInteractionEvent(context, lib, func) {
    const Event = new CommandInteraction(context, lib);
    return func(Event);
}

module.exports = CommandInteractionEvent;