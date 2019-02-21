import { Client, Message } from "discord.js";
import { config } from "dotenv";

import handleNewMember from "./events/handleNewMember";
import handlePoll from "./commands/poll";
import handleHelp from "./commands/help";

config();
const Canister = new Client();

// Once the bot is ready, log to the console :)
Canister.on("ready", () => {
  console.log("I am ready!");
});

Canister.on("guildMemberAdd", handleNewMember);

Canister.on("message", async (message: Message) => {
  const commandMatch = message.content.match(/^!(poll|help)(\s+?(.+))?/i); // \s+?(\d)
  console.log(commandMatch);
  if (commandMatch && commandMatch.index !== -1) {
    switch (commandMatch[1]) {
      case "poll":
        handlePoll(commandMatch, message);
        break;
      case "help":
        handleHelp(commandMatch, message);
        break;
      // default:
      //   handleDefault();
      //   break;
    }
  }
});

Canister.login(process.env.BOT_TOKEN);
