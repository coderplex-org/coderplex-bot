"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
/**
 * Return true if thumbs are passed in, else false.
 * @export
 * @param {MessageReaction} reaction
 * @param {User} user
 * @returns boolean
 */
function allowThumbsOnly(reaction, user) {
    return reaction.emoji.name === constants_1.THUMBS_UP || reaction.emoji.name === constants_1.THUMBS_DOWN;
}
exports.default = allowThumbsOnly;
//# sourceMappingURL=allowThumbsOnly.js.map