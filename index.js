const discord = require("discord.js");
const botConfig = require("./botConfig.json")
const fs = require("fs");
const mysql = require("mysql");
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

    bot.user.setActivity("A lot of games to add!", { type: "WATCHING" })





});


bot.on("message", async message => {
    //const coins = JSON.parse(fs.readFileSync("./coins.JSON", "utf8"));


    if(message.author.bot) return

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
    var con = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
    con.connect(err => {
        if(err){
            console.log(err);
        }
    });

    var hetid = message.author.id

    con.query(`SELECT * FROM data WHERE idUser = '${hetid}'`, (err, rows, fields) =>{
        if(err){
            console.log(err);
        }
        if(rows < 1){
            con.query(`INSERT INTO data (idUser, coins) VALUES ("${hetid}", "1")`)
        }else{
                var aantal = rows[0].coins
            con.query(`UPDATE data SET coins = ${aantal + 1} WHERE idUser = '${hetid}'`)

        }
    })

});



bot.login(process.env.token);
