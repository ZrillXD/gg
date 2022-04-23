let handler = async (m, { conn }) => {
let caption = `*HALO BANG-SAD*`

conn.sendButton( m.chat, caption, `©️ zrill`, `BISA CUY☝😅`, `.👍`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
