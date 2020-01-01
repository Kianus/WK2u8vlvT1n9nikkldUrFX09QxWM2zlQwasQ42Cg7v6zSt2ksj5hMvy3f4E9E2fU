const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var staffID = "521276954981302291";

message.guild.members.forEach( (member) => {
        if(member.roles.has(staffID)) {
            member.send(`This is a test for our report command. DM the bot dev if you are not staff.`); 
        }
    })

};

module.exports.help = {
    name: "kickmsg"
};