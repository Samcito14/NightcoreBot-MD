let handler = async (m, {conn, command, args}) => {
  let type = (args[0] || "").toLowerCase();
  let _type = (args[0] || "").toLowerCase();

  //------- Nombre
  let pp = "./Menu2.jpg";
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`;

  //------------ BIO
  let teksbio = `
╭── ✧ ──[ 〣 _Info - Bot_ 〣 ]── ✧ ── ✦ ──┓
┃                                                       
┃ _🍁. ᩭ✎Creador : Jesus ofc 🍁_                    
┃ _🍁. ᩭ✎Número : +58 4166718372 🍁_                 
┃                                                       
╰────────────────────────────────┛

`;
  const sections = [
    {
      title: ` OWNER`,
      rows: [
        {title: "|🔰| INFORMACION COMPLETA", rowId: ".owner bio"},
        {title: "|🛡️| ESTADO DEL BOT", rowId: ".estado"},
        {title: "|📦| MINECRAFT SERVER", rowId: ".mc-server"},
        {title: "|ℹ️| SCRIPT", rowId: ".sc"},
      ],
    },
    {
      title: `${htjava} OTROS  –––––––·•`,
      rows: [
        {title: "💹 • Donar", rowId: ".donar"},
        {title: "🔖 • Grupos", rowId: ".grupos"},
        {title: "🌟 • Premium", rowId: ".premium"},
      ],
    },
  ];

  const listMessage = {
    text: `._ ᩭ✎mirar la info completa del Creador_`,
    footer: wm,
    title: `${comienzo} *OWNER INFO* ${fin}`,
    buttonText: "seleccione aqui",
    sections,
  };

  try {
    if (/(creator|owner)/i.test(command)) {
      const count =
        args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count);
      switch (type) {
        case "nomor":
          conn.reply(m.chat, wm, m, {contextInfo: {mentionedJid: [nowner]}});
          break;
        case "bio":
        conn.sendFile(m.chat, pp, 'Dorrat.jpg', teksbio)
         /* conn.sendHydrated(
            m.chat,
            teksbio,
            wm,
            pp,
            "https://wa.me/584166718372 💬 ᴄʜᴀᴛs",
            null,
            null,
            [
              ["BY Jesus-ofc", null],
              [null, null],
              [null, null],
            ],
            m
          );*/
          break;

        default:
          return await conn.sendMessage(m.chat, listMessage, {quoted: m, contextInfo: {mentionedJid: [m.sender]}});
      }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count =
        args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count);
      switch (_type) {
        case "t":
          break;
        case "":
          break;

        default:
          return conn.sendFile(m.chat, pp, 'Dorrat.jpg', teksbio)
          //conn.sendButton(m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m);
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};

handler.help = ["owner", "creaor"];
handler.tags = ["main", "info"];
handler.command = /^(owner|creator)/i;

export default handler;
