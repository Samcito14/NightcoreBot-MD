import {googleImage} from "@bochilteam/scraper";
let handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*✘error✘*\n\n_. ᩭ✎Use el comandó correctamente_\n\n_Ejemplo : ${usedPrefix + command} Kurumi Tokisaki 🍁_`;
  const res = await googleImage(text);
  let image = await res.getRandom();
  let link = image;

  /*await await conn.sendButton(m.chat, captionn, author, link, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `#imagen ${text}`]], m)*/

  await conn.sendFile(
    m.chat,
    res.getRandom(),
    "gimage.jpg",
    `
🍁 _busqueda : ${text}_\n\n🍁 _Lugar Google_\n\n${codex}.codex
`.trim(),
    m
  );
};
handler.help = ["gimage <query>", "imagen <query>"];
handler.tags = ["internet", "tools"];
handler.command = /^(gimage|image|imagen)$/i;
handler.limit = 1;
export default handler;
