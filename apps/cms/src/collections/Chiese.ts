import type { CollectionConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

// Corrisponde all'interfaccia `Chiesa` di apps/web/src/data/museo.ts.
export const Chiese: CollectionConfig = {
  slug: 'chiese',
  labels: { singular: 'Chiesa', plural: 'Chiese' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle'],
  },
  access: publicReadAuthWrite,
  fields: [
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'text', localized: true },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: { description: 'Può contenere tag HTML inline (es. <em>...</em>).' },
    },
    { name: 'history', type: 'textarea', localized: true },
    { name: 'features', type: 'textarea', localized: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'gallery',
      type: 'array',
      labels: { singular: 'Immagine', plural: 'Galleria' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
    { name: 'ordine', type: 'number', defaultValue: 0 },
  ],
  defaultSort: 'ordine',
}
