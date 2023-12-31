import fs from "fs";
let timeout = 60000;
let poin = 500;
let handler = async (m, {conn}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  let id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, "_. ᩭ✎Aun hay acertijos sin responder en este chat_", conn.tekateki[id][0]);
    throw false;
  }
  let tekateki = JSON.parse(fs.readFileSync(`./galeria/games/acertijo.json`));
  let json = tekateki[Math.floor(Math.random() * tekateki.length)];
  let caption = `
ⷮ *${json.question}*
*➢ Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*➢ Bono:* +${poin} Exp
`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout),
  ];
};
handler.help = ["acertijo"];
handler.tags = ["game"];
handler.command = /^(acertijo|acert|pregunta|adivinanza|tekateki)$/i;
export default handler;
