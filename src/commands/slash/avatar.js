const { EmbedBuilder, PermissionsBitField, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Displays a user's avatar.")
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user to get the avatar of.')
        .setRequired(false),
    ),
  run: async (client, interaction) => {
    const member = interaction.option.getUser('user') || interaction.user;

    let avatar = member.displayAvatarURL({dynamic:true, size:4096, extension:'png'});

    let cols = member.displayHexColor;

    const em = new EmbedBuilder()
    .setTitle(`${member.user.tag} Avatar`)
    .setImage(avatar)
    .setColor(cols);

    interaction.reply({ embeds: [em] })
  }
}
