import { config as loadEnv } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

loadEnv({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../.env') })

import { getPayload } from 'payload'
import * as seed from './data'

// Seed idempotente: usa upsert per slug sulle collections e update diretto sui
// globals. Nessuna immagine viene creata qui (i campi upload restano vuoti):
// il caricamento delle immagini è compito del team dall'admin.
//
// L'import di payload.config è dinamico (dopo loadEnv) perché in ESM gli import
// statici sono hoisted sopra qualunque codice top-level: un import statico
// leggerebbe process.env.PAYLOAD_SECRET/DATABASE_URL prima che dotenv li imposti.
async function run() {
  const { default: config } = await import('../payload.config')
  const payload = await getPayload({ config })

  payload.logger.info('Seed: siti-archeologici')
  for (const [i, sito] of seed.sitiArcheologici.entries()) {
    const existing = await payload.find({
      collection: 'siti-archeologici',
      where: { slug: { equals: sito.slug } },
      limit: 1,
    })
    const data = { ...sito, ordine: i }
    if (existing.docs[0]) {
      await payload.update({ collection: 'siti-archeologici', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'siti-archeologici', data })
    }
  }

  payload.logger.info('Seed: chiese')
  for (const [i, chiesa] of seed.chiese.entries()) {
    const existing = await payload.find({ collection: 'chiese', where: { slug: { equals: chiesa.slug } }, limit: 1 })
    const data = { ...chiesa, ordine: i }
    if (existing.docs[0]) {
      await payload.update({ collection: 'chiese', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'chiese', data })
    }
  }

  payload.logger.info('Seed: edifici')
  for (const [i, edificio] of seed.edifici.entries()) {
    const existing = await payload.find({ collection: 'edifici', where: { slug: { equals: edificio.slug } }, limit: 1 })
    const data = { ...edificio, ordine: i }
    if (existing.docs[0]) {
      await payload.update({ collection: 'edifici', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'edifici', data })
    }
  }

  payload.logger.info('Seed: collezioni')
  for (const [i, collezione] of seed.collezioni.entries()) {
    const existing = await payload.find({
      collection: 'collezioni',
      where: { slug: { equals: collezione.slug } },
      limit: 1,
    })
    const data = { ...collezione, ordine: i }
    if (existing.docs[0]) {
      await payload.update({ collection: 'collezioni', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'collezioni', data })
    }
  }

  payload.logger.info('Seed: globals')
  await payload.updateGlobal({ slug: 'home', data: seed.home })
  await payload.updateGlobal({ slug: 'museo', data: seed.museo })
  await payload.updateGlobal({ slug: 'museo-storia', data: seed.museoStoria })
  await payload.updateGlobal({ slug: 'museo-sede', data: seed.museoSede })
  await payload.updateGlobal({ slug: 'museo-servizi', data: seed.museoServizi as never })
  await payload.updateGlobal({ slug: 'museo-libreria', data: seed.museoLibreria })
  await payload.updateGlobal({ slug: 'museo-contatti', data: seed.museoContatti })
  await payload.updateGlobal({ slug: 'pau', data: seed.pau as never })
  await payload.updateGlobal({ slug: 'site-settings', data: seed.siteSettings as never })

  payload.logger.info('Seed completato.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
