// const express = require("express");
// const cors = require("cors");
// const Telegraf = require("node-telegram-bot-api");

// const app = express();
// app.use(cors());

// const bot = new Telegraf(process.env.TELEGRAM_TOKEN); // Используйте token из .env

// app.post("/send-message", async (req, res) => {
//   try {
//     await bot.telegram.sendMessage(
//       process.env.TELEGRAM_CHAT_ID, // Замените YOUR_CHAT_ID на ID чата
//       req.body.message,
//       { parse_mode: "HTML" }
//     );
//     res.status(200).send("Сообщение успешно отправлено!");
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).send("Ошибка при отправке сообщения.");
//   }
// });

// const PORT = 3000; // Вы можете выбрать другой порт
// app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
