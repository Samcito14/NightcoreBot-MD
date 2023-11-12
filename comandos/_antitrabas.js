export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  let delet = m.key.participant;
  let bang = m.key.id;
  let name = await conn.getName(m.sender);
  let fakemek = {
    key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},
    message: {groupInviteMessage: {groupJid: "584166718372-1616969743@g.us", inviteCode: "m", groupName: "P", caption: wm3, jpegThumbnail: null}},
  };
  if (chat.antiTraba && m.text.length > 2000) {
    //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin)
      return conn.sendMessage(
        m.chat,
        {text: `_. ᩭ✎El admin @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres_`, mentions: [m.sender]},
        {quoted: fakemek}
      );
    await conn.sendButton(
      m.chat,
      `_. ᩭ✎Se detecto un mensaje que contiene muchos caracteres_\n`,
      `${isBotAdmin ? "" : "_. ᩭ✎No soy administrador, no puedo hacer nada_"}`,
      author,
      ["[ DESACTIVAR ANTI TRABAS ]", usedPrefix + "apagar antitraba"],
      fakemek
    );
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      setTimeout(() => {
        conn.sendMessage(
          m.chat,
          {
            text: `_. ᩭ✎Marcar el chat como leido 🍁_\n${"\n".repeat(400)}\n=> El número : wa.me/${
              m.sender.split("@")[0]
            }\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`,
            mentions: [m.sender],
          },
          {quoted: fakemek}
        );
      }, 0);
      setTimeout(() => {
        conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }, 1000);
    } else if (!bot.restrict) return m.reply("_. ᩭ✎Para realizar acciones de eliminación, mi Creador/Owner tiene que encender el modo restringido_");
  }
  return !0;
}
