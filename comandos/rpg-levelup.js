import {canLevelUp, xpRange} from "../lib/levelling.js";
import {levelup} from "../lib/canvas.js";

function ConvertMiles(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

let handler = async (m, {conn}) => {
  let name = conn.getName(m.sender);
  let user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `
*╭─ ✧ ── Level ── ✧ ──╗*
*│ 🍁 Nombre : ${name}*
*│ 🍁 Nivel : ${user.level}*
*│ 🍁 Xp : ${`${ConvertMiles(user.exp - min)}`} / ${`${ConvertMiles(xp)}`}*
*╰─ ✧ ── ✦ ── ✧ ── ✧ ──┛*

*_. ᩭ✎Te falta ${`${ConvertMiles(max - user.exp)}`} de xp para subir de nivel_*

${wm3}
`.trim();
  }
  let before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    let teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`;
    let str = `
*╭─ ✧ ── Level Up ── ✧ ──╗*
*│ 🍁Nivel anterior : ${before}*
*│ 🍁 Nivel actual : ${user.level}*
*╰─ ✧ ── ✦ ── ✧ ── ✧ ──┛*

*_. ᩭ✎Cuanto más interactúes con NightcoreBot, mayor será tu nivel_*

${wm3}
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, "levelup.jpg", str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ["levelup"];
handler.tags = ["xp"];

handler.command = ["nivel", "lvl", "levelup", "level"];

export default handler;
