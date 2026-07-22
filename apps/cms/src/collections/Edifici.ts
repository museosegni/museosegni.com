import type { CollectionConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9, GALLERY_MIXED } from '../lib/imageDims'

// Corrisponde all'interfaccia `Edificio` di apps/web/src/data/museo.ts.
export const Edifici: CollectionConfig = {
  slug: 'edifici',
  labels: { singular: 'Edificio', plural: 'Edifici' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle'],
  },
  access: publicReadAuthWrite,
  fields: [
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'history', type: 'textarea', localized: true },
    { name: 'architecture', type: 'textarea', localized: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'gallery',
      type: 'array',
      labels: { singular: 'Immagine', plural: 'Galleria' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', admin: { description: GALLERY_MIXED } },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
    { name: 'ordine', type: 'number', defaultValue: 0 },
  ],
  defaultSort: 'ordine',
}
