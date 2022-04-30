const User = require('./User.js');
const Member = require('./Member.js');

class SelectMenuInteraction {
    constructor(context, lib) {
        this.context = context.params.event;
        this.lib = lib;
        this.applicationId = context.params.event.application_id;
        this.channelId = context.params.event.channel_id;
        this.guildId = context.params.event.guild_id;
        this.customId = context.params.event.data.name;
        this.member = new Member(context.params.event, this.lib);
        this.user = new User(context.params.event.member.user, this.lib);
        this.values = context.params.event.data.values;
    }

    //Functions

    async reply(args) {
        if (typeof args !== 'object') return new Error('args must be an object (Refer to discord.js documentation)');
        let response = {
            token: this.context.token,
            content: args.content,
            response_type: 'CHANNEL_MESSAGE_WITH_SOURCE'
        }
        if (args.embeds) response.embeds = args.embeds;
        if (args.components) response.components = args.components;
        if (args.ephemeral) return await this.lib.discord.interactions['@1.0.1'].responses.ephemeral.create(response);
        await this.lib.discord.interactions['@1.0.1'].responses.create(response);
    }

    async deferReply() {
        await this.lib.discord.interactions['@1.0.1'].responses.create({
            token: this.context.token,
            response_type: 'DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE'
        });
    }

    async editReply(args) {
        if (typeof args !== 'object') return new Error('args must be an object (Refer to discord.js documentation)');
        let response = {
            token: this.context.token,
            content: args.content
        }
        if (args.embeds) response.embeds = args.embeds;
        if (args.components) response.components = args.components;

        await this.lib.discord.interactions['@1.0.1'].responses.update(response);
    }

    async followUp(args) {
        if (typeof args !== 'object') return new Error('args must be an object (Refer to discord.js documentation)');
        let followUp = {
            token: this.context.token,
            content: args.content
          }
          if (args.embeds) followUp.embeds = args.embeds;
          if (args.components) followUp.components = args.components;
          if (args.ephemeral) return await this.lib.discord.interactions['@1.0.1'].followups.ephemeral.create(followUp);
          await this.lib.discord.interactions['@1.0.1'].followups.create(followUp);
    }

    async deleteReply() {
        await this.lib.discord.interactions['@1.0.1'].responses.destroy({
            token: this.context.token
        });
    }
    
}
module.exports = SelectMenuInteraction;