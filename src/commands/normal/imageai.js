const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { Hercai } = require('hercai');

const herc = new Hercai();

module.exports = {
    name: "imageai",
    aliases: ["drawimage"],
    cooldown: 5000,//1 sec = 1000 ms / 0 = no cd.
    run: async (client, message, args) => {
        const salamcuy = args.join(' ');
        
        herc.drawImage({
            model: 'v2',
            prompt: salamcuy
        }).then(r => {
            message.reply(r.url)
        })
    }
 };