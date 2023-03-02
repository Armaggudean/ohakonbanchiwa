const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
      message.reply(`**\`\`\`asciidoc\nLatency :: ${Math.round(new Date() - message.createTimestamp)}ms \nWebsocket :: ${client.ws.ping}ms\n\`\`\`**`)
    }
 };
