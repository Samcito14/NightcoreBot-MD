import { xpRange } from "../lib/levelling.js";
import { createHash } from "crypto";
import PhoneNumber from "awesome-phonenumber";
let handler = async (m, { conn, command }) => {
  let { dolares } = global.db.data.users[m.sender];
  let { level, role } = global.db.data.users[m.sender];
  let { xp } = xpRange(level, global.multiplier);
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://telegra.ph/file/9b1353deceded7f387713.jpg");
  if (!(who in global.db.data.users))
    throw `_. ᩭ✎El usuario que está mencionando no está registrado en mi base de datos_`;
  try {
  } catch (e) {
  } finally {
    let { name, limit, registered, age } = global.db.data.users[who];
    let username = conn.getName(who);
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash("md5").update(who).digest("hex");
    let info = `_. ᩭ✎tus datos están guardados en nuestra base de datos._\n\n${wm3}`;
    let str = `
╭─ ❖ ── ✦ ──≫ Perfil ≪── ✦ ── ❖ ──┓
│ *🍁 Nombre:* ${username} ${registered ? "(" + name + ") " : ""}
│ *#️⃣ Numero:* ${PhoneNumber(
      "+" + who.replace("@s.whatsapp.net", ""),
    ).getNumber("international")}
│ *🔗 Link:* wa.me/${who.split`@`[0]}${
      registered ? "\n*𝙴𝙳𝙰𝙳:* " + age + " años" : ""
    }
│ *🍁 Nivel:* ${level}
│ *⚡ Rango:* ${role}
│ *💸 Dolares*: ${`${dolares.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
│ *🎉 Experiencia/XP:* ${`${xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
│ *💎 Diamantes:* ${`${limit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
│ *📦 Registrado:* ${registered ? "Si" : "No"}
│ *💳 Premium:* ${prem ? "Si" : "No"}
╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛`;
    conn.sendMessage(
      who,
      { text: `*❕ NUMERO DE SERIE: ${sn}*` },
      { quoted: m },
    );

    await conn.sendMessage(
      m.chat,
      {
        image: {
          url: pp,
        },
        caption: str,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `RPG - PERFIL`,
            sourceUrl: "http://wa.me/584166718372",
            mediaType: 1,
            showAdAttribution: true,
            //thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
            thumbnailUrl: pp,
          },
        },
      },
      {
        quoted: m,
      },
    );
  }
};
handler.help = ["profile [@user]"];
handler.tags = ["xp"];
handler.command = /^perfil|profile?$/i;
export default handler;
