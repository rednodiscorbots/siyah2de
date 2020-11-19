const Discord = require('discord.js');

var hd = [
    "https://www.youtube.com/channel/UCCkuYCY4EW4lo7QsfBNoLiQ",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( " Youtube Kanalımız: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtubekanal',
  description: '.',
  usage: 'youtubekanal'
};