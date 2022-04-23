let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*CARA BUAT BOT:*
╭─────[ *PENGUMUMAN* ]─────✧
┴
│ tutorial tidak free (gratis)
│ hanya melayani yang no *PHP*
│ payment*GOPAY!*
│ silahkan pilih cara bot di bawah
│ harap tidak spam no tersebut!!!!
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "cara membuat bot", rows: [
        {title: 'tutorial replit', description: "tutorial? Cht nomor yg udah bot kirim", rowId:".tutorreplit"},
        {title: 'tutotial heroku', description: "tutorial? Cht nomor yg udah bot kirim", rowId:".tutorheroku"},
        {title: 'Donasi', description: "Donasi agar selalu online", rowId:".donasi"},
        {title: 'halaman menu', description: "halaman semula", rowId:".menu"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(tutorial|tutorialbuatbot)$/i
handler.help = ['cara buat bot']
module.exports = handler
