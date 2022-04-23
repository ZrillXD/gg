let handler = async (m, { conn }) => {
let caption = `*SAMA-SAMA🗿*`

conn.sendButton( m.chat, caption, `©zifabotz`, `menu`, `.?`, m)

       }
       
handler.customPrefix = /^(mksh|terimakasih|thnk|thx|tq|thenkyou|thank|mksih)/i
handler.command = new RegExp
module.exports = handler
