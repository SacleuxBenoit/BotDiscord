module.exports = Class Google{

    match(message){
        return message.content.startsWith('!google')
    }
    action (message){
        args = message.content.split(' ')
        args.shift()
        message.reply('https://www.google.fr' + args.join('%20'))
    }
    
}