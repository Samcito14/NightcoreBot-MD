let handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg");
  let bank = `
╭─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┓
❍ *Nombre:* ${name}
❍ *Diamantes:* ${global.db.data.users[who].limit} 💎
❍ *Tokens:* ${global.db.data.users[who].joincount} ☯️
❍ *Dólares:* $${global.db.data.users[who].dolares} 💸
❍ *Dinero en el banco:* $${global.db.data.users[who].bank}
╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛`.trim();
  conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
      },
      caption: bank,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `RPG - BANK`,
          sourceUrl: "https://wa.me/584166718372",
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
        },
      },
    },
    {
      quoted: m,
    }
  );
};
handler.help = ["bal"];
handler.tags = ["xp"];
handler.command = ["bal", "diamantes", "diamond", "balance", "banco"];
export default handler;
