const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Billi? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Billi Music','https://cdn.discordapp.com/attachments/889793792041975828/890070746150363166/dj-old.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Billi to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=868379276913811467&permissions=137476042048&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};