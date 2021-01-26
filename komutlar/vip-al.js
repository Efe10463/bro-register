const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let abone = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!abone) return message.channel.send('**Vip alacağın kişiyi etiketlemelisin!**')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.removeRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(`Vip Rolü Başarıyla Alındı!`)
  .setColor(`#000000`)
  .setDescription(`• **__Yetkili__:** ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-al'],
  permLevel: 0
};

exports.help = {
  name: 'vipal'
};
