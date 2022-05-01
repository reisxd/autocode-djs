class CommandInteractionOptionResolver {
  constructor(data) {
    this.data = data;
  }

  get(name, required) {
    for (let option of this.data.options) {
      if (option.name === name) {
        return option.value;
      }
    }

    if (required) {
      throw new Error(`Option ${name} is required`);
    }

    return null;
  }

  getBoolean(name, required) {
    const value = this.get(name, required);

    if (value === null) {
      return false;
    }

    return value;
  }

  // In discord.js, this returns ?GuildChannel or ?ThreadChannel or ?APIChannel
  // But here, we return the channel id, but we should one of the above.
  // The bad thing is, we have to make a request to the API to get the channel
  // Which can get the bot ratelimited, which is what I don't want.

  getChannel(name, required) {
    const value = this.get(name, required);

    if (value === null) {
      return null;
    }

    return value;
  }

  // Don't really mind these, adding much more code for now isn't worth it.
  getNumber = this.getChannel;
  getRole = this.getChannel;
  getString = this.get;
  getUser = this.getChannel;
  getMember = this.getChannel;
  getSubcommand(required) {
    for (let option of this.data.options) {
      if (option.type === 1) {
        return option.name;
      }
    }

    if (required) {
      throw new Error(`Subcommand is required`);
    }

    return null;
  }
}

module.exports = CommandInteractionOptionResolver;
