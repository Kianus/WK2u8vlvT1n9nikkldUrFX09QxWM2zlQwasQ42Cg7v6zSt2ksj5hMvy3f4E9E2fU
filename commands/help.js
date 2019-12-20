const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var help = new discord.RichEmbed()
        .setDescription("Help", "Here is an list of all commands:")
        .setColor("#064f4e")
        .addField("!gammacase", "Open an gamma case!")
        .addField("!skin <weapon> <skin> <state>", "Get an link to the market(Works for now only on AWP, AK47, DesertEagle, Famas, USPS or CZ")
        .addField("!patchnotes", "Get an url to the Official CS;GO patchnotes!")
        .addField("!idea", "Send us your idea for R8ge!")
    message.author.send(help)
    console.log()
};

module.exports.help = {
    name: "help"
};