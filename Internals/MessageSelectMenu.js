class MessageSelectMenu {
  constructor() {
    this.placeholder = '';
    this.custom_id = '';
    this.options = [];
    this.type = 3;
  }

  addOptions(options) {
    this.options = options;
    return this;
  }

  setCustomId(id) {
    this.custom_id = id;
    return this;
  }

  setDisabled(boolean) {
    this.disabled = boolean;
    return this;
  }

  setMaxValues(maxValues) {
    this.max_values = maxValues;
    return this;
  }

  setMinValues(minValues) {
    this.min_values = minValues;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }
}

module.exports = MessageSelectMenu;
