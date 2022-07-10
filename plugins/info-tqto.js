/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = 'BIG THANKS TO\n\nNurutomo\nhttps://github.com/Nurutomo\nElyas\nhttps://github.com/Paquito1923\nHyzer Official\nhttps://github.com/Hyzerr'
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tq vvvvto', 'tevvvvam']
handler.tags = ['info']
handler.command = /^(tqvvto|teavvm)$/i

module.exports = handler
