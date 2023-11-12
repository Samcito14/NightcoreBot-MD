let handler = async (m, {conn, command}) => {
  let stikerwelgc = "./galeria/welgc.webp";
  let stikerbyegc = "./galeria/byegc.webp";
  if (command == "welcomegc") {
    conn.sendFile(m.chat, stikerwelgc, "sticker.webp", null, m, false, {
      contextInfo: {
        externalAdReply: {title: "❮ ✧│彡 ┊▸ ㊂ Nightcore - Bot ㊂ ◂┊ 彡│✧ ❯", body: "❮🍁┊▸ ㊂ ᴊᴇsᴜs - ᴏғᴄ ㊂ ◂┊🍁❯", sourceUrl: `https://wa.me/584166718372`, thumbnail: imagen1},
      },
    });
  }
  if (command == "byegc") {
    conn.sendFile(m.chat, stikerbyegc, "sticker.webp", null, m, false, {
      contextInfo: {
        externalAdReply: {title: "❮ ✧│彡 ┊▸ ㊂ Nightcore - Bot ㊂ ◂┊ 彡│✧ ❯", body: "❮🍁┊▸ ㊂ ᴊᴇsᴜs - ᴏғᴄ ㊂ ◂┊🍁❯", sourceUrl: `https://wa.me/584166718372`, thumbnail: imagen1},
      },
    });
  }
};
handler.command = ["welcomegc", "byegc"];
export default handler;
