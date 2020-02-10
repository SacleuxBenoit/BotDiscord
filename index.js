const Discord = require('discord.js');
const Token = require('./tokenBot');
const bot = new Discord.Client()

bot.on('message', function(message){
    if (message.content === '!ping'){
        message.channel.send('pong')
    }
})
bot.login("Njc2NDg5ODM5MDQxODM5MTcx.XkGdPg.SsyOeVTSMOVSxpW55E5LskW-QBk")