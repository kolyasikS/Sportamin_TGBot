import bot from '../config.js';
import {CRUDMenuOptions, helpOptions, menuOptions, workoutOptions} from "../options/options.js";
export class helpMenu {
    static reply_markup = helpOptions.reply_markup;
    static send = async (chatID) => await bot.sendMessage(chatID, 'What do you have a problem with?', helpOptions);
    static edit = async (chatID, messageID, queryID) => await bot.editMessageReplyMarkup(helpMenu.reply_markup,
        {
            chat_id: chatID,
            message_id: messageID,
            inline_message_id: queryID
        });
}
export class workoutMenu {
    static reply_markup = workoutOptions.reply_markup;
    static send = async (chatID) => await bot.sendMessage(chatID, 'What do you want to view?', workoutOptions);
    static edit = async (chatID, messageID, queryID) => await bot.editMessageReplyMarkup(workoutMenu.reply_markup,
        {
            chat_id: chatID,
            message_id: messageID,
            inline_message_id: queryID
        });
}
export class mainMenu {
    static reply_markup = menuOptions.reply_markup;
    static send = async (chatID) => await bot.sendMessage(chatID, 'What are you interested in?', menuOptions);
    static edit = async (chatID, messageID, queryID) => await bot.editMessageReplyMarkup(mainMenu.reply_markup,
        {
            chat_id: chatID,
            message_id: messageID,
            inline_message_id: queryID
        });
}
export class CRUDMenu {
    static reply_markup = CRUDMenuOptions.reply_markup;
    static send = async (chatID, text) => await bot.sendMessage(chatID, text, CRUDMenuOptions);
    static edit = async (chatID, messageID, queryID, text) => {
        await bot.editMessageReplyMarkup(CRUDMenu.reply_markup,
            {
                chat_id: chatID,
                message_id: messageID,
                inline_message_id: queryID
            });
    }
}


