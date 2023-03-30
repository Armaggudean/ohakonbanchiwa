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
    const mention = interaction.option.getMember('user');

    const member = mention ?? interaction.author;


    let avatar = member.displayAvatarURL({dynamic:true, size:4096, extension:'png'});

    let cols = member.displayHexColor;

    const em = new EmbedBuilder()
    .setTitle(`${member.user.tag} Avatar`)
    .setImage(avatar)
    .setColor(cols);

    interaction.reply({ embeds: [em] })
  }
}