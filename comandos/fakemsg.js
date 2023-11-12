var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(
      `_. ᩭ✎use el comando correctamente_\n\n_. ᩭ✎Ejemplo ${usedPrefix + command} XD @${m.sender.split`@`[0]} :v_`,
      null,
      { mentions: [m.sender] }
    );
  }

  const cm = { ...m };
  let who;
  if (text.includes('@0')) {
    who = '0@s.whatsapp.net';
  } else if (m.isGroup) {
    who = cm.participant = m.mentionedJid[0];
  } else {
    who = m.chat;
  }

  if (!who) {
    return m.reply(
      `_. ᩭ✎use el comando correctamente_\n\n_. ᩭ✎Ejemplo ${usedPrefix + command} XD @${m.sender.split`@`[0]} :v_`,
      null,
      { mentions: [m.sender] }
    );
  }

  cm.key.fromMe = false;
  cm.message[m.mtype] = copy(m.msg);
  const sp = '@' + who.split`@`[0];
  const [fake, ...real] = text.split(sp);
  await conn.fakeReply(
    m.chat,
    real.join(sp).trimStart(),
    who,
    fake.trimEnd(),
    m.isGroup ? m.chat : false,
    {
      contextInfo: {
        mentionedJid: conn.parseMention(real.join(sp).trim())
      }
    }
  );
};

handler.help = ['fake <text> @user <text2>'];
handler.tags = ['tools'];
handler.rowner = true;
handler.command = /^(fitnah|fakereply|fake)$/;

export default handler;

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
