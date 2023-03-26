import bot from './config.js';
import {menuOptions, workoutOptions} from "./options/options.js";
import commandTexts from "./texts/commandsTexts.js";
import commands from "./commands/commands.js";
import {CRUDMenu, helpMenu, mainMenu, workoutMenu} from "./menus/menus.js";
import {Diet, Parameters, Timetable} from "./services/workoutService.js";
import {readTimetable, updateTimetable} from "./controllers/timetableController.js";
import {readDiet} from "./controllers/dietController.js";
import {readParameters} from "./controllers/parametersController.js";
import {getBranch, initBranches, setBranch} from "./branches.js";


await bot.setMyCommands(commands);

const timetable = new Timetable();
const diet = new Diet();
const parameters = new Parameters();

initBranches([timetable, diet, parameters]);

bot.on('message', async msg => {
    const text = msg.text;
    const chatID = msg.chat.id;
    console.log(text);

    switch (text) {
        case '/start':
            await bot.sendMessage(chatID, commandTexts.start(msg));
            await mainMenu.send(chatID);
            return;
        case '/info':
            return await bot.sendMessage(chatID, commandTexts.info());
        default:
            break;
    }

    if (timetable.isBeingEdited) {
        await updateTimetable(timetable, text);
        return;
    } else if (diet.isBeingEdited) {

        diet.isBeingEdited = false;
        return;
    } else if (parameters.isBeingEdited) {

        parameters.isBeingEdited = false;
        return;
    }



    if (/mikasa/i.test(text)) {
        await bot.sendAnimation(msg.chat.id, 'https://thumbs.gfycat.com/JauntyElaborateArrowworm-mobile.mp4', {}, 'Text');
    }
    return;
});

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatID = msg.message.chat.id;
    const messageId = msg.message.message_id;
    const inlineMessageId = msg.inline_query_id;
    if (data == 'help') {
        await helpMenu.edit(chatID, messageId, inlineMessageId);
        return;
    }
    if (data == 'workout') {
        await workoutMenu.edit(chatID, messageId, inlineMessageId);
        return;
    }
    if (data.includes('workout')) {
        switch (data) {
            case 'workout_timetable':
                await readTimetable(timetable, chatID);
                setBranch(timetable);
                return;
            case 'workout_diet':
                await readDiet(diet, chatID);
                setBranch(diet);
                return;
            case 'workout_parameters':
                await readParameters(parameters, chatID);
                setBranch(parameters);
                return;
        }
    }
    if (data.includes('crud')) {
        const [branch, branchName] = getBranch() || [null];
        switch (data) {
            case 'crud_update':
                await bot.sendMessage(chatID, `Write down your ${branchName}`);
                branch.isBeingEdited = true;
                return;
        }
    }
    if (data == 'to_back') {
        await bot.editMessageReplyMarkup(mainMenu.reply_markup, { chat_id: chatID, message_id: messageId, inline_message_id: inlineMessageId});
    }
});
