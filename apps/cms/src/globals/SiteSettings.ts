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
