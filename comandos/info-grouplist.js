let handler = async (m, {conn}) => {
  let txt = "";
  for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith("@g.us") && chat.isChats))
    txt += `\n._ ᩭ✎${await conn.getName(jid)}\n_. ᩭ✎${jid} [${chat?.metadata?.read_only ? "*Activo*" : "*Activo*"}]_\n\n`;
  m.reply(
    `_. ᩭ✎Lista de los Grupos donde esta Nightcore-Bot :_
${txt}
`.trim()
  );
};
handler.help = ["groups", "grouplist"];
handler.tags = ["info"];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i;
export default handler;
