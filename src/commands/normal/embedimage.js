const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "embedimage",
    aliases: ["emimg", "sayimg"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
      
      const em = new EmbedBuilder().setImage(args[0]).setColor(args[1] || "#B0FC38");

      message.channel.send({ embeds: [em] })
      
    }
 };
