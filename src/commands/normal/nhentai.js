const { EmbedBuilder, PermissionsBitField, ButtonBuilder, messageLink, ButtonStyle } = require("discord.js");
const axios = require('axios');

module.exports = {
    name: "nhentai",
    aliases: ["hget"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {

        if(args[0].length !== 6 || !isNaN(args[0])) message.reply('masukin kode yg bener ngentot');
        if(args[0].length === 6 || isNaN(args[0])) {
            const datalink = `https://skizo.tech/api/nhentai?code=${args[0]}&apikey=confutatis3000`;

            const response = await axios.get(datalink);
            const { data } = response;
            try{
                let emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(data.title.english)
                .setURL(data.download)
                .setImage(data.cover)
                .setDescription(`**CLICK TITLE TO DOWNLOAD**\nparodies: ${data.parodies}\ntags: ${data.tags}`)
                .setFooter({text: 'by plumjam3000'});
                message.reply({ embeds: [emb] })
            } catch(e){
                console.log(e)
            }
        }

    }
 };
