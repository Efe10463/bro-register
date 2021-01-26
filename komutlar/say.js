const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let sesli = 0
    for (const [id, voiceChannel] of voiceChannels) sesli += voiceChannel.members.size;
  
var tagdakiler = 0;
  let tag = ayarlar.tag 
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    } 
  })

    const embedsay = new Discord.RichEmbed()
        .setTitle(`${message.guild.name} `)
        .setDescription(` 
          • **__Sunucudaki üye sayısı__:** \`${message.guild.memberCount}\`
          • **__Çevrimiçi üye sayısı__:** \`${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`
          • **__Seslideki üye sayısı__:** \`${sesli}\`
          • **__Tagdaki üye sayısı__:** \`${tagdakiler}\``)
        .setImage(`https://images-ext-1.discordapp.net/external/Yhm7VIYd-vu1BeS2_molr_0xdOHDsNbrhPsggIAXxW0/https/media.discordapp.net/attachments/794920195927441411/794937697659387944/fire.gif`)
        .setColor(`#000000`)
    message.channel.send(embedsay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['total'],
    permLevel: 0
};

exports.help = {
    name: 'say'
  
}