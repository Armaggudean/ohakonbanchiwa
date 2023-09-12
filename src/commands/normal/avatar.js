const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["ava", "av"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
        const target = (await message.guild.resolveMember(args[0])) || message.member;
        const response = target.user.displayAvatarURL();
        await message.reply(response);
    },
}
