const discord = require("discord.js");
const superAgent = require("superagent")


module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var gegevens;
    gegevens = await superAgent
    .get("https://blog.counter-strike.net/index.php/category/updates/!")

    var embed = new discord.RichEmbed()
    .setTitle("Latest patchnotes!")
    .setColor("#03fcec")
    .addField("https://blog.counter-strike.net/index.php/category/updates/!")

    return message.channel.send(embed)

}

module.exports.help = {
    name: "patchnotes"
};