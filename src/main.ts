import { Client, Emoji, Message, MessageReaction, RichEmbed, RichEmbedOptions, User, Collector } from "discord.js";

const Canister = new Client();
const THUMBS_UP = "👍";
const THUMBS_DOWN = "👎";

Canister.on("ready", () => {
  console.log("I am ready!");
});

function allowThumbsOnly(reaction: MessageReaction, user: User) {
  return reaction.emoji.name === THUMBS_UP || reaction.emoji.name === THUMBS_DOWN;
}

Canister.on("message", async (message: Message) => {
  const matched = message.content.match(/^!poll\s+?(.+)/i); // \s+?(\d)
  if (matched && matched.index !== -1) {
    const pollQuestion: string = matched[1];
    const pollTimeout: number = parseInt(matched[2], 10);
    const embedOptions: RichEmbedOptions = {
      title: pollQuestion,
    };
    const embed: RichEmbed = new RichEmbed(embedOptions);
    try {
      const botMessage: Message  = await message.channel.send("@everyone:", embed) as Message;
      const yesReaction: MessageReaction = await botMessage.react(THUMBS_UP);
      const noReaction: MessageReaction = await botMessage.react(THUMBS_DOWN);
      if (message.deletable) {
        message.delete();
      }
      // Canister.on("messageReactionAdd", async (reaction: MessageReaction, { username }: User) => {
      //   if (reaction.message.id === botMessage.id) {
      //     console.log(`${username} has voted! total: ${reaction.count}`);
      //   }
      // });
      // setTimeout(() => {
      //   botMessage.delete();
      // }, pollTimeout * 1000);
    } catch (err) {
      console.error(err);
    }
  }
});
Canister.login(process.env.BOT_TOKEN);
