const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "http://oi51.tinypic.com/2jg4gg6.jpg"
            },
                "thumbnail": {
                 "url": "http://oi51.tinypic.com/2jg4gg6.jpg"
            },
            title: "",
            description: "[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=511170773193588736&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/M2T4FGK)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Stronger "
            }
          }
        });
        message.react(":pencil:")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};