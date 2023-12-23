require('dotenv').config()
const axios = require('axios');
const { Hercai } = require('hercai');
const { messageLink } = require('discord.js');
const {
    URL,
    URLSearchParams
} = require('url');
const ch = "1090823940148035694";

const herc = new Hercai();

const bedakherosin = async (msg) => {
    if(msg.channel.id !== ch) return;
    if(msg.content.length < 2 || (!isNaN(ch) && ch != msg.channel.id)) return;
    msg.channel.sendTyping();
    try{
        herc.question({
            model: 'v3-beta',
            content: msg.content
        }).then(r => {
            msg.reply(r.reply)
        })
    } catch (e) {
        console.log(e.stack)
    }
}

module.exports = {
    bedakherosin
};
