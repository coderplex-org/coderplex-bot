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
function handleNewMember(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const dmChannel = yield newUser.createDM();
        const guildChannel = newUser.guild.channels.find("name", "introductions");
        if (!dmChannel || !guildChannel) {
            return;
        }
        let dmWelcomeMessage = `Welcome to Coderplex, <@${newUser.id}>!\n`;
        dmWelcomeMessage +=
            "Coderplex is a non-profit organization that is working towards improving the state of tech in Hyderabad,\n";
        dmWelcomeMessage +=
            "by building an active and vibrant developer community which provides support, motivation,\n";
        dmWelcomeMessage +=
            "confidence and opportunities to all it’s members, so that each of them can progress in their careers\n";
        dmWelcomeMessage += "as software developers and engineers.\n";
        dmWelcomeMessage += "\n";
        dmWelcomeMessage += "Please introduce yourself in #introductions channel !\n";
        dmWelcomeMessage +=
            "Talk about your goals, interests, and views on different technologies out there!\n";
        dmWelcomeMessage += "\n";
        dmWelcomeMessage +=
            "Download the official Discord mobile app at https://discordapp.com/download to stay connected with the community and get notified on latest updates!!";
        dmWelcomeMessage += "\n";
        dmWelcomeMessage +=
            "Ask for help in respective channels! Participate in the community and most of all, learn and have fun!";
        let chWelcomeMessage = `Welcome to Coderplex, <@${newUser.id}>!\n`;
        chWelcomeMessage += "Please introduce yourself to the community!";
        dmChannel.send(dmWelcomeMessage);
        guildChannel.send(chWelcomeMessage);
    });
}
exports.default = handleNewMember;
//# sourceMappingURL=handleNewMember.js.map