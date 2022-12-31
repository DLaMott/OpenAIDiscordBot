## Discord openai bot

This bot uses the openai library to create a smart and fast bot. Currently this bot only utilizes the text-davinci-003 model. This AI has been trained to answer any and all questions. Using the model this bot has been adjusted to answer questions but also in a "condescending" manner.

For more on the openai model please see [here](https://beta.openai.com/docs/models/gpt-3)

## To install and make your own

This page has detailed instructions on how I made this bot and deployed it to run 24/7. 

[Setup Page](https://dlamott.github.io/openai-discord-bot.html)

## For just trying locally

Download the repo and adjust your .env to utilize your discord bot token and your openai apikey.

If you are wanting to run local and not use repl you will need to remove the server.js and any references in index.js to server.js.

Once server.js is removed run the following in the project's directory to begin testing this bot

- npm install discord.js axios dotenv openapi
- node index.js

## Add this bot

Navigate to the provided link and add this bot into your server

[Discord Bot Location](https://discord.com/developers/applications/1058392053056286720/information)


- Using the bot "!question: your question"
![image](https://user-images.githubusercontent.com/66742430/210098539-a81a517f-9385-4621-81b7-133b395f0eb1.png)

- Using the image: "!image: your image request"
![imageAi](https://user-images.githubusercontent.com/66742430/210140886-6dc2bf91-84b5-4f00-8478-ec20fbe7a2e3.png)

## To do
- Add more models to enhance functionality
