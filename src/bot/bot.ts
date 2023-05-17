import TelegramBot from 'node-telegram-bot-api';

const token = '6108338639:AAFxYUnEnUg7YPuTqOzjISkWT0hYHPzhZNA';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

export default bot;
