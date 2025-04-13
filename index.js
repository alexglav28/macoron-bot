const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  const menuOptions = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Каталог',
            callback_data: 'catalog',
          },
          {
            text: 'Корзина',
            callback_data: 'cart',
          },
        ],
        [
          {
            text: 'Контакты',
            callback_data: 'contacts',
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, 'Выберите опцию:', menuOptions);
});

bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'catalog') {
    bot.sendMessage(message.chat.id, 'Тут будет ваш каталог.');
  } else if (data === 'cart') {
    bot.sendMessage(message.chat.id, 'Тут будет ваша корзина.');
  } else if (data === 'contacts') {
    bot.sendMessage(message.chat.id, 'Тут будут контакты.');
  }
});
