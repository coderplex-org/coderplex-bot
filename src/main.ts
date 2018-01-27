import { Client, Message } from "discord.js";

import pollCommand from "./commands/poll";

const Canister = new Client();

Canister.on("ready", () => {
  console.log("I am ready!");
});

Canister.on("message", async (message: Message) => {
  const pollMatch = message.content.match(/!poll\s+?(.+)/i); // \s+?(\d)
  if (pollMatch && pollMatch.index !== -1) {
    pollCommand(pollMatch, message);
  }
});
Canister.login(process.env.BOT_TOKEN);
