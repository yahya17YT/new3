/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis ðŸ‘ŽðŸ—¿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
 *[SOSIAL MEDIA BOT]* 
YOUTUBE:
 • youtube.com/channel/UCYZ3s2hcv-3uYuR-BuO6wqg
ISTAGRAM: 
 • instagram.com/yahya17_ch
GRUP WA
 • chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH
NOMOR WA
 • wa.me/6285784715971
*Jangan Lupa Di Subscribe*
 `
conn.sendBut(m.chat, esce, wm3, 'Flow', 'Jangan Lupa Flow', m) 
}
handler.help = ['smbot', 'sosialmediabot']
handler.tags = ['info']
handler.command = /^(smbot|sosialmediabot)$/i

module.exports = handler
