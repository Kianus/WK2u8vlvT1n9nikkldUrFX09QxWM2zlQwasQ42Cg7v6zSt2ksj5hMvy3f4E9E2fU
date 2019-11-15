const discord = require("discord.js");
const botConfig = require("./botconfig.json")

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lenght <= 0) {
        console.log("Kon geen commands vinden!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`)
        console.log(`${f} is geladen!`)

        bot.commands.set(fileGet.help.name, fileGet);

    });

});


var ezword = ["ez"];



bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("Counter-Strike: Global Offensive", { type: "PLAYING" })





});


bot.on("message", async message => {

    

    if (message.channel.type == "dm") return message.channel.send("I can't reply to dm's!")

    

    var prefix = botConfig.prefix;

    var messageArray = message.content.toLowerCase().split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));
    if (commands) message.delete(500);
    if (commands) commands.run(bot, message, arguments);
    if (message.author.bot) return;
    if (message.content.includes("ez")) {
        var ruser = message.guild.members.random(1);
        message.channel.send("for " + ruser + " " + ruser + "  " + ruser + " " + ruser + "! Putted upper belt! Putted upper beld!")
        return;
    };

});



bot.login(process.env.TOKENKEY);