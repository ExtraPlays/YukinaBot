const Discord = require('discord.js');

/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} msg 
 */
module.exports = async (client, msg) =>{

    const prefix = "!";

    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    
    if (!cmd) return;
    if (cmd.help.guildOnly && msg.channel instanceof Discord.DMChannel) return msg.reply('Esse comando nao pode ser usado na DM!');


    cmd.execute(client, msg, args);
    
    console.log('[Log] Comando Executado - Guild: ' + msg.guild.id);    

}