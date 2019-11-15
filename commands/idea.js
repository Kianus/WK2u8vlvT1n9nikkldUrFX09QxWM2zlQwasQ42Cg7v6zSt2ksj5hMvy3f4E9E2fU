const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var idee = arguments.join(` `);
    if (!idee) return message.channel.send("Use: !idea <Idea>!");

    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Idea")
        .setColor("#00b3ff")
        .addField("By: ", message.author)
        .addField("Idea: ", idee)

    var ideeChannel = message.guild.channels.find("name", "ideas")

    if (!ideeChannel) return message.channel.send("Cant find idea message channel! Report this to an admin!");
    return ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react(`👎`)
        embedMessage.react(`👍`)
    });

};

module.exports.help = {
    name: "idea"
};