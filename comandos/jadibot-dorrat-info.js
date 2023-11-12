async function handler(m, {usedPrefix}) {
  let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.state !== "close").map((conn) => conn.user)])];
  await m.reply(
    "._ ᩭ✎Aquí tienes la lista de algunos sub bots_\n\n_. ᩭ✎Puedes contactarlos para ver si se unen a tu grupo_\n\n_. ᩭ✎eso si :_\n_. ᩭ✎1.- Se amable ✅_\n_. ᩭ✎2.- No insistas ni discutas ✅_\n\n_. ᩭ✎️Si le aparece el siguiente texto en blanco es que no hay ningún sub bot disponible en este momento, asi que tendra que inténtarlo mas tarde_\n\n_. ᩭ✎Nota : ️Ellos son personas que no conosco.. por lo que yo Jesus - ofc no me hago Responsable de lo que pueda ocurrir ahi_"
  );
  await m.reply(users.map((v) => " ᩭ✎ wa.me/" + v.jid.replace(/[^0-9]/g, "") + `?text=${usedPrefix}menu (${v.name})`).join("\n"));
}
handler.command = handler.help = ["listjadibot", "bots", "subsbots"];
handler.tags = ["jadibot"];

export default handler;
