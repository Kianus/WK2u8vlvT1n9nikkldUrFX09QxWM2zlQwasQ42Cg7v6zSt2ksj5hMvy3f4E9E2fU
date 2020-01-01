const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var Owner = "521276954981302291";

message.guild.members.forEach( (member) => {
        if(!member.roles.has(Owner)) {
                            var message = new discord.RichEmbed()
                            .setTitle("WARNING")
                            .setColor("#ff1100")
                            .addField("Hello " + member + ",", "Please select the games you play in our settings tab! Or we need to kick you for inactivity. You can choose your games by reacting with emoticons in the #settings tab!")
                                
                            member.send(message);
                        }
    })

};

module.exports.help = {
    name: "kickmsgcopy"
};