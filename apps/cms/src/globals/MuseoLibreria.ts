import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9 } from '../lib/imageDims'

export const MuseoLibreria: GlobalConfig = {
  slug: 'museo-libreria',
  label: 'Museo · Libreria',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'books',
      type: 'array',
      labels: { singular: 'Pubblicazione', plural: 'Pubblicazioni' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'author', type: 'text' },
        { name: 'price', type: 'text' },
      ],
    },
    {
      name: 'merchandise',
      type: 'array',
      labels: { singular: 'Articolo', plural: 'Merchandising' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
        { name: 'price', type: 'text' },
      ],
    },
  ],
}
