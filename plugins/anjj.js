let handler = async (m, { conn }) => {
let caption = `*TOXIC MULU, INGAT MATI NGENTOD😠*`

conn.sendButton( m.chat, caption, `©️ Zrill`, `YANG PENCET ANAK ANJING`, `.👍`, m)

       }
       
handler.customPrefix = /^(anjing|anjj|anj|babi|bab1|ngentod|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh|memek|ewe|ewek|pepek|asu|asuk|asw)/i
handler.command = new RegExp
module.exports = handler
