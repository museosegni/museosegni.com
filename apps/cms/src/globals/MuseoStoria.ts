import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9, CARD_4_3 } from '../lib/imageDims'

export const MuseoStoria: GlobalConfig = {
  slug: 'museo-storia',
  label: 'Museo · Storia',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'sections',
      type: 'array',
      labels: { singular: 'Sezione', plural: 'Sezioni' },
      admin: { description: 'Es. "La Ricerca e la Nascita", "Divulgazione e Futuro".' },
      fields: [
        { name: 'heading', type: 'text', required: true, localized: true },
        {
          name: 'body',
          type: 'textarea',
          localized: true,
          admin: { description: 'Paragrafi separati da riga vuota.' },
        },
      ],
    },
    {
      name: 'sideImages',
      type: 'array',
      labels: { singular: 'Immagine', plural: 'Immagini laterali' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', admin: { description: CARD_4_3 } },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
    {
      name: 'sale',
      type: 'array',
      labels: { singular: 'Sala', plural: 'Percorso espositivo (sale)' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
      ],
    },
  ],
}
