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
const Canister = new discord_js_1.Client();
const THUMBS_UP = "👍";
const THUMBS_DOWN = "👎";
Canister.on("ready", () => {
    console.log("I am ready!");
});
function allowThumbsOnly(reaction, user) {
    return reaction.emoji.name === THUMBS_UP || reaction.emoji.name === THUMBS_DOWN;
}
Canister.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
    const matched = message.content.match(/^\/poll\s+?(.+)\s+?(\d)/i);
    if (matched && matched.index !== -1) {
        const pollQuestion = matched[1];
        const pollTimeout = parseInt(matched[2], 10);
        const embedOptions = {
            title: pollQuestion,
        };
        const embed = new discord_js_1.RichEmbed(embedOptions);
        try {
            const botMessage = yield message.channel.send("@everyone:", embed);
            const yesReaction = yield botMessage.react(THUMBS_UP);
            const noReaction = yield botMessage.react(THUMBS_DOWN);
            if (message.deletable) {
                message.delete();
            }
            Canister.on("messageReactionAdd", (reaction, { username }) => __awaiter(this, void 0, void 0, function* () {
                if (reaction.message.id === botMessage.id) {
                    console.log(`${username} has voted! total: ${reaction.count}`);
                }
            }));
            setTimeout(() => {
                // botMessage.delete();
            }, pollTimeout * 1000);
        }
        catch (err) {
            console.error(err);
        }
    }
}));
Canister.login("NDAzMDQwMjk0MDMzMTYyMjQw.DUYDhA.7A1x8FSeqCi_2A06LVQ9hYWbkSU");