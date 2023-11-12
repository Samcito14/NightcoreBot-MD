let handler = async (m, {conn}) => {
  let revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🍁 _. ᩭ✎Se restableció con éxito el link del grupo._\n🍂 _. ᩭ✎Link Nuevo: ${"https://chat.whatsapp.com/" + revoke} 🍁_`, m);
};
handler.command = ["resetlink", "revoke"];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
