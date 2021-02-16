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
    name: 'elo',
    description: 'Mostra o Elo no League of Legends',
    category: 'League of Legends',
    guildOnly: true
}