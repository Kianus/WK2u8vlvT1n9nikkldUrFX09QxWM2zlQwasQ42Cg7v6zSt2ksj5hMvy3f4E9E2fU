const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you dont have permission to ban someone!");
        return;
    };

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) {
        message.channel.send("The given player hasn't joined the R8ge server!");
        return;
    };
    if (user.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You can't ban an admin!");
        return;
    };
    var reason = arguments.join(" ").slice(22);
    if (!reason) {
        message.channel.send("Give a reason to ban this person!");
        return;
    };

    var banChannel = message.guild.channels.find(`name`, `adminlogs`);

    var BanEmbed = new discord.RichEmbed()
        .setDescription(user + "Has been banned")
        .setColor("#ff0000")
        .addField("Banned by:", message.author)
        .addField("Reason:", reason)
    banChannel.send(BanEmbed);

    let senduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));
    message.guild.member(user).ban("You have been banned for: " + reason);
};

module.exports.help = {
    name: "ban"
};