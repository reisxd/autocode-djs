class MessageActionRow {
    constructor() {
       this.type = 1;
       this.components = [];
    }

    addComponents(...args) {
        args.forEach(component => this.components.push(component));
        return this;
    }
}

module.exports = MessageActionRow;