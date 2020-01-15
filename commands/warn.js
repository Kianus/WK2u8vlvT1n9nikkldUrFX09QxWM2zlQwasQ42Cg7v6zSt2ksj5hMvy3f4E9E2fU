const discord = require("discord.js");
const database = require("../database.json");
const mysql = require("mysql");


module.exports.run = async (bot, message, arguments) => {
    if(message.author.bot) return;

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry but you dont have permission to perform this command!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if(!user) return message.channel.send("Sorry we couldn't find that person!");

    if(user.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry but you can't warn an admin!");

    var reason = arguments.join(" ").slice(22);

    if(!reason) return message.channel.send("Please give a reason to wanr this person.");

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
    con.query(`SELECT * FROM data WHERE idUser = '${user.id}'`, (err, rows, fields) =>{
        if(err){
            console.log(err);
        }
        if(rows < 1){
            con.query(`INSERT INTO data (idUser, warnings) VALUES ("${user.id}", "1")`)
            var aantal = 1
            const newwarn = new discord.RichEmbed()
                .setDescription(user + " Has been warned!")
                .setColor("#ff968f")
                .addField("Warned user:", user)
                .addField("Warned by:", message.author)
                .addField("Reason:", reason)
                .addField("Count of warnings:", aantal);
            var warnChannel = message.guild.channels.find(`name`, "botlogs")
            if(!warnChannel) return message.channel.send("Coulnd't find botlogs channel please report to an admin!")
            warnChannel.send(newwarn)
            return;
        }else{
                var aantal = rows[0].warnings
            con.query(`UPDATE data SET warnings = ${aantal + 1} WHERE idUser = '${user.id}'`)
            var newaantal = aantal + 1;
            const warnembed = new discord.RichEmbed()
                .setDescription(user + " Has been warned!")
                .setColor("#ff968f")
                .addField("Warned user:", user)
                .addField("Warned by:", message.author)
                .addField("Reason:", reason)
                .addField("Count of warnings:", newaantal);
            var warnChannel = message.guild.channels.find(`name`, "botlogs")
            if(!warnChannel) return message.channel.send("Coulnd't find botlogs channel please report to an admin!")
            warnChannel.send(warnembed)
            if(newaantal === 2) return message.channel.send(user + " You can have 1 more warning! be careful or you will get banned!")
            if(newaantal === 3){
                var BanEmbed = new discord.RichEmbed()
            .setDescription(user + "Has been banned")
            .setColor("#ff0000")
            .addField("Banned by:", message.author)
            .addField("Reason:", "Too many warnings")
            warnChannel.send(BanEmbed);
            message.guild.member(user).ban("You have been banned for: " + reason);
            }
            return;
        }
    })

};


module.exports.help = {
    name: "warn"
};