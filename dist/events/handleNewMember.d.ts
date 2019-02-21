import { GuildMember } from "discord.js";
declare function handleNewMember(newUser: GuildMember): Promise<void>;
export default handleNewMember;
