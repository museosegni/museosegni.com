import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroTitle', type: 'text', localized: true, defaultValue: 'Museo Archeologico' },
    { name: 'heroTitleAccent', type: 'text', localized: true, defaultValue: 'Comunale di Segni' },
    { name: 'heroSubtitle', type: 'textarea', localized: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroCtaLabel', type: 'text', localized: true, defaultValue: 'Esplora gli itinerari' },
    { name: 'introTitle', type: 'text', localized: true, defaultValue: 'Scopri il Museo' },
    { name: 'introText', type: 'textarea', localized: true },
    {
      name: 'featuredCards',
      type: 'array',
      labels: { singular: 'Card in evidenza', plural: 'Card in evidenza' },
      admin: {
        description:
          'Le 3 card della home (link verso itinerario/collezione/museo). Il collegamento resta fisso nel template, qui si edita solo testo e immagine.',
      },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    { name: 'newsSectionTitle', type: 'text', localized: true, defaultValue: 'News e Eventi' },
    {
      name: 'newsItems',
      type: 'array',
      labels: { singular: 'News', plural: 'News' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'date', type: 'text' },
        { name: 'excerpt', type: 'textarea', localized: true },
      ],
    },
  ],
}
