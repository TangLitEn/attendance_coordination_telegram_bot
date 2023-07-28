# The ATTENDANCE COORDINATION BOT🌟

## Introduction🤪

This telegram bot when I am holding my position inside a club which the lab access is assigned to only the Main Committees, which I think I must figure out a method where I can 

> **"Collect the attendance of the Main Committees (which has the lab access) and forward the poll result to the rest of the members group."** 

With this thinking in mind, I started to code up this telegram bot using google app script (Why google app script? Cause I am more familiar with it I guess😉)

## Features🔥
* Customise the poll options.
* Customise the message that can be send out together with the polls.
* Customise the timing to collect/close/forward the poll to the respective groups. 

## Prerequisite🤔
Not really have one, but maybe the **PASSION** ? Oh ya, some basic understanding of how a google spreadsheet works👍🏻. 

## LFGGGG🎉
Let us set up this bot together!
### Creating the telegram bot
First step, we must create a telegram bot which will be the main character of this automation. To create a bot, you can use the BotFather, more documentation on how to create is [HERE](https://core.telegram.org/bots/features#creating-a-new-bot "HERE").

After creating the bot, remember to obtain the token of the bot, it looks something like this: `110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`

### Obtaining the group ID (and maybe thread ID)
Next step, we will need to obtain two informations of the telegram group that we wanna work with:
1. The telegram group `chat_ID`
2. If you want the bot to send into a specific topic inside the telegram group chat, we will need the `message_thread_ID`

**How to obtain these informations🤔?**
There are a lot of methods out there, the method that I will suggest in this documentation is to use another telegram bot @RawDataBot
1. Add the telegram bot into the group.
2. Send a random message into the topics/chat that you wanna obtain more information
3. The bot will respond with a long list of response.
4. Copy the whole list of response and paste it into the JSON converter [HERE](https://jsonformatter.curiousconcept.com/# "HERE")

To obtain the `chat_ID` and `message_thread_ID`, look out for something like below:

### Setting up google spreadsheet
The most easy step in the whole set up process🤣

### Set up the app script

### Customising the telegram bot 

### Testing out the function 

### Improvement
If any bug spotted/improvement suggestions, please email to me at litentang0212@gmail.com
