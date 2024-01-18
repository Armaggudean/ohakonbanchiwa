
require('dotenv').config();
const { default: axios } = require('axios');
const { EmbedBuilder, PermissionsBitField, AttachmentBuilder } = require("discord.js");

module.exports = {
    name: "imageai",
    aliases: ["drawimage"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
        const salamcuy = args.join('+');
        const datalink = `https://skizo.tech/api/generatimg?prompt=${salamcuy}&apikey=${process.env.skikey}`;
        message.channel.sendTyping();
        try{
            var axsos = await axios.get(datalink, {
                responseType: 'arraybuffer'
            })

            const { data } = axsos;

            message.reply({
                content: 'nih resultnya mek',
                files: [data]
            })
        } catch(e){
            console.log(e)
            message.reply('ada error ngabs')
        }
    }
 };
