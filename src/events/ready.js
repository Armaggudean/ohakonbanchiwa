const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    console.log(`Logged as ${client.user.tag}`);
    client.user.setActivity('instagram: @asakinime', { type: ActivityType.Listening });
}};
