let toM = (a) => "@" + a.split("@")[0];
function handler(m, {groupMetadata}) {
  let ps = groupMetadata.participants.map((v) => v.id);
  let a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(
    `_. ᩭ✎Vamos a hacer algunas amistades 🍁_\n\n_. ᩭ✎Oye ${toM(a)} hablale al privado a_ ${toM(
      b
    )} _. ᩭ✎para que jueguen y se haga una amistad 🍁_\n\n_. ᩭ✎Las mejores amistades empiezan con un juego 🍁_`,
    null,
    {
      mentions: [a, b],
    }
  );
}
handler.help = ["amistad"];
handler.tags = ["main", "fun"];
handler.command = ["amigorandom", "amistad"];
handler.group = true;
export default handler;
