const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.JSON", "utf8"));

module.exports.run = async (bot, message, arguments) => {

    if (message.author.bot) return;

    //!warn <user> <reason>

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you dont have permission to warn someone!");
        return;
    };

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) {
        message.channel.send("The given player hasn't joined the R8ge server!");
        return;
    };

    if (user.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You can't warn an admin!");
        return;
    };
    var reason = arguments.join(" ").slice(22);

    if (!reason) {
        message.channel.send("Give a reason to warn this person!");
        return;
    };

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)

    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warning")
        .setColor("#064f4e")
        .addField("Number of warnings:", warns[user.id].warns)
        .addField("Warned user:", user)
        .addField("Warned by:", message.author)
        .addField("Reason: ", reason)

    var warnChannel = message.guild.channels.find(`name`, `adminlogs`);
    if (!warnChannel) {
        message.channel.send("Cant find the adminlogs channel!");
        return;
    };

    warnChannel.send(warnEmbed);

    if (warns[user.id].warns == 2) {

        var WaarschuwingWarnEmbed = new discord.RichEmbed()
            .setDescription("Warning " + user + "!")
            .setColor("#064f4e")
            .addField("WARNING: You can have one more warning before you get banned!");

        message.channel.send(WaarschuwingWarnEmbed);
    } else if (warns[user.id].warns == 3) {

        var WarnBanEmbed = new discord.RichEmbed()
            .setDescription(user + " has been banned!")
            .setColor("#ff0000")
            .addField(user, "has been banned cause of to many warnings!")

        warnChannel.send(WarnBanEmbed);

        message.guild.member(user).ban("You have been warned to many times!")
    }
};

module.exports.help = {
    name: "warn"
};