import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `_❕ Haga petición, ejemplo :_
_${usedPrefix + command} Musicas mas god de Nightcore_\n_Si quieres en modo hard_ :
_${usedPrefix + command} cuento donde violen a dixi salvajemente*`
try {
let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
await conn.sendPresenceUpdate('composing', m.chat)
var syms = `${jailbreak}`


let diluxgpt = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms}&apikey=fg-dylux`)   
 let gptilux = await diluxgpt.json()
 await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
        },
        caption: gptilux,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://wa.me/584166718372",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
let grtp = `${IAR2.response}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
        },
        caption: grtp,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://wa.me/584166718372",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
let chatgt = `${jjJson.data.data.trim()}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
        },
        caption: chatgt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://wa.me/584166718372",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
let gpt = `${hasill.result}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
        },
        caption: gpt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {        
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
handler.dolares = 3
export default handler
