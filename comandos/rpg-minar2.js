let handler = async (m, {conn, isPrems, usedPrefix}) => {
  let hasil = Math.floor(Math.random() * 1000);
  let time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date() - global.db.data.users[m.sender].lastmiming < 600000) throw `_. ᩭ✎Espera ${msToTime(time - new Date())} Para volver a minar_`;
  let user = global.db.data.users[m.sender];
  if (user.health < 80)
    return m.reply(
      `_. ᩭ✎Requiere al menos 80 ❤️Salud para la minería_
_. ᩭ✎compre ❤️ Salud primero escribiendo ${usedPrefix}buy potion <cantidad>_,
_y despues_
*_${usedPrefix}heal <cantidad>_*
`.trim()
    );
  let info = `
*. ᩭ✎Genial has minado ${hasil} Xp  ⛏️*`.trim();
  global.db.data.users[m.sender].lastmiming = new Date() * 1;

  conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/f44fccfba9a33f6bc90e2.jpg",
      },
      caption: info,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `『 ɴɪɢʜᴛᴄᴏʀᴇ - ʙᴏᴛ - ʀᴘɢ ᴍɪɴᴀʀ 2 』`,
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/f44fccfba9a33f6bc90e2.jpg",
          sourceUrl: "https://chat.whatsapp.com/B4wRsrXs1MsKLqtLctdTkf",
        },
      },
    },
    {
      quoted: m,
    }
  );
};
handler.help = ["minar2"];
handler.tags = ["xp"];
handler.command = ["minar2", "miming2", "mine2"];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + " m y " + seconds + " s ";
}
