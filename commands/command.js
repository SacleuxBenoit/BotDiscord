module.exports = class command{

    static parse (message){
        if(this.match(message)){
            this.action(message)
            return true
        }else{
            return false
        }
    }

    static match(message){
        return message.content.startsWith('!google')
    }
    static action (message){
       let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }
    
}