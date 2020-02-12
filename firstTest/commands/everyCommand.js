const Command = require('./command')

module.exports = class everyCommand extends Command{

    static match(message){
        return message.content.startsWith('!commande')
    }
    static action (message){
        message.reply('Les commandes dispo sont : !ping, !hello !commande .Si jamais vous avez des idées en tête merci de contacer @tøtør')
    }
}