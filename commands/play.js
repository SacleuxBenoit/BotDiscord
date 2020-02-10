const Command = require('./command');
const YoutubStream = require('ytdl-core')
const ffmpeg = require("ffmpeg")
module.exports = class Play extends Command{

    static match(message){
        return message.content.startsWith('!play')
    }
    static action (message){
    let voiceChannel = message.guild.channels
        .filter(function (channel){return channel.type==='voice'})
        .first()
        let args = message.content.split(' ')
        voiceChannel
        .join()
        .then(function(connection){       
                let stream = YoutubStream(args[1])
                stream.on('error',function(){
                    message.reply("je n'ai pas réussi à lire cette vidéo ;(")
                    connection.disconnect()
                })
                connection.playStream(stream).on('end',function(){
                    connection.disconnect()
                })
            

        })
    }
}