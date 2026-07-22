import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'
import { HERO_16_9 } from '../lib/imageDims'

export const Museo: GlobalConfig = {
  slug: 'museo',
  label: 'Museo (pagina indice)',
  access: publicReadAuthWrite,
  fields: [
    { name: 'heroTitle', type: 'text', localized: true, defaultValue: 'Il Museo Archeologico' },
    { name: 'heroSubtitle', type: 'textarea', localized: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media', admin: { description: HERO_16_9 } },
    {
      name: 'intro',
      type: 'textarea',
      localized: true,
      admin: { description: 'Paragrafi separati da riga vuota, come nel sito attuale.' },
    },
  ],
}
