import fetch from "node-fetch";
let handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `_Use correctamente el comando_\n\n_Ejemplo : .hentapdf hu tao_*`;
  try {
    m.reply(global.wait);
    let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`);
    let json = await res.json();
    let aa = json.result[0].id;
    let aa2 = json.result[0].title_native;
    let res2 = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${aa}?apikey=${lolkeysapi}`);
    let json2 = await res2.json();
    let aa3 = json2.result;
    await conn.sendMessage(m.chat, {document: {url: aa3}, mimetype: "application/pdf", fileName: `${aa2}.pdf`}, {quoted: m});
  } catch {
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝚈/𝙾 𝙿𝚁𝚄𝙴𝙱𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙰 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸𝙰*`;
  }
};
handler.command = /^(hentaipdf)$/i;
export default handler;
