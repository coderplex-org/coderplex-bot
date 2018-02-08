"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const poll_1 = require("./commands/poll");
const Canister = new discord_js_1.Client();
Canister.on("ready", () => {
    console.log("I am ready!");
});
Canister.on("guildMemberAdd", (newUser) => {
    const channel = newUser.guild.channels.find("name", "general");
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
Canister.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
    const pollMatch = message.content.match(/!(poll|help)\s+?(.+)/i); // \s+?(\d)
    if (pollMatch && pollMatch.index !== -1) {
        switch (pollMatch[1]) {
            case "poll":
                poll_1.default(pollMatch, message);
                break;
        }
    }
}));
Canister.login(process.env.BOT_TOKEN);
