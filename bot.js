const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./config.json');

const fs = require('fs');


client.commands = new Discord.Collection();


// Carregar Eventos
fs.readdir('./events/', (err, files) =>{ 

    if (err) console.error(err);
    
    let jsFile = files.filter(f => f.endsWith('.js'));
    if (jsFile.length <= 0) {
        console.log('[Log] Nenhum evento foi encontrado');
    }

    console.log('[Log] Eventos Carregados: ' + jsFile.length);

    files.forEach(f => {

        const eventName = f.split('.')[0];
        const eventFile = require(`./events/${f}`);

        client.on(eventName, eventFile.bind(null, client));

    });

});

// Carregar Comandos

let cNum = 0;
const folders = fs.readdirSync('./commands/');

folders.forEach(folder => {    

    //console.log(`[Log] Carregando Comando: ${props.help.name}`);    

    if (folder.endsWith('.js')) return;

    const cmdFile = fs.readdirSync(`./commands/${folder}/`);

    

    cmdFile.forEach(f => {

        if (!f.endsWith('.js')) return;        

        const props = require(`./commands/${folder}/${f}`);    

        if (props.init) props.init(client);

        client.commands.set(props.help.name, props);
        if (props.help.aliases){
            props.alias = true;
            props.help.aliases.forEach(alias => client.commands.set(alias, props));
        }

    });

});

console.log('[Log] Categorias Carregadas: ' + folders);

client.login(token);