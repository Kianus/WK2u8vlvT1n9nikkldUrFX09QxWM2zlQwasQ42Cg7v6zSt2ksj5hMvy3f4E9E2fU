const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    const coins = JSON.parse(fs.readFileSync("./coins.JSON", "utf8"));

        var coinEmbed = new discord.RichEmbed()
        .setDescription(message.author +"'s Coins'")
        .setColor("#FFD700")
        .addField("Your coins:", coins[message.author.id].coins)
    
    return message.channel.send(coinEmbed);
};

module.exports.help = {
    name: "coins"
};