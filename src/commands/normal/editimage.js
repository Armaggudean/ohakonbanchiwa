const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "editimage",
    aliases: ["edimg", "editimg"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
      
      const em = new EmbedBuilder().setImage(args[1]).setColor(args[2] || "#B0FC38");

      message.channel.edit(`${args[0]}`, { embeds: [em] })
      
    }
 };
