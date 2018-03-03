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
const constants_1 = require("../constants");
const NUMBER_SYMBOLS = [
    constants_1.SYMBOL_ONE,
    constants_1.SYMBOL_TWO,
    constants_1.SYMBOL_THREE,
    constants_1.SYMBOL_FOUR,
    constants_1.SYMBOL_FIVE,
];
const NUMBER_EMOJIES = [
    constants_1.EMOJI_ONE,
    constants_1.EMOJI_TWO,
    constants_1.EMOJI_THREE,
    constants_1.EMOJI_FOUR,
    constants_1.EMOJI_FIVE,
];
function pollCommand(match, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const hasOptions = new RegExp("--options", "i").test(match[2]);
        const pollQuestion = hasOptions === true ? match[2].match(/(.+)--options.+/i)[1].trim() : match[2].trim(); // Extract question from the match
        const pollOptions = hasOptions && match[2].match(/--options\s+?(.+)/i)[1].split(";").slice(0, 5); // Extract poll options
        // const pollTimeout: number = parseInt(match[2], 10);
        const pollDescription = hasOptions ? pollOptions.reduce((acc, curr, currIndex) => {
            return acc += `${NUMBER_SYMBOLS[currIndex]} - ${curr}\n`;
        }, "") : "";
        const embedOptions = {
            title: pollQuestion,
            description: pollDescription,
        };
        const embed = new discord_js_1.RichEmbed(embedOptions);
        try {
            const botMessage = (yield message.channel.send("@everyone:", embed));
            if (hasOptions && pollOptions.length > 0) {
                let currIndex = 0;
                /**
                 * add emojies!
                 */
                function addEmoji() {
                    botMessage.react(NUMBER_EMOJIES[currIndex])
                        .then(() => {
                        currIndex++;
                        if (currIndex < pollOptions.length) {
                            addEmoji();
                        }
                    });
                }
                addEmoji();
            }
            else {
                const yesReaction = yield botMessage.react(constants_1.THUMBS_UP);
                const noReaction = yield botMessage.react(constants_1.THUMBS_DOWN);
            }
            if (message.deletable) {
                message.delete();
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.default = pollCommand;
