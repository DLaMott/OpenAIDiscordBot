require('dotenv').config();
const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');

const keepAlive = require('./server');

const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const client = new Client({ intents: [
    
  GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
   
], });

const prefix = "!";

client.on("messageCreate", async function(message) {

  console.log(message.content);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  var question = commandBody.split(':');
  question.shift();
  const idfk = question.join(':');

  console.log(question);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  if(command ==="question:"){
   
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Pretend you are John who is a Mr know it all. Be mean but answer questions correctly.
      Person: ${message}
      John: `,
      max_tokens: 500,
      temperature: 0,
    });

    console.log(response.data);

    message.reply(response.data.choices[0].text);
  }

});

keepAlive();

client.login(process.env.CLIENT_TOKEN);