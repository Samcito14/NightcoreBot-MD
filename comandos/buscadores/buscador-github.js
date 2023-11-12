import fetch from "node-fetch";
var handler = async (m, {conn, text, usedPrefix, command}) => {
  try {
    if (!text) throw `*✘error✘*\n\n_. ᩭ✎Use el comando Correctamente_\n\n🍁 _Ejemplo: ${usedPrefix + command} NightcoreBot-MD_`;
    const res = await fetch(global.API("https://api.github.com", "/search/repositories", {q: text}));
    const json = await res.json();
    if (res.status !== 200) throw json;
    const str = json.items
      .map((repo, index) => {
        return `
╭─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┓
▢ 📦 Resultado: ${1 + index}
▢ 📎 Link: ${repo.html_url}
▢ 🍁 Creador: ${repo.owner.login}
▢ 🔍 Nombre: ${repo.name}
▢ 📅 Creado: ${formatDate(repo.created_at)}
▢ ⏱️ Actualizado: ${formatDate(repo.updated_at)}
▢ 👀 Visitas: ${repo.watchers}
▢ ⚜️ Bifurcado: ${repo.forks}
▢ ⭐ Estrellas: ${repo.stargazers_count}
▢ 🎭 Issues: ${repo.open_issues}
▢ 📓 Descripción: ${repo.description ? `${repo.description}` : "Sin Descripción"}
▢ 🥃 Clone: ${repo.clone_url}
╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛
`.trim();
      })
      .join("\n\n─────────────────\n\n");
    var doc = [
      "pdf",
      "zip",
      "vnd.openxmlformats-officedocument.presentationml.presentation",
      "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    var document = doc[Math.floor(Math.random() * doc.length)];
    let buttonMessage = {
      document: {url: `https://github.com/Jesus-ofc33`},
      mimetype: `application/${document}`,
      fileName: `${wm}`,
      fileLength: 99999999999999,
      pageCount: 200,
      contextInfo: {
        forwardingScore: 200,
        isForwarded: true,
        externalAdReply: {
          mediaUrl: "https://github.com/Jesus-ofc33",
          mediaType: 2,
          previewType: "pdf",
          title: `• _Resultados Encontrados🔎_`,
          body: global.author,
          thumbnail: await (await fetch(json.items[0].owner.avatar_url)).buffer(),
          sourceUrl: "https//wa.me/584166718372",
        },
      },
      caption: str,
      footer: `_✘error✘_\n\n_. ᩭ✎Use el comandó correctamente\n\n_🍁 Ejemplo : ${usedPrefix}gitclone 〔 link 〕._`, headerType: 6,
    };
    conn.sendMessage(m.chat, buttonMessage, {quoted: m});
  } catch {
    m.reply("*✘error✘*");
  }
};
handler.help = ["githubsearch"].map((v) => v + "");
handler.tags = ["search"];

handler.command = /^(githubsearch)$/i;
handler.register = false;

export default handler;

function formatDate(n, locale = "es") {
  let d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
