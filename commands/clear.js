const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Sorry, you dont have permission to clear the channel!");
        return;
    };

    var aantal = arguments[0]
    if(!aantal){
        return message.channel.bulkDelete(30);
    }
    return message.channel.bulkDelete(aantal);

};

module.exports.help = {
    name: "clear"
};