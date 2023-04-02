const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["s"],
    cooldown: 0,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {

      message.reply(`${args.join(' ')}`)


    }
 };
