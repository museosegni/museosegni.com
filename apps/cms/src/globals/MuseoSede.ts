import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { CARD_4_3, BANNER_21_9 } from '../lib/imageDims'

export const MuseoSede: GlobalConfig = {
  slug: 'museo-sede',
  label: 'Museo · Sede',
  access: publicReadAuthWrite,
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      defaultValue: 'Palazzo della Comunità: un gioiello del XIII secolo nel cuore di Segni',
    },
    { name: 'heading', type: 'text', localized: true, defaultValue: 'Il Palazzo della Comunità' },
    {
      name: 'body',
      type: 'textarea',
      localized: true,
      admin: { description: 'Paragrafi separati da riga vuota.' },
    },
    { name: 'exteriorImage', type: 'upload', relationTo: 'media', admin: { description: CARD_4_3 } },
    {
      name: 'factCards',
      type: 'array',
      labels: { singular: 'Scheda', plural: 'Schede' },
      admin: { description: 'Es. "XIII Secolo", "Centro Storico", "Architettura".' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
      ],
    },
    { name: 'interiorImage', type: 'upload', relationTo: 'media', admin: { description: BANNER_21_9 } },
  ],
}
