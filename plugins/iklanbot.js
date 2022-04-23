let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE ZRILLBOTZ*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE Zrillbotz🛒',
        description: kontol,
        sections:  [{title: "STORE Zrillbotz", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewasat"},
        {title: 'Jasa run mursid', description: "jasa run bot", rowId:".runbotmursid"},
        {title: 'RULES', description: "rules zrillbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
