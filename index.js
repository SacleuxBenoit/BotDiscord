const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on('ready', function(){
 //   bot.user.setAvatar('path avatar ici').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === '!ping'){
        message.channel.send('pong')
    }
})
bot.login("Njc2NDg5ODM5MDQxODM5MTcx.XkGdPg.SsyOeVTSMOVSxpW55E5LskW-QBk")