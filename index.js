// Discord
const Discord = require('discord.js');
const client = new Discord.Client();

//.env
require('dotenv').config();

//Prefijo
let prefix = process.env.PREFIX || "!";

// Ready
client.on('ready', ()  => {

	console.log(client.user.tag, 'se ha iniciado correctamente');

});

// Message
client.on('message', message => {

	if(message.content.startsWith(prefix + "ping")){
		message.channel.send("Pong!");
	};

});

// Login
client.login(process.env.TOKEN);