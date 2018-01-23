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
  const matched = message.content.match(/^!poll\s+?(.+)\s+?(\d)/i);
  console.log(message.content);
  if (matched && matched.index !== -1) {
    console.log("matchec command!! :OOO SCREAMS");
    const pollQuestion: string = matched[1];
    const pollTimeout: number = parseInt(matched[2], 10);
    const embedOptions: RichEmbedOptions = {
      title: pollQuestion,
    };
    const embed: RichEmbed = new RichEmbed(embedOptions);
    console.log("Trying stuff now");
    try {
      console.log("SENDING POPCORN MESSAGES")
      const botMessage: Message  = await message.channel.send("@everyone:", embed) as Message;
      const yesReaction: MessageReaction = await botMessage.react(THUMBS_UP);
      const noReaction: MessageReaction = await botMessage.react(THUMBS_DOWN);
      console.log("POP MESSAGES SENT");
      if (message.deletable) {
        message.delete();
      }
      Canister.on("messageReactionAdd", async (reaction: MessageReaction, { username }: User) => {
        if (reaction.message.id === botMessage.id) {
          console.log(`${username} has voted! total: ${reaction.count}`);
        }
      });
      // setTimeout(() => {
      //   botMessage.delete();
      // }, pollTimeout * 1000);
      console.log("TASK FINISHED");
    } catch (err) {
      console.error(err);
    }
  }
});
Canister.login(process.env.BOT_TOKEN);
