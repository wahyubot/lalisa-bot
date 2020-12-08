exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `⛨-[ *MENU ${BotName}* ]-⛨
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

┄┄┄┄┄⚘꫶̣݄ꪳ݊  
╔════════════════════
║      🛡️ *WAHYU BOTS* 🛡️
╠════════════════════
║╭─⬚ *Menu/Perintah* ⬚───
║│➭ *#sticker*
║│➭ *#buatgrup*
║│➭ *#sholat*
║│➭ *#puisi1*
║│➭ *#puisi2*
║│➭ *#cerpen*
║│➭ *#cersex*
║│➭ *#quotes*
║│➭ *#quotes1*
║│➭ *#nulis [kata]*
║│➭ *#pantun*
║│➭ *#bucin*
║│➭ *#tts*
║│➭ *#ptl [cewek/cowok]*
║│➭ *#randomanime*
║│➭ *#infoanime*
║│➭ *#filmanime*
║│➭ *#ttsid [kata]*
║│➭ *#quran*
║│➭ *#info"
║│➭ *#say [kata]*
║│➭ *#donate*
║│➭ *#spamcall*
║│➭ *#gay*
║│➭ *#sholat*
║╰────────────────
╠════════════════════
║.     🛡️ *WAHYU BOTS* 🛡️
╠════════════════════
║╭──⬚ *Downloader* ⬚───
║│➭ *#yt [link]*
║│➭ *#ytmp3 [link]*
║│➭ *#ytmp4 [link]*
║│➭ *#ig [link]*
║│➭ *#fb [link]*
║│➭ *#twt [link]*
║│➭ *#wiki [query]*
║╰─────────────────
╠════════════════════
║♻️ Mau Donasi? Ketik #donate
║
║✅ Follow akun instagram admin 
║${instagramlu}
╠════════════════════
║⚠️ INFORMASI COVID-19 TERBARU!
║
║⚠️ POSITIF: *${corohelp.confirmed.value}* 😟
║⚠️ SEMBUH: *${corohelp.recovered.value}* 😄
║⚠️ MENINGGAL: *${corohelp.deaths.value}* 😥
║⚠️ UPDATE: *${corohelp.lastUpdate}* 😢
║
║♻️ _Tetap Jaga Kesehatan Selalu Pakai Masker!_
╠════════════════════
║♻️ Mau pasang iklan di *${BotName} ?*
║☎️ WA : *${whatsapplu}*
║
║⚠️ Gunakan dengan bijak ‼️
║⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
╠════════════════════
║ ⛨[ *POWERED BY ${BotName}* ]⛨`
╚════════════════════