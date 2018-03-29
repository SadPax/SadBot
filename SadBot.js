const Discord = require('discord.js');
const sadbot = new Discord.Client();

sadbot.login('NDI4Njg0MDg2MjE1ODM1NjQ4.DZ518Q.0kQ4pGLtzXiYLlsYUP-ZDB3sG6k');

sadbot.on('message',message => { 
if (message.content.startsWith('=ping')){
    message.channel.send('Pong!');
}

    if (message.content.startsWith('=cat')){
        message.channel.send('http://prntscr.com/iy6u2p');
    }

    if (message.content.startsWith('=naomediga')){
        message.channel.send('http://prntscr.com/iy6wg6');
    }
});

//THIS MUST BE THIS WAY
sadbot.login(process.env.BOT_TOKEN)
