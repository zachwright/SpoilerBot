// Run dotenv
require('dotenv').config();

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TRIGGER_WORDS = ['fuck'];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    TRIGGER_WORDS.map((word) => {
        // if (msg.content.indexOf('||') == 0 && msg.content.indexOf('||') == -1) {
        //     console.log('it is spoilered already');
        // }
        if (msg.content.includes(word)) {
            // msg.content
            console.log('FOUND FUCK');
            
            
            // msg.reply(`||${msg.content}||`);
            // console.log(msg.content.replaceAll(word, `||${word}||`));
            msg.reply(msg.content.replaceAll(word, `||CENSORED||`));
        }
    })
});

// client.on('message', (message) => {
//     // Update the content of a message
//     message.edit('This is my new content!')
//     .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
//     .catch(console.error);
// })

// Update the content of a message
// message.edit('This is my new content!')
//   .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
//   .catch(console.error);