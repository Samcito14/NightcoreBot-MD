import moment from "moment-timezone";
let handler = async (m, {conn, usedPrefix: _p}) => {
  try {
    let pp = "./Nightcore2.jpg";
    m.reply(`╭──────────────────  
│⏱️ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎... 
╰──────────────────`);

    let terminoA = `
*_Toda la información que se mencione aquí no excluye al Propietario del Bot al uso de NightcoreBot*


*_No me hago responsable del desconocimiento que tenga por parte de esta información._* 
*TÉRMINOS DE PRIVACIDAD*
1- Soy consciente del constante uso que le pueda dar al Bot, y también Garantizamos que la información como (imágenes, vídeos, enlaces, ubicación, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Número(s) Oficial(es) No son ni serán Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._

2- Lo que realicé con el BOT queda solo en Usted ya que en Número(s) Oficial(es) El Chat se Borra cada 24 Horas, según el tiempo de Mensajes Temporales de WhatsApp._

3- Es posible que en Número(s) Oficial(es) el Bot no esté Activado las 24 Horas de los 7 días de la Semana, eso no implica que no lo esté o que Propietarios NO OFICIALES puedan Hacerlo._

4- El chat anónimo del comando #start, valga la redundancia no mostrará ningún dato de los Usuarios por parte de nightcoreBot. Eso no implica que las personas que hagan uso de esta función puedan dar a conocer sus datos. en Número(s) Oficial(es)._

5- Los Datos que Obtenga NightcoreBot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en Óptimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensación Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas)._

6- No me hago responsable si Hay alteraciones de este Bot no siendo Número(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._

7- La función Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales._

*TÉRMINOS DE USO* 
_- La información que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirá saber los Términos y Condiciones de tal forma que no habrá incovenientes al hacer un uso Particular de las Funciones del Bot._

_- El Bot contiene Material que solo puede ser visible para mayores de 18 Años, No me hago responsable si no cumple con la edad mínima para usar el Material para Adultos._

_- Las imágenes, Vídeos y Audios que tenga este Bot son de uso Público, Pero se considerará Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o información relevante._

_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminación u campañas sin fundamentos._

_- Si ha recibido un Comunicado Oficial siendo Número(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._

_- El Bot oficial no se hace responsable del Uso que usted haga con la función "Sub Bot"._
*CONDICIONES DE USO*

_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo Número(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._

_- NO usar el Bot siendo Número(s) Oficial(es) para llevar a cabo alguna acción hostil que pueda verse comprometida el Funcionamiento del BOT._

_- NO use el comando de SPAM repetidamente, ya que Provocará un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._

_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarán las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de NightcoreBot._

*Este es el Repositorio Oficial*
*https://github.com/Jesus-ofc33/NightcoreBot-MD*

*Cuenta oficial de asistencia - Whatsapp*
~ _Solo en esta Cuenta Respondo si tiene Dudas, Preguntas o Necesita Ayuda sobre NightcoreBot, También puede Comunicarse en Caso de Temas de Colaboración_
*Wa.me/584166718372*
*~ Muchas Gracias Por tomarte el tiempo en informate sobre nightcoreBot
`.trim();
conn.sendFile(m.chat, pp, 'dorrat.jpg', terminoA)
   // await await conn.sendButton(m.chat, terminoA, wm, pp, [["𝘿𝙊𝙉𝘼𝙍", `#donar`]], m);
    m.reply(`si no quieres leer el texto tan largo solo ignoralo :v`);
    /*await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {

type: 'audioMessage', 

ptt: true})*/
  } catch {
    conn.reply(m.chat, "*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*", m);
  }
};

handler.command =
  /^(terminos|términos|términos, condiciones y privacidad|terminos, condiciones y privacidad|términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones)$/i;

handler.exp = 50;

handler.fail = null;

export default handler;

function ucapan() {
  const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas";

  if (time >= 4) {
    res = "🌇Buenos Días";
  }

  if (time >= 11) {
    res = "🏙️Buenas Tardes";
  }

  if (time >= 15) {
    res = "🌆Buenas tardes";
  }

  if (time >= 17) {
    res = "🌃Buenas noches";
  }

  return res;
}
