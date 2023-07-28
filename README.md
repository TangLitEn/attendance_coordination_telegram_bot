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
* `chat_ID` : <img width="249" alt="Screenshot 2023-07-28 at 11 34 10 AM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/b398b2ed-cd9d-45f9-9c24-172a60f9ecd3">
* `message_thread_ID` : <img width="212" alt="Screenshot 2023-07-28 at 11 35 27 AM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/b716727b-7f4b-4561-9486-d78c3ec5f23c">

👻 Tricks:
After sending out the message in step 2, you will receive the updates from the bot, you can **delete** the message from the bot after you had copy the information out. 

### Setting up google spreadsheet
The most easy step in the whole set up process🤣
**JUST CREATE A NEW GOOGLE SPREADSHEET INSIDE YOUR GOOGLE DRIVE🤣**

### Set up the app script
To enter the app script environment:

1. On the top-left corner, find `Extensions`

2. Under the drop down, select `Apps Script`
<img width="325" alt="Screenshot 2023-07-28 at 1 44 26 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/1ae9edc4-9d43-4e9b-8291-275fb30c3b7b">

3. Copy the code from the MAIN.gs from this GitHub repo and paste it into the code editor👍🏻

### Customising the telegram bot


### Testing out the function
To test out the function:

1. first press the `save` button 
<img width="541" alt="Screenshot 2023-07-28 at 1 55 16 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/5d250b1f-7896-467f-b7f3-9c089c89f895">

2. After that, click the `Run` button
**👻 Tricks:**
If this is your first time you are using the app script for the first time, you might encounter the error message below. 
<img width="421" alt="Screenshot 2023-07-28 at 1 57 57 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/ff8d27e3-3bc8-42c8-8e47-12a7ae87a7db">
Please jump to the **HELP🥹** section below.

3. After succefully invoke the functions, you should be receiving the poll inside the group telegram group.

**HELP🥹**

1. First, click on the `Review permissions`

2. Click on the `Advanced` on the bottom right
<img width="620" alt="Screenshot 2023-07-28 at 1 58 18 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/a6170c0e-9b80-45bc-bdbb-2c7652a78455">

3. Click on the `Go to Untitled project (unsafe)`
<img width="620" alt="Screenshot 2023-07-28 at 1 58 50 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/b9534c2f-26ba-451f-aeba-a20eb23527d1">

4. Review the permissions and click on `Allow`
<img width="464" alt="Screenshot 2023-07-28 at 1 59 23 PM" src="https://github.com/TangLitEn/attendance_coordination_telegram_bot/assets/65808174/594f0237-6d7f-4a70-a8fb-351cb95d8cd3">

5. The function should be now able to run normally.

> But with that being said, this protection is implemented by Google to protect the users from implementing something dangerous, as long as you know what the code is doing, then you should be fine👍🏻

### Scheduling the poll

### Improvement
If any bug spotted/improvement suggestions, please email to me at litentang0212@gmail.com
