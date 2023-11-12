let handler = async (m, {}) => {
  m.reply(global.mc);
};
handler.command = /^(MC-SERVER|MC-SERVER|mc-server)$/i;

export default handler;

global.mc = `Se murió :v`;
