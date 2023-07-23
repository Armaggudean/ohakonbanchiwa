const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("")
    .setDescription(""),
    // if you want to improve command go to: https://discordjs.guide/slash-commands/advanced-creation.html
    run: async (client, interaction) => {

    }
 };
