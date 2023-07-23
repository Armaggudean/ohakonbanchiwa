require('dotenv').config();
const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const config = require("./src/config.js");
const { readdirSync } = require("fs")
const moment = require("moment");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

let token = process.env.token;

client.commands = new Collection()
client.slashcommands = new Collection()
client.commandaliases = new Collection()
client.util = require('./util')

const rest = new REST({ version: '10' }).setToken(token);

const log = x => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${x}`) };

//command-handler
const commands = []
readdirSync('./src/commands/normal').forEach(async file => {
  const command = await require(`./src/commands/normal/${file}`);
  if(command) {
    client.commands.set(command.name, command)
    commands.push(command.name, command);
    if(command.aliases && Array.isArray(command.aliases)) {
       command.aliases.forEach(alias => {
        client.commandaliases.set(alias, command.name)  
})
}}})

//slash-command-handler
const slashcommands = [];
readdirSync('./src/commands/slash').forEach(async file => {
  const command = await require(`./src/commands/slash/${file}`);
  slashcommands.push(command.data.toJSON());
  client.slashcommands.set(command.data.name, command);
})

client.on("ready", async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: slashcommands },
            );
        } catch (error) {
            console.error(error);
        }
    log(`${client.user.username} Aktif!`);
})

//event-handler
readdirSync('./src/events').forEach(async file => {
	const event = await require(`./src/events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
})

const {ask} = require('./util.js');

client.on("messageCreate", msg => {

  if(msg.author.bot) return;
  if(msg.guild) {
    if(msg.content.startsWith(`<@${msg.client.user.id}>`) || msg.guild.channels.cache.get('1090823940148035694')) {
      client.util.handleTalk(msg);
    }
  }
})

//nodejs-events
process.on("unhandledRejection", e => { 
   console.log(e)
 }) 
process.on("uncaughtException", e => { 
   console.log(e)
 })  
process.on("uncaughtExceptionMonitor", e => { 
   console.log(e)
 })
//

client.login(token)

const express = require('express');
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(5901, () => {
  console.log("Your app on port 69 sus");
});

/**
 *    aternos
 */
const aternos = require('./src/worker/aternos.js');
const Gamedig = require('gamedig');

async function getGamedig(id) {
  try {
      let host;
      if (!id || id[0] === '#') {
          host = await aternos.getHostname(id);
      }
      else {
          host = `${id}.aternos.me`;
      }
      return await Gamedig.query({ type: 'minecraft', host });
  }
  catch (error) {
      return { error: error.message };
  }
}

client.once('messageCreate', async (msg) => {
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
  if(!msg.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0 ) return;

  switch(args) {
    case "start":
      aternos.start(args.id, args.wait)
      .then(msg.reply("starting"))
      .catch(console.error)
      break;
    case "stop":
      break;
  }
})