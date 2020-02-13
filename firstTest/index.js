const Discord = require('discord.js');
const {config} = require("dotenv");
const bot = new Discord.Client()
const Google = require('./commands/google');
const Ping = require('./commands/ping');
const Play = require('./commands/play');
const Hello = require('./commands/Hello');
const everyCommand = require('./commands/everyCommand');

config({
  path: __dirname + "/.env"
});

bot.on('ready', function(){
 //   bot.user.setAvatar('path avatar ici').catch(console.error)
    bot.user.setActivity('with nothing for now').catch(console.error)
})

bot.on('guildMemberAdd', function(member){
    member.createDM().then(function(channel){
      return  channel.send('Bienvenu sur le channel ' + member.displayName)
    }).catch(console.error)
})

bot.on('message', function(message){
    let commandUsed = Ping.parse(message) ||
                      Play.parse(message) ||
                      Hello.parse(message) ||
                      everyCommand.parse(message) ||

                       Google.parse(message)
})
bot.login(process.env.Token);