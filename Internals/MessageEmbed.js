class MessageEmbed {
  constructor() {
    this.type = 'rich';
    this.fields = [];
  }

  addField(name, value, inline) {
    this.fields.push({
      name: name,
      value: value,
      inline: inline
    });
    return this;
  }

  addFields(fields) {
    fields.forEach((field) =>
      this.addField(field.name, field.value, field.inline)
    );
    return this;
  }

  setAuthor(args) {
    this.author = {
      name: args.name,
      icon_url: args.iconURL,
      url: args.url
    };
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setFooter(args) {
    this.footer = {
      text: args.text,
      icon_url: args.iconURL
    };
    return this;
  }

  setImage(url) {
    this.image = {
      url: url
    };
    return this;
  }

  setTimestamp(timestamp) {
    if (!timestamp) this.timestamp = new Date().toISOString();
    else if (typeof timestamp === 'number')
      this.timestamp = new Date(timestamp).toISOString();
    else if (typeof timestamp === 'object')
      this.timestamp = timestamp.toISOString();
    else this.timestamp = timestamp;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setURL(url) {
    this.url = url;
    return this;
  }

  setThumbnail(url) {
    this.thumbnail = {
      url: url
    };
    return this;
  }
}

module.exports = MessageEmbed;
