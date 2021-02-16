const Discord = require('discord.js');
 
module.exports = {
    /**
    * 
    * @param {Discord.Client} client 
    * @param {Discord.Message} msg 
    * @param {Array} args 
    */
    execute(client, msg, args){
        
        msg.reply('Soco na Mente');

    }
},
 
module.exports.help = {
    name: 'slap',
    description: 'Da um belo tapa em alguem.',
    category: 'fun',
    guildOnly: true
}