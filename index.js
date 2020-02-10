const Discord = require('discord.js');
const bot = new Discord.Client()
const Google = require('./commands/google');

bot.on('ready', function(){
 //   bot.user.setAvatar('path avatar ici').catch(console.error)
    bot.user.setActivity('its a test').catch(console.error)
})

bot.on('guildMemberAdd', function(member){
    member.createDM().then(function(channel){
      return  channel.send('Bienvenu sur le channel ' + member.displayName)
    }).catch(console.error)
})

bot.on('message', function(message){
    if(Google.match(message)){
      return  Google.action(message)
    }
    if (message.content === '!ping'){
        message.channel.send('pong')
    }
})
bot.login("Njc2NDg5ODM5MDQxODM5MTcx.XkGdPg.SsyOeVTSMOVSxpW55E5LskW-QBk")