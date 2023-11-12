import axios from 'axios';
 import fetch from 'node-fetch';
 import cheerio from 'cheerio';
 import { mediafiredl } from '@bochilteam/scraper';
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
 if (!args[0]) throw `*✘error✘* _. ᩭ✎Use el comandó correctamente_\n\n_Ejemplo : ${usedPrefix + command} https://www.Mediafire.com/file/Five/Nights/At/Freddys/1🍁_`;
 try{ 
 let resEX = await mediafiredl(args[0]);
 let captionES = ` 
 ╭─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┓
 ❒ 🍁 *nombre:* ${resEX.filename};
 ❒ 🍁 *peso:* ${resEX.filesizeH};
 ❒ 🍁 *tipo:* ${resEX.ext};
  ╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛
 ➢ _. ᩭ✎Enviando archivo, espere un momento_
 `.trim();
 m.reply(captionES) 
 await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, { mimetype: resEX.ext, asDocument: true });    
 } catch { 
 try {   
 let res = await mediafireDl(args[0]) 
 let { name, size, date, mime, link } = res 
 let caption = `
 ╭─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┓
 ❒ 🍁 *nombre:* ${resEX.filename};
 ❒ 🍁 *peso:* ${resEX.filesizeH};
 ❒ 🍁 *tipo:* ${resEX.ext};
  ╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛
 ➢ _. ᩭ✎Enviando archivo, espere un momento_
 `.trim();
 await m.reply(caption);
 await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true });
 } catch {   
 await m.reply('**✘error✘* _. ᩭ✎Use el comandó correctamente_\n\n_Ejemplo : ${usedPrefix + command} https://www.Mediafire.com/file/Five/Nights/At/Freddys');
 }}} 
 handler.help = ['mediafire'].map(v => v + ' <url>');
 handler.tags = ['downloader'];
 handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
handler.dolares = 8;
 export default handler 
  
 async function mediafireDl(url) { 
    const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`) 
    const $ = cheerio.load(res.data) 
    const link = $('#downloadButton').attr('href') 
    const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','') 
    const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text() 
    const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','') 
    let mime = '' 
    let rese = await axios.head(link) 
    mime = rese.headers['content-type'] 
    return { name, size, date, mime, link } 
 }