const SelectMenuInteraction = require('../Internals/SelectMenuInteraction.js');
async function SelectMenuInteractionEvent(context, lib, func) {
    const Event = new SelectMenuInteraction(context, lib);
    return func(Event);
}

module.exports = SelectMenuInteractionEvent;