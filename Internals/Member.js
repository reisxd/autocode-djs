const User = require('./User');
class Member {
    constructor(context, lib) {
        this.context = context;
        this.lib = lib;
        this.avatar = context.member.user.avatar;
        this.displayName = context.member.nick || context.member.user.username;
        this.joinedAt = new Date(context.member.joined_at);
        this.user = new User(context.member.user, lib);
    }

    //Functions
    avatarURL(args) {
        if (args?.dynamic) {
            return `https://cdn.discordapp.com/avatars/${this.context.member.user.id}/avatars/${this.context.member.user.avatar}.gif`;
        } else return `https://cdn.discordapp.com/avatars/${this.context.member.user.id}/${this.context.member.user.avatar}.png`;
    }

    async ban(args) {
        await this.lib.discord.guilds['@0.2.4'].bans.create({
            user_id: this.context.member.user.id,
            guild_id: this.context.guild_id,
            delete_message_days: args.days || 0,
            reason: args.reason || ''
        });
    }

    async disableCommunicationUntil(time, reason) {
        const date = new Date(time).toISOString();
        await this.lib.discord.guilds['@0.2.4'].members.timeout.update({
            user_id: this.context.member.user.id,
            guild_id: this.context.guild_id,
            communication_disabled_until: date,
            reason: reason || ''
        });
    }

    displayAvatarURL = this.avatarURL;

    async edit(args) {
        await lib.discord.guilds['@0.2.4'].members.update({
            user_id: this.context.member.user.id,
            guild_id: this.context.guild_id,
            nick: args.nick || null,
            roles: args.roles || null
        });
    }

    async setNickname(nickname) {
        await this.lib.discord.guilds['@0.2.4'].members.update({
            user_id: this.context.member.user.id,
            guild_id: this.context.guild_id,
            nick: nickname
        });
    }

    timeout = this.disableCommunicationUntil;
}

module.exports = Member;