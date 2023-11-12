let handler = async (m, {conn, text}) => {
  if (!text) return m.reply("_. ᩭ✎Ingresa un texto_");
  const templateButtonsxd = [{index: 1, urlButton: {displayText: "Copy Text", url: "https://www.whatsapp.com/otp/copy/" + text}}];
  const templateMessage = {
    viewOnceMessage: {
      message: {
        templateMessage: {
          hydratedTemplate: {
            hydratedContentText: `_. ᩭ✎Da click en el boton de copy_`,
            hydratedFooterText: wm3,
            hydratedButtons: templateButtonsxd,
          },
        },
      },
    },
  };

  conn.relayMessage(m.chat, templateMessage, {});
};
handler.command = /^(copy|copytext)$/i;
export default handler;
