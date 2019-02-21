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
const dotenv_1 = require("dotenv");
const handleNewMember_1 = require("./events/handleNewMember");
const poll_1 = require("./commands/poll");
const help_1 = require("./commands/help");
dotenv_1.config();
const Canister = new discord_js_1.Client();
// Once the bot is ready, log to the console :)
Canister.on("ready", () => {
    console.log("I am ready!");
});
Canister.on("guildMemberAdd", handleNewMember_1.default);
Canister.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
    const commandMatch = message.content.match(/^!(poll|help)(\s+?(.+))?/i); // \s+?(\d)
    console.log(commandMatch);
    if (commandMatch && commandMatch.index !== -1) {
        switch (commandMatch[1]) {
            case "poll":
                poll_1.default(commandMatch, message);
                break;
            case "help":
                help_1.default(commandMatch, message);
                break;
            // default:
            //   handleDefault();
            //   break;
        }
    }
}));
Canister.login(process.env.BOT_TOKEN);
//# sourceMappingURL=main.js.map