import { createHash } from 'crypto' 
 let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
 let handler = async function (m, { conn, text, usedPrefix, command }) { 
   let user = global.db.data.users[m.sender] 
   let name2 = conn.getName(m.sender) 
   if (user.registered === true) throw `_. ᩭ✎Ya estás registrado_\n\n_. ᩭ✎Quiere volver a registrarse?_\n\n _. ᩭ✎Use este comando para eliminar su registro_ \n*_${usedPrefix}unreg <Número de serie>_*` 
   if (!Reg.test(text)) throw `_. ᩭ✎Formato incorrecto_\n\n _. ᩭ✎Uso del comando : ${usedPrefix + command} nombre.edad_\n_🍁Ejemplo : ${usedPrefix + command}* Jesus.16` 
   let [_, name, splitter, age] = text.match(Reg) 
   if (!name) throw '_. ᩭ✎El nombre no puede estar vacío_' 
   if (!age) throw '_. ᩭ✎La edad no puede estar vacía_' 
   if (name.length >= 30) throw '_. ᩭ✎El nombre es demasiado largo_'  
   age = parseInt(age) 
   if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot' 
   if (age < 5) throw '🚼  hay un abuelo bebé jsjsj ' 
   user.name = name.trim() 
   user.age = age 
   user.regTime = + new Date 
   user.registered = true 
   let sn = createHash('md5').update(m.sender).digest('hex') 
   m.reply(` 
*╭─ ✧ ── Verificacion ── ✧ ──┓*
*│ 🍁 Nombre:* ${name} 
*│ 🍁 Edad:* ${age} años
*│ 🍁 Numero de serie* : ${sn}
*╰─ ✧ ── ✦ ── ✧ ── ✧ ──┛*

_. ᩭ✎Use .menu para ver el Menu_
 `.trim()) 
 } 
 handler.help = ['reg'].map(v => v + ' <nombre.edad>') 
 handler.tags = ['rg'] 
  
 handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']  
  
 export default handler
         
