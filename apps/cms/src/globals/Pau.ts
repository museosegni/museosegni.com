import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

export const Pau: GlobalConfig = {
  slug: 'pau',
  label: 'PAU Segni Città-Museo',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroTitle', type: 'text', localized: true, defaultValue: 'PAU' },
    { name: 'heroTitleAccent', type: 'text', localized: true, defaultValue: 'Segni Città-Museo' },
    { name: 'heroSubtitle', type: 'textarea', localized: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'introHeading', type: 'text', localized: true, defaultValue: 'Il concetto di museo diffuso' },
    {
      name: 'introText',
      type: 'textarea',
      localized: true,
      admin: { description: 'Paragrafi separati da riga vuota.' },
    },
    {
      name: 'objectives',
      type: 'array',
      labels: { singular: 'Obiettivo', plural: 'Obiettivi del PAU' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
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
  ],
}
