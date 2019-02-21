import { MessageReaction, User } from "discord.js";
/**
 * Return true if thumbs are passed in, else false.
 * @export
 * @param {MessageReaction} reaction
 * @param {User} user
 * @returns boolean
 */
export default function allowThumbsOnly(reaction: MessageReaction, user: User): boolean;
