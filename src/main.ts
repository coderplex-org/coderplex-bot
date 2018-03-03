import { Client, Message, GuildMember, TextChannel, GuildChannel, DMChannel } from "discord.js";
import { config } from "dotenv";

import pollCommand from "./commands/poll";

config();
const Canister = new Client();

Canister.on("ready", () => {
  console.log("I am ready!");
});

Canister.on("guildMemberAdd", async (newUser: GuildMember) => {
  const dmChannel: DMChannel = await newUser.createDM();
  const guildChannel: TextChannel = newUser.guild.channels.find("name", "introductions") as TextChannel;
  if (!dmChannel || !guildChannel) {
    return;
  }

  let dmWelcomeMessage = `Welcome to Coderplex, <@${newUser.id}>!\n`;
  dmWelcomeMessage += "Coderplex is a non-profit organization that is working towards improving the state of tech in Hyderabad,\n";
  dmWelcomeMessage += "by building an active and vibrant developer community which provides support, motivation,\n";
  dmWelcomeMessage += "confidence and opportunities to all it’s members, so that each of them can progress in their careers\n";
  dmWelcomeMessage += "as software developers and engineers.\n";
  dmWelcomeMessage += "\n";
  dmWelcomeMessage += "Please introduce yourself in #introductions !\n";
  dmWelcomeMessage += "Talk about your goals, interests, and views on different technologies out there!\n";
  dmWelcomeMessage += "\n";
  dmWelcomeMessage += "Download the official Discord mobile app at https://discordapp.com/download to stay connected with the community and get notified on latest updates!!";
  dmWelcomeMessage += "\n";
  dmWelcomeMessage += "Ask for help in respective channels! Participate in the community and most of all, learn and have fun!";

  let chWelcomeMessage = `Welcome to Coderplex, <@${newUser.id}>!\n`;
  chWelcomeMessage += "Please introduce yourself to the community!";

  dmChannel.send(dmWelcomeMessage);
  guildChannel.send(chWelcomeMessage);
});

Canister.on("message", async (message: Message) => {
  const commandMatch = message.content.match(/!(poll|help)\s+?(.+)/i); // \s+?(\d)
  if (commandMatch && commandMatch.index !== -1) {
    switch (commandMatch[1]) {
      case "poll":
        pollCommand(commandMatch, message);
        break;
    }
  }
});
Canister.login(process.env.BOT_TOKEN);
