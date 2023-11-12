var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "ytmp4" || command == "ytvmp4") {
    let mp4 = `_. ᩭ✎este comando cambio, ahora es :_
_${usedPrefix}videomp4_`.trim();

    m.reply(mp4);
  }

  if (command == "play") {
    var play = `_. ᩭ✎este comando cambio, ahora es :_
_${usedPrefix}musica_`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "play", "", ""];
handler.tags = ["internet"];
export default handler