const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  let user = global.db.data.users[m.sender];
  let chat = global.db.data.chats[m.chat];
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5))
      await m.reply(
        `${
          user.warn == 1 ? `_. ᩭ✎Hola @${m.sender.split`@`[0]}_` : `._ ᩭ✎@${m.sender.split`@`[0]}_`
        }, _. ᩭ✎decir la palabra (${isToxic}) está prohibido en este bot_ _${user.warn}/5_ advertencia`,
        false,
        {mentions: [m.sender]}
      );
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`_. ᩭ✎Hola @${m.sender.split`@`[0]}, superaste las 5 advertencias serás bloqueado y eliminado de este grupo_`, false, {
      mentions: [m.sender],
    });
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    //await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
