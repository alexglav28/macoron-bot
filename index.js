bot.onText(/\/menu/, (msg) => {
  const text = `
🍬 Виды макарунов:

👉 Перейди в наш каталог: [Macaron Belgrade](https://твой_сайт.com)
`;
  bot.sendMessage(msg.chat.id, text);
});
