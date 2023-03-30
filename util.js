const axios = require('axios');
const { messageLink } = require('discord.js');
const {
    URL,
    URLSearchParams
} = require('url');
const mainURL = new URL(process.env.url);
const urlOptions = {
    bid: process.env.bid,
    key: process.env.key,
    uid: null,
    msg: null
};
const ch = "1090823940148035694";

const handleTalk = async (msg) => {
  if (msg.channel.id !== "1090823940148035694") return;
    msg.content = msg.content.replace(/^<@!?[0-9]{1,20}> ?/i, '');
    if (msg.content.length < 2 || (!isNaN(ch) && ch != msg.channel.id)) return;
    msg.channel.sendTyping();
    urlOptions.uid = msg.author.id;
    urlOptions.msg = msg.content;
    mainURL.search = new URLSearchParams(urlOptions).toString();
    try {
        let reply = await axios.get(mainURL);
        console.log(reply)
        if (reply) {
          const { data } = reply;
            reply = data;
            msg.reply({
                content: reply.cnt,
                allowedMentions: {
                    repliedUser: false
                }
            })
        }
    } catch (e) {
        console.log(e.stack);
    }
};

module.exports = {
    handleTalk
};
