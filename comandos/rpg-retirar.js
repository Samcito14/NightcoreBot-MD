import db from '../lib/database.js';

let handler = async (m, { args }) => {
   
   let user =  global.db.data.users[m.sender]; if (!args[0]) return m.reply('_. ᩭ✎Ingresa la cantidad de dinero que deseas Retirar_');
   if (args[0] == '--all') {
      let count = parseInt(user.bank);
      user.bank -= count * 1
      user.dolares += count * 1
      await m.reply(`_. ᩭ✎Retiraste ${count} de dinero del Banco._ 💸`);
      return !0
   }
   if (!Number(args[0])) return m.reply('_. ᩭ✎La cantidad debe ser un Numero._');
   let count = parseInt(args[0]);
   if (!user.bank) return m.reply('_. ᩭ✎No tienes dinero en Banco.')
   if (user.bank < count) return m.reply(`_. ᩭ✎Solo tienes ${user.bank} de dinero en el Banco._`)
   user.bank -= count * 1
   user.dolares += count * 1
   await m.reply(`_. ᩭ✎Retiraste ${count} de dinero del Banco._ 💸`)
}

handler.help = ['withdraw']
handler.tags = ['economy']
handler.command = ['withdraw', 'retirar'] 

export default handler
