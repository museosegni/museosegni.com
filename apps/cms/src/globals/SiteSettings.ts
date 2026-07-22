import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

// Dati di contatto/orari condivisi da più pagine (Home, Museo, Museo/Contatti),
// centralizzati qui per non doverli ripetere/disallineare in ogni global.
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Impostazioni sito',
  access: publicReadAuthWrite,
  fields: [
    { name: 'address', type: 'text', defaultValue: 'Via Lauri 1, 00037 Segni (RM)' },
    { name: 'phone', type: 'text', defaultValue: '+39 069 72 600 72' },
    { name: 'email', type: 'text', defaultValue: 'museo@comune.segni.rm.it' },
    {
      name: 'emails',
      type: 'array',
      labels: { singular: 'Email', plural: 'Email' },
      admin: {
        description: 'Elenco completo dei contatti email (museo, direzione, associazione amici del museo, ecc.).',
      },
      fields: [
        { name: 'label', type: 'text', required: true, localized: true, admin: { description: 'Es. "Museo", "Direzione", "Amici del Museo"' } },
        { name: 'email', type: 'text', required: true },
      ],
    },
    {
      name: 'notices',
      type: 'array',
      labels: { singular: 'Avviso', plural: 'Avvisi' },
      admin: {
        description:
          'Avvisi su chiusure/orari straordinari (es. "Oggi museo chiuso", "Ferragosto: chiuso", "Natale: aperto solo la mattina"). Disattiva un avviso invece di cancellarlo per poterlo riattivare l’anno successivo.',
      },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true, admin: { description: 'Es. "Ferragosto", "Natale", "Chiusura straordinaria"' } },
        { name: 'description', type: 'textarea', localized: true, admin: { description: 'Es. "Chiuso" oppure "Aperto solo la mattina, 9.00 - 13.00"' } },
        { name: 'date', type: 'text', admin: { description: 'Facoltativo, es. "15 agosto" o "25 dicembre 2026"' } },
        { name: 'active', type: 'checkbox', defaultValue: true, admin: { description: 'Deseleziona per nascondere l’avviso senza eliminarlo.' } },
      ],
    },
    {
      name: 'openingHours',
      type: 'array',
      labels: { singular: 'Fascia oraria', plural: 'Orari' },
      fields: [
        { name: 'days', type: 'text', localized: true },
        { name: 'hours', type: 'text' },
        { name: 'closed', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'holidayNote',
      type: 'text',
      localized: true,
      defaultValue: 'Chiuso il 25 dicembre, 1 gennaio e 1 maggio. Orari speciali durante le festività.',
    },
    { name: 'ticketPrice', type: 'text', localized: true, defaultValue: 'Gratuito' },
    {
      name: 'howToArrive',
      type: 'array',
      labels: { singular: 'Indicazione', plural: 'Come arrivare' },
      fields: [
        { name: 'mode', type: 'select', options: ['car', 'train'], required: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
    { name: 'regolamentoPdf', type: 'upload', relationTo: 'media', label: 'Regolamento (PDF)' },
    { name: 'cartaServiziPdf', type: 'upload', relationTo: 'media', label: 'Carta dei Servizi (PDF)' },
  ],
}
