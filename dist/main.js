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
Canister.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
    const pollMatch = message.content.match(/!poll\s+?(.+)/i); // \s+?(\d)
    if (pollMatch && pollMatch.index !== -1) {
        poll_1.default(pollMatch, message);
    }
}));
Canister.login(process.env.BOT_TOKEN);
