let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply("_. ᩭ✎Éxito, ya estoy disponible en este chat_");
};
handler.help = ["unbanchat"];
handler.tags = ["owner"];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;
