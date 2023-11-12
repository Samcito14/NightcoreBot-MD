let handler = async (m, {conn, usedPrefix}) => {
  var doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  var document = doc[Math.floor(Math.random() * doc.length)];
  let texto1 = `
._ ᩭ✎Ser-Bot No disponible_`;
  let buttonMessage = {
    document: {url: `https://github.com/Jesus-ofc33`},
    mimetype: `application/${document}`,
    fileName: `◈ɴɪɢʜᴛᴄᴏʀᴇ〔ʙᴏᴛ〕࿐`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/Jesus-ofc33",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://wa.me/584166718372",
      },
    },
    caption: texto1,
    footer: wm,
    buttons: [{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: "🍁"}, type: 1}],
    headerType: 6,
  };
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = /^(porsiacasoxd)/i;
export default handler;
