let handler = (m) => m;
handler.before = async function (m, {conn, isBotAdmin}) {
  if (!m.isGroup) return !1;
  let chat = global.db.data.chats[m.chat];

  if (isBotAdmin && chat.antiArab) {
    if (m.sender.startsWith("92" || "92")) {
      global.db.data.users[m.sender].banned = true;
      m.reply(`_. ᩭ✎Anti árabes está activo para evitar spam_\n\n_. ᩭ✎Hasta la próxima_`);
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }

    if (m.sender.startsWith("212" || "212")) {
      global.db.data.users[m.sender].banned = true;
      m.reply(`_. ᩭ✎Anti árabes está activo para evitar spam_\n\n_. ᩭ✎Hasta la próxima_`);
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
  }
};
export default handler;
