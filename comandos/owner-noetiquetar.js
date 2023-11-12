let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

 m.reply(`_. ᩭ✎No etiquetes a mi creador, si necesitas hablar con el hablale al privado_`)
}
handler.customPrefix = /@584166718372/i;
handler.command = new RegExp();

export default handler;
