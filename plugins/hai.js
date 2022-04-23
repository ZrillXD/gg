let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA ZRILBOTZZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ zrill`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|zril|zifa|zifabot|zifabotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
