let handler = async m => m.reply(`
┌─〔 *YAHYA17 STORE* 〕
├Jangan Lupa Mampir Ke Yahya17 Store
├ Yahya17 Store Menjual Produk Yg Berkualitas Dan Murah
├ Berbagai Macam Pilihan Produk & Jasa
├ Pengen Order?: wa.me/6285784715971
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['Store']
handler.tags = ['Store']
handler.command = /^Store$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
