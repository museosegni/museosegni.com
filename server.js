// Avvio del sito su Hostinger (app Node.js, "Entry file" = server.js).
// Lo script "build" del package.json di radice produce il build standalone di
// apps/web con server e dipendenze minime; qui lo si avvia sulla PORT assegnata
// dalla piattaforma. HOSTNAME forzato: alcune piattaforme lo impostano al nome
// della macchina e il server standalone ascolterebbe solo su quell'interfaccia.
process.env.HOSTNAME = '0.0.0.0'
require('./apps/web/.next/standalone/apps/web/server.js')
