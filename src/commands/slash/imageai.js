const { Hercai } = require('hercai');
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const herc = new Hercai();

module.exports = {
    data: new SlashCommandBuilder()
      .setName("imageai")
      .setDescription("draw image using hercai")
      .addStringOption(s => 
        s.setName('Request')
        .setRequired(true)),
    run: async (client, interaction, herc) => {
        const masukbang = interaction.options.getString('Request')
        herc.drawImage({
            model: 'v2',
            prompt: masukbang
        }).then(r => {
            interaction.reply(r.url)
        })
      }
   };
  