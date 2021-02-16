const Discord = require('discord.js');
 
module.exports = {
    /**
    * 
    * @param {Discord.Client} client 
    * @param {Discord.Message} msg 
    * @param {Array} args 
    */
    execute(client, msg, args){
        
    }
},
 
module.exports.help = {
    name: 'kick',
    description: 'Expulsa alguem do servidor',
    category: 'Moderacao',
    guildOnly: true
}