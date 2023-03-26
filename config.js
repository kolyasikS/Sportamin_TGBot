import TelegramApi from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();
// noinspection JSUnresolvedVariable

const token = process.env.token;
const bot = new TelegramApi(token, {polling: true});

export default bot;