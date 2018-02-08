import { Client, Message, GuildMember, TextChannel, GuildChannel } from "discord.js";

import pollCommand from "./commands/poll";

const Canister = new Client();

Canister.on("ready", () => {
  console.log("I am ready!");
});

Canister.on("guildMemberAdd", (newUser: GuildMember) => {
  const channel: TextChannel = newUser.guild.channels.find("name", "general") as TextChannel;
  console.log(channel.name);
  if (!channel) {
    return;
  }

  let welcomeMessage = `Welcome to Coderplex, <@${newUser.id}>!\n`;
  welcomeMessage += "Coderplex is a non-profit organization that is working towards improving the state of tech in Hyderabad,\n";
  welcomeMessage += "by building an active and vibrant developer community which provides support, motivation,\n";
  welcomeMessage += "confidence and opportunities to all it’s members, so that each of them can progress in their careers\n";
  welcomeMessage += "as software developers and engineers.\n";
  welcomeMessage += "\n";
  welcomeMessage += "Please introduce yourself in #introductions !\n";
  welcomeMessage += "Talk about your goals, interests, and views on different technologies out there!\n";
  welcomeMessage += "\n";
  welcomeMessage += "Ask for help in respective channels! Participate in the community and most of all, learn and have fun!";
  welcomeMessage += "\n";
  // channel.send(`
  //   Welcome to Coderplex, <@${newUser.id}>!
  //   Coderplex is a non-profit organization that is working towards improving the state of tech in Hyderabad,
  //   by building an active and vibrant developer community which provides support, motivation,
  //   confidence and opportunities to all it’s members, so that each of them can progress in their careers
  //   as software developers and engineers.

  //   Please introduce yourself in #introductions !
  //   Talk about your goals, interests, and views on different technologies out there!
    
  //   Ask for help in respective channels! Participate in the community and most of all, learn and have fun!
  // `);

  channel.send(welcomeMessage);
});

Canister.on("message", async (message: Message) => {
  const pollMatch = message.content.match(/!(poll|help)\s+?(.+)/i); // \s+?(\d)
  if (pollMatch && pollMatch.index !== -1) {
    switch (pollMatch[1]) {
      case "poll":
        pollCommand(pollMatch, message);
        break;
    }
  }
});
Canister.login(process.env.BOT_TOKEN);
