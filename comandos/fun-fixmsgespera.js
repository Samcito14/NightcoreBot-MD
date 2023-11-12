import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
var handler = async (m, { conn, usedPrefix }) => {
  if (m.sender !== global.conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: '_. ᩭ✎Utiliza este comando directamente en el número principal del Bot_' },
      { quoted: m }
    );
  }
  await conn.sendMessage(
    m.chat,
    { text: '_. ᩭ✎Iniciando proceso de eliminación de todos los archivos de sesión que coincidan con su ID..._' },
    { quoted: m }
  );
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './ShadowSession/';
  try {
    const files = await readdirSync(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          fs.unlinkSync(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: '_. ᩭ✎No se encontró ningún archivo que incluya la ID del chat_' },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `_. ᩭ✎Se eliminaron ${filesDeleted} archivos de sesión_` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(
      m.chat,
      { text: '_. ᩭ✎Ocurrió un error al eliminar los archivos de sesión_' },
      { quoted: m }
    );
  }
  await conn.sendMessage(
    m.chat,
    {
      text: `_. ᩭ✎Hola! Ahora me ves?_\n\n_. ᩭ✎Si Nightcore-Bot no le responde a sus comandos por favor haga un pequeño spam_\n\n_. ᩭ✎Ejemplo :_\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`,
    },
    { quoted: m }
  );
};

handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(fixmsgespera|ds)$/i;

export default handler;
