const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    // if you want to improve command: https://discordjs.guide/slash-commands/advanced-creation.html
    run: async (client, interaction) => {
      interaction.reply(`**\`\`\`asciidoc\nLatency :: ${Math.round(new Date() - interaction.createTimestamp)}ms \nWebsocket :: ${client.ping.ws}ms\n\`\`\`**`)
    }
 };
