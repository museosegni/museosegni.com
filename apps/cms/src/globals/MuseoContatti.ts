import type { GlobalConfig } from 'payload'

import { publicReadAuthWrite } from '../access/isLoggedIn'

// Contatti/orari/come-arrivare veri e propri vivono in `site-settings` (condivisi
// con Home e Museo). Questo global copre solo ciò che è specifico della pagina.
export const MuseoContatti: GlobalConfig = {
  slug: 'museo-contatti',
  label: 'Museo · Contatti',
  access: publicReadAuthWrite,
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      defaultValue: 'Informazioni pratiche per pianificare la tua visita',
    },
  ],
}
