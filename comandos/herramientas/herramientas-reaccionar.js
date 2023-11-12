let {proto} = (await import("@whiskeysockets/baileys")).default;

let handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `_. ᩭ✎Responde a un mensaje usando el comando más un emoji para reaccionar_\n\n_. ᩭ✎Ejemplo ${usedPrefix + command} 🍁_`;
  let q = m.quoted ? await m.getQuotedObj() : m;
  conn.relayMessage(m.chat, {reactionMessage: proto.ReactionMessage.create({key: q.key, text: args[0]})}, {messageId: q.key.id});
};
handler.help = ["react <emoji>"];
handler.tags = ["sticker"];
handler.command = ["react", "reaccionar", "reaccion"];

export default handler;
