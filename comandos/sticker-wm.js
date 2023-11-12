import {addExif} from "../lib/sticker.js";
var handler = async (m, {conn, text}) => {
  if (!m.quoted) throw "_. ᩭ✎Responda al sticker con el nombre que le quiera poner_";
  let stiker = false;
  try {
    let [packname, ...author] = text.split("|");
    author = (author || []).join("|");
    let mime = m.quoted.mimetype || "";
    if (!/webp/.test(mime)) throw "_. ᩭ✎Responda al sticker con el nombre que le quiera poner_";
    let img = await m.quoted.download();
    if (!img) throw "_. ᩭ✎Responda al sticker con el nombre que le quiera poner_";
    stiker = await addExif(img, packname || "", author || "");
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, "wm.webp", "", m, false, {asSticker: true});
    else
      throw "_. ᩭ✎Ocurrio un error._";
  }
};
handler.help = ["wm <packname>|<author>"];
handler.tags = ["sticker"];
handler.command = /^wm$/i;
export default handler;
