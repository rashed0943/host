const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      "You dont have permissions to use that command."
    );
let e = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Help Menu")
  .addField("COMMANDS",".ban <mention> <reason>p")
  .setFooter(`${bot.user.username} || a bot made by シгครђєͣ๔ͫ ت#3457`, bot.user.displayAvatarURL);

  message.channel.send(e)
}