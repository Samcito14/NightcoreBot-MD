import fs from "fs";
let handler = async (m, {conn}) => {
  let text = `
≫ Comandos para instalar en termux ≫

1 ≫ termux-setup-storage
2 ≫ apt update 
3 ≫ pkg upgrade 
4 ≫ pkg install git -y
5 ≫ pkg install nodejs -y
6 ≫ pkg install ffmpeg -y
7 ≫ pkg install imagemagick -y
8 ≫ pkg install yarn
9 ≫ git clone https://github.com/Jesus-ofc33/NightcoreBot-MD
10 ≫ cd NightcoreBot-MD
11 ≫ yarn install 
12 ≫ npm install
13 ≫ npm install 
14 ≫ npm start

._ ᩭ✎Si necesitas Ayuda con la instalación puedes contactarme_

_. ᩭ✎Número oficial : +58 4166718372 🍁_
`.trim();
  conn.reply(m.chat, text, m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: "ᴊᴇsᴜs ᴏғᴄ",
        body: "◈ɴɪɢʜᴛᴄᴏʀᴇ〔ʙᴏᴛ〕࿐",
        previewType: 0,
        thumbnail: fs.readFileSync("./Menu2.jpg"),
        sourceUrl: `https://github.com/Jesus-ofc33`,
      },
    },
  });
};
handler.command = /^(instalarbot)/i;
export default handler;
