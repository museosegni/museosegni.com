import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

export const MuseoStoria: GlobalConfig = {
  slug: 'museo-storia',
  label: 'Museo · Storia',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
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
        { name: 'image', type: 'upload', relationTo: 'media' },
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
