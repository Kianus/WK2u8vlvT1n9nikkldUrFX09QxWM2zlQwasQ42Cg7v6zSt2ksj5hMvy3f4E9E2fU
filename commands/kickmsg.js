const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var CSGO = "631206449963466804";
    var Rocket = "652236244205699073";
    var Riot = "652236311905959937";
    var Mine = "652236348631285771";
    var Super = "652236439328915539";

message.guild.members.forEach( (member) => {
        if(!member.roles.has(CSGO)) {
            if(!member.roles.has(Rocket)) {
                if(!member.roles.has(Riot)) {
                    if(!member.roles.has(Mine)) {
                        if(!member.roles.has(Super)) {
                            var message = new discord.RichEmbed()
                            .setTitle("WARNING")
                            .setColor("#ff1100")
                            .addField("Hello " + member + ",", "Please select the games you play in our settings tab! Or we need to kick you for inactivity. You can choose your games by reacting with emoticons in the #settings tab!")
                                
                            member.send(message);
                        }
                    }
                }
            }
        }
    })

};

module.exports.help = {
    name: "kickmsg"
};
