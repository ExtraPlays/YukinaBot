const Discord = require('discord.js');

module.exports = {
    /**
    * 
    * @param {Discord.Client} client 
    * @param {Discord.Message} msg 
    * @param {Array} args 
    */
    execute(client, msg, args){

        msg.reply('oi');

    }
}

module.exports.help = {
    name: 'kiss',
    description: 'De um beijinho em alguem.',
    category: 'fun',
    guildOnly: true        
}

