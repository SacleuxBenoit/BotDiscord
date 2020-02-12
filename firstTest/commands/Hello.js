const Command = require('./command')
module.exports = class Hello extends Command{

    static match(message){
        return message.content.startsWith('!hello')
    }
    static action (message){
        message.reply('Hola')
    }
}