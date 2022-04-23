let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: 'group zifa1', description: "gabung group zifabotz pertama", rowId:".zifa1"},
        {title: 'group zifa2', description: "gabung group zifabotz kedua", rowId:".zifa2"},
        {title: 'group haori', description: "group haori", rowId:".haori1"},
        {title: 'group nekel', description: "group nekel", rowId:".nekel1"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['groupbot']
module.exports = handler
