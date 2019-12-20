const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;
    if (!message.author.hasPermission("ADMINISTRATOR")){
        return;
    }
    bot.user.setActivity(arguments, { type: "3" });

};

module.exports.help = {
    name: "status"
};