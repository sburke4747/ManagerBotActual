const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

var prefix = "!"
client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Pong!');
  } else
  if (msg.content.startsWith(prefix + 'doc')) {
    msg.reply('Here is the availibility doc. \n https://docs.google.com/spreadsheets/d/1L-NbThq8f_7ti05nLHWE-J4e2-dn_oDW0jTXOkQ-az4/edit#gid=0');
  } else
  if (msg.content.startsWith(prefix + 'kitten')) {
    msg.reply('Meow https://www.youtube.com/watch?v=YPv9yKC76hE');
  }
});

client.login('Mjg4Mzg2MjQ2MDQzMTA3MzI5.C59L5w.VSes3CkmGFoptLyCMD0lZ5ciXyE');
// possible replace this with a protected variable instead of actual token