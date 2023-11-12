import {tmpdir} from "os";
import {join} from "path";
import {readdirSync, statSync, unlinkSync} from "fs";
let handler = async (m, {conn, usedPrefix: _p, __dirname, args}) => {
  conn.reply(m.chat, "_. ᩭ✎La carpeta temp a sido vaciada exitosamente_", m);

  const tmp = [tmpdir(), join(__dirname, "../tmp")];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    unlinkSync(file);
  });
};
handler.help = ["cleartmp"];
handler.tags = ["owner"];
handler.command = /^(cleartmp|cleartemp)$/i;
handler.rowner = true;
export default handler;
