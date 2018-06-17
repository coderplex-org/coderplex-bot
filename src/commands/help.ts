import { Message, RichEmbed, RichEmbedOptions } from "discord.js";

function handleHelp(match: any[], message: Message) {
  const SEPERATOR = "================================================\n";
  let description = "Hello! I'm Plex, your friendly coderplex bot! Heres some commands to help along the way ;)\n";
  description += SEPERATOR;
  description += "**`!help`** -> Summons this message!\n";
  description += "**`!poll QUESTION`** -> Start a poll in agreement or disagreemnt of something! Additionally, you can make use of the **`--options`** flag to give custom for people to choose! for example:```!poll Next meetup location? --options 91springboards; swecha; IIIT```\n";
  description += SEPERATOR;
  const embedOptions: RichEmbedOptions = {
    title: "Coderplex Help",
    description,
  };
  const embed: RichEmbed = new RichEmbed(embedOptions);

  message.channel.send(embed);
}

export default handleHelp;
