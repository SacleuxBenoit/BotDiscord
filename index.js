const Discord = require('discord.js');
const bot = new Discord.Client()
const Google = require('./commands/google');
const Ping = require('./commands/ping')
const Play = require('./commands/play')


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
                       Google.parse(message)
})
bot.login("Njc2NDg5ODM5MDQxODM5MTcx.XkGdPg.SsyOeVTSMOVSxpW55E5LskW-QBk")