let handler = async (m, {conn, text}) => {
  if (!text) throw "No Text";
  conn.sendFile(
    m.chat,
    global.API("https://some-random-api.com", "/canvas/youtube-comment", {
      avatar: await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://telegra.ph/file/43920d6564bb54befc065.jpg"),
      comment: text,
      username: conn.getName(m.sender),
    }),
    "error.png",
    "*xd*",
    m
  );
};
handler.help = ["ytcomment <comment>"];
handler.tags = ["maker"];
handler.command = /^(ytcomment)$/i;
export default handler;
