import type { CollectionConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

// Corrisponde alle interfacce `Collezione`/`Artifact` di apps/web/src/data/museo.ts.
// Ogni reperto (item) ha un'immagine quadrata dedicata (preset square-1-1 della
// collection media), la collezione stessa un hero 16:9.
export const Collezioni: CollectionConfig = {
  slug: 'collezioni',
  labels: { singular: 'Collezione', plural: 'Collezioni' },
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
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'items',
      type: 'array',
      labels: { singular: 'Reperto', plural: 'Reperti' },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'object', type: 'textarea', localized: true, label: 'Descrizione estesa' },
        { name: 'provenance', type: 'text', localized: true, label: 'Provenienza' },
        { name: 'dating', type: 'text', label: 'Datazione' },
        { name: 'room', type: 'text', localized: true, label: 'Sala/sezione' },
        { name: 'bibliography', type: 'text', label: 'Bibliografia' },
      ],
    },
    { name: 'ordine', type: 'number', defaultValue: 0 },
  ],
  defaultSort: 'ordine',
}
