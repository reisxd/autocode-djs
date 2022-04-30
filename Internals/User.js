class User {
    constructor(context, lib) {
        this.context = context;
        this.lib = lib;
        this.avatar = context.avatar;
        this.defaultAvatarURL = this.avatarURL();
        this.discriminator = context.discriminator;
        this.id = context.id;
        this.tag = `${context.username}#${context.discriminator}`;
        this.username = context.username;
    }

    //Functions
    avatarURL(args) {
        console.log(this)
        if (args?.dynamic) {
            return `https://cdn.discordapp.com/avatars/${this.id}/avatars/${this.avatar}.gif`;
        } else return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;
    }
}

module.exports = User;