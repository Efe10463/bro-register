const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {
  let yetkili = message.author
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
var embed = new Discord.RichEmbed()
.setTitle(`Kayıt Bilgileri`)
.setColor(`#000000`)

.setDescription(`

• **__Yetkili__:** ${yetkili}  

• **__Toplam :__**  \`${toplam}\`  

• **__Kız :__**  \`${kız}\`  

• **__Erkek :__**  \`${erkek}\`  



`)
.setThumbnail(yetkili.avatarURL)
.setImage('https://media.discordapp.net/attachments/747833277473095700/799354250911285269/krmz_cizgi.gif')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtlarım'],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};