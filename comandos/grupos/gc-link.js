import fs from "fs";
let handler = async (m, {conn}) => {
  let group = m.chat;
  conn.reply(m.chat, "https://chat.whatsapp.com/" + (await conn.groupInviteCode(group)), m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: "ᴊᴇsᴜs ᴏғᴄ",
        body: "◈ɴɪɢʜᴛᴄᴏʀᴇ-ʙᴏᴛ",
        previewType: 0,
        thumbnail: fs.readFileSync("./Menu2.jpg"),
        sourceUrl: `https://wa.me/584166718372`,
      },
    },
  });
};
handler.help = ["linkgroup"];
handler.tags = ["group"];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
