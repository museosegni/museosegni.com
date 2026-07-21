import type { Payload } from 'payload'
import * as seed from './data'

// Seed idempotente: usa upsert per slug sulle collections e update diretto sui
// globals. Nessuna immagine viene creata qui (i campi upload restano vuoti):
// il caricamento delle immagini è compito del team dall'admin. Condiviso tra
// lo script CLI (seed/run.ts) e la route /api/seed (per il primo popolamento
// in produzione, dove non è possibile lanciare comandi locali sul database).
export async function seedContent(payload: Payload) {
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
}
