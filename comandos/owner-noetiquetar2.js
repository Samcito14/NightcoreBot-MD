let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

  conn.sendButton(
    m.chat,
    "*[ ⚠ ️] No etiquetes a Katashi Fukushima, si es algo urgente contacta con el a su chat privado*",
    wm3,
    [["📋 TERMINOS Y CONDICIONES", `#terminos`]],
    m
  );
  let mentionedJid = [m.sender];
};
handler.customPrefix = /@51948705559/i;
handler.command = new RegExp();

export default handler;
