let handler = async (m, {conn}) => {
  let pp = "./Menu2.jpg";
  try {
  } catch (e) {
  } finally {
    //let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let name = await conn.getName(m.sender);
    let str = `
©≥©§ ? ©§©§ ? ©§©§°∫ _?Audios?_ °ª©§©§ ? ©§©§ ? ©§©§®[
©ß _Quien es tu sempai botsito 7w7_
©ß _Te diagnostico con gay_
©ß _A nadie le importa_
©ß _Fiesta del admin_
©ß _Fiesta del administrador_ 
©ß _Vivan los novios_
©ß _Feliz cumplea√±os_
©ß _No digas mamadas Mariyein_
©ß _Noche de paz_
©ß _Buenos dias_
©ß _Cambiate a Movistar 
©ß _Bienvenido_
©ß _Calla fan de bts_
©ß _Las reglas del grupo_
©ß _Buenos tardes_
©ß _Buenos noches_
©ß _Audio hentai_
©ß _Chica lgante_
©ß _Feliz navidad_
©ß _Vete a la vrg_
©ß _Pasa pack Bot_
©ß _Atencion grupo_
©ß_Marica quien_
©ß _Murio el grupo_
©ß _Oh me vengo_
©ß _tio que rico_
©ß _Viernes_
©ß _Baneado_
©ß _Sexo_
©ß _Hola_
©ß _Un pato_
©ß_Nyanpasu_
©ß _Te amo_
©ß _Yamete_
©ß _Ba√±ate_
©ß _Es puto_
©ß _La biblia_
©ß _Onichan_
©ß _Mierda de Bot_
©ß _Siuuu_
©ß _Epico_
©ß _wtf_
©ß _Shitpost_
©ß _Rawr_
©ß _UwU_
©ß _:(
©ß _a_
®t©§ ? ©§©§ ? ©§©§ ? ©§©§ ? ©§©§ ? ©§©§©ø
`.trim();
    conn.sendHydrated(m.chat, str, wm, pp, "https://github.com/Jesus-ofc33", "?", null, null, [["?", "/menu"]], m);
  }
};
handler.help = ["menu2", "help2", "?2", "menuaudios"];
handler.tags = ["main"];
handler.command = /^(menu2|audios|men√∫2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i;
handler.fail = null;
export default handler;
