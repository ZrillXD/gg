let handler = async (m, { conn }) => {
let caption = `*HALO BANG-SAD*`

conn.sendButton( m.chat, caption, `Â©ï¸ zrill`, `BISA CUYâð`, `.ð`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
