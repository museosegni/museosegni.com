import type { CollectionConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9, CARD_4_3 } from '../lib/imageDims'

// Corrisponde all'interfaccia `Sito` di apps/web/src/data/museo.ts. Usata sia
// dalla lista/dettaglio Itinerari sia — potenzialmente — da altre pagine che
// referenziano gli stessi siti archeologici (mura, ninfeo, acropoli...).
export const SitiArcheologici: CollectionConfig = {
  slug: 'siti-archeologici',
  labels: { singular: 'Sito archeologico', plural: 'Siti archeologici' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle'],
    description: 'Itinerari/siti archeologici della città (mura, ninfeo, acropoli, ecc.).',
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
      admin: {
        description:
          'Testo del sito. Può contenere tag HTML inline (es. <em>...</em>) già presenti nel testo originale.',
      },
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'gallery',
      type: 'array',
      labels: { singular: 'Immagine', plural: 'Galleria' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', admin: { description: CARD_4_3 } },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
    { name: 'ordine', type: 'number', defaultValue: 0 },
  ],
  defaultSort: 'ordine',
}
