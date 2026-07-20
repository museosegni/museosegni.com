import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

export const MuseoLibreria: GlobalConfig = {
  slug: 'museo-libreria',
  label: 'Museo · Libreria',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
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
