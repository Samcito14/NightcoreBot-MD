var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  if (!m.isGroup) return false;

  let chat = global.db.data.chats[m.chat];
  let delet = m.key.participant;
  let bang = m.key.id;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;

  if (isAdmin && chat.antiLink && m.text.includes(grupo)) {
    return m.reply("_. ᩭ✎Antilink está activo, pero eres un admin 👻, salvado/a_");
  }

  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return true;
    }

    conn.sendMessage(
      m.chat,
      {
        text: `_. ᩭ✎Se detectó un enlace, serás eliminado_ ${
          isBotAdmin ? "" : "\n\n_. ᩭ✎No soy Admin, No puedo eliminar personas_"
        }`,
        quoted: m,
      },
    );

    if (isBotAdmin) {
      await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
  }

  return true;
}