import { MessageReaction, User } from "discord.js";
import { THUMBS_DOWN, THUMBS_UP } from "../constants";

/**
 * Return true if thumbs are passed in, else false.
 * @export
 * @param {MessageReaction} reaction
 * @param {User} user
 * @returns boolean
 */
export default function allowThumbsOnly(reaction: MessageReaction, user: User) {
  return reaction.emoji.name === THUMBS_UP || reaction.emoji.name === THUMBS_DOWN;
}
