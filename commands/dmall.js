const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "You dont have permissions to use that command."
    );
  const { RichEmbed } = require("discord.js");
  let undelivered = 0;
  let messagee = args.join(" ");

  if (!messagee)
    return message.channel.send("please give me message for dm all");
  else {
    for (let i = 0; i < members.length; i++) {
      // Using an array and a for loop rather than
      const member = members[i]; // Collection.forEach() due to the fact that
      await member
        .send(messagee) // the latter will move onto the proceeding
        .catch(() => undelivered++); // code before waiting for the promises to
    } // fulfill. https://stackoverflow.com/a/37576787

    message.channel
      .send(`Messages sent. ${undelivered} members couldn't receive it.`)
      .catch(console.error);
  }
};
module.exports.help = {
    name: "dmall",
    description: "dm all people",
    usage: "Dm all",
    type: "Moderation"
}