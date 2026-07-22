import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9 } from '../lib/imageDims'

export const MuseoServizi: GlobalConfig = {
  slug: 'museo-servizi',
  label: 'Museo · Servizi',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'services',
      type: 'array',
      labels: { singular: 'Servizio', plural: 'Servizi' },
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: ['BookOpen', 'Archive', 'GraduationCap', 'Camera', 'Wifi', 'Accessibility'],
          admin: { description: 'Nome icona lucide-react usata dal frontend.' },
        },
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
    { name: 'researchSectionTitle', type: 'text', localized: true, defaultValue: 'Servizio per ricercatori' },
    { name: 'researchText', type: 'textarea', localized: true },
  ],
}
