const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    let cpuLol;
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "İstatistik Menüsü",
              icon_url: "http://www.resimrehberi.com/files/file/cicekli-araba.jpg"
            },
            title: "Ping Durumu :",
            description: `**${Math.round(client.ping)}**`,
            fields: [
      {
                name: "Sunucu Sayısı :",
                value: `**${client.guilds.size.toLocaleString()}**`
              },     
			{
                name: "Kullanıcı Sayısı :",
                value: `**${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`
              },
			{
                name: "Bellek Kullanımı :",
                value: `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB** / **32 GB**`
              },
			{
                name: "CPU :",
                value: `**${os.cpus().map(i => `${i.model}`)[0]}**`
              },
			{
                name: "Sahibim VE Yardımcım :",
                value: `**Sahibim: ! ƑƇ ★ Ahmet#1703**`
              },
			{
                name: "Node.JS Sürümü :",
                value: `**${process.version}**`
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "http://www.resimrehberi.com/files/file/cicekli-araba.jpg",
              text: "© Hayatın Anlamı"
            }
          }
        });  
  }};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i', 'istatik', 'botbilgi', 'bb'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Tüm komutları gösterir.',
  usage: 'istatistik'
};