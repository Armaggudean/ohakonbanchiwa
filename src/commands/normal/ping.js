const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
      message.reply(`**\`\`\`asciidoc\nLatency :: ${new Date - message.createdTimestamp}ms \nWebsocket :: ${client.ws.ping}ms\n\`\`\`**`)
    }
 };
