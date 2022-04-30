class MessageButton {
    constructor() {
        this.style = 1;
        this.label = '';
        this.disabled = false;
        this.type = 2;
    }

    setCustomId(id) {
        this.custom_id = id;
        return this;
    }

    setDisabled(boolean) {
        this.disabled = boolean;
        return this;
    }

    setEmoji(emoji) {
        //todo: check if emoji is unicode or discord emoji and if its animated
        this.emoji = {
            name: emoji,
            id: null
        }
        return this;
    }

    setLabel(label) {
        this.label = label;
        return this;
    }

    setStyle(style) {
        if (typeof style === 'number') this.style = style;
        switch(style) {
            case 'PRIMARY': { this.style = 1; break; }
            case 'SECONDARY': { this.style = 2; break; }
            case 'SUCCESS': { this.style = 3; break; }
            case 'DANGER': { this.style = 4; break; }
            case 'LINK': { this.style = 5; break; }
        }
        return this;
    }

    setURL(url) {
        this.type = 5;
        this.url = url;
        return this;
    }
}

module.exports = MessageButton;