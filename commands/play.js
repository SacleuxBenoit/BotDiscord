const Command = require('./command');
const YoutubStream = require('youtube-audio-stream')
module.exports = class Play extends Command{

    static match(message){
        return message.content.startsWith('!play')
    }
    static action (message){
    let voiceChannel = message.guild.channels
        .filter(function (channel){return channel.type=='voice'})
        .first()
        voiceChannel
        .join()
        .then(function(connection){
            connection.playFile('mettre le lien du fichier audio ici')
        })
    }
}