const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["ava", "av"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
        let mention = client.user.cache?.get(args[0]) || message.mentions.users.first() || message.author
        let member = message.mentions.users.first() || message.guild.members.cache?.get(args[0]) || message.member;
        const e = new EmbedBuilder()
        .setColor(member.roles.cache.sort((a, b) => b.position - a.position).first().color)
        .setImage(mention.displayAvatarURL({dynamic:true, size:256, extension:'png'}))
        message.reply({content:`${message.author}`, embed: [e]})
    },
}