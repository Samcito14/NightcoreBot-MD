/* mejorado por @Jesus-ofc*/ import PhoneNumber from "awesome-phonenumber";

let handler = async (m, {conn, text, command, usedPrefix}) => {
  //prems

  const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo",
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };

  let who;
  //let pp = './galeria/menudorrat3.jpg'
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  if (!who) throw `_. ᩭ✎Etiqueta a la persona que sera baneada_`;
  let user = global.db.data.users[who];
  let name = conn.getName(who);
  let txt = text.replace(name).trim();
  if (!txt) return conn.reply(m.chat, `${mg}_Escriba el motivo del baneo_\n` + `_${usedPrefix + command} @${who.split`@`[0]} _Motivo_`, fkontak, m);
  let chatstext = text.replace(who.split("@")[0], "").replace("@", "");
  let users = global.db.data.users;
  let pp = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg");
  let banu = `_. ᩭ✎Tal vez el ban los haga reflexionar`;
  let banea = `_. ᩭ✎Usuario baneado&\n_. ᩭ✎Nombre :_ ${name}\n_. ᩭ✎Numero :_ ${PhoneNumber("+" + who.replace("@s.whatsapp.net", "")).getNumber(
    "international"
  )}\n*RAZÓN: ${chatstext}*`;
  users[who].banned = true;
  await m.reply(`${banea}\n${banu}`)
};
handler.help = ["banuser"];
handler.tags = ["owner"];
handler.command = /^banuser$/i;
handler.owner = true;
export default handler;
