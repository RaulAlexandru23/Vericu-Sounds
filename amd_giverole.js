// > Giverole command

const { colorEmbed } = require("../config.json");
const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");
const fs = require("fs");
require("discord-reply");

module.exports = {
  name: "ghetoar",
  description: "Only for a one guild",
  async execute(message, args) {
    const users = message.author.id === `428986099348668419` || // Raul#4616 
                  message.author.id === `199081685738979328`   // ecu#3431

    if (!users) return;

    const UPDATEMODE = fs.readFileSync(`./other/updatemode.txt`);
    if (UPDATEMODE == "off") return message.lineReply(i18n.__("common.botIsOff"));
    
    try {
      const member = message.mentions.members.first();
      let ghetouRol = message.guild.roles.find(role => role.id == "680538812652191771")
      member.addRole(ghetouRol)
    } catch (error) {
      console.log(`We can't add role`);
    }
  },
};