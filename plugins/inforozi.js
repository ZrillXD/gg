let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Zrill
║│➸ ```UMUR``` : 16 Th
║│➸ ```ASAL``` : JATIM
║│➸ ```OFFICIAL GRUP``` :
https://wa.me/message/R636HYY3ADQNM1
║│➸ ```ISTAGRAM``` : zrillxd.12
║│➸ ```WHATSAPP``` : http://wa.me/6282332222307
╰────────❉
`.trim(), m)
}

handler.help = ['infoZrill']
handler.tags = ['main', 'utama']
handler.command = /^(infoZrill)$/i

handler.exp = 150

module.exports = handler
