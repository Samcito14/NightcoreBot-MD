let handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `_. ᩭ✎Etiqueta un mensaje con el comando_ _${usedPrefix + command}_`;

  conn.sendMessage(m.chat, {forward: m.quoted.fakeObj}, {quoted: m});
};

handler.help = ["reenviar"];

handler.tags = ["tools"];

handler.command = ["reenviar"];

handler.group = true;

export default handler;
