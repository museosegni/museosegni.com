import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from '@payloadcms/translations/languages/en'
import { it } from '@payloadcms/translations/languages/it'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SitiArcheologici } from './collections/SitiArcheologici'
import { Chiese } from './collections/Chiese'
import { Edifici } from './collections/Edifici'
import { Collezioni } from './collections/Collezioni'
import { Home } from './globals/Home'
import { Museo } from './globals/Museo'
import { MuseoStoria } from './globals/MuseoStoria'
import { MuseoSede } from './globals/MuseoSede'
import { MuseoServizi } from './globals/MuseoServizi'
import { MuseoLibreria } from './globals/MuseoLibreria'
import { MuseoContatti } from './globals/MuseoContatti'
import { Pau } from './globals/Pau'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Museo di Segni — Amministrazione',
      titleSuffix: ' — Museo di Segni',
      description: 'Pannello di amministrazione del sito del Museo Archeologico Comunale di Segni',
    },
    components: {
      graphics: {
        Logo: '/components/AdminBranding#AdminLogo',
        Icon: '/components/AdminBranding#AdminIcon',
      },
    },
  },
  // Lingua dell'interfaccia admin (diversa dalla localizzazione IT/EN dei contenuti,
  // vedi `localization` sotto): parte in italiano, l'inglese resta selezionabile
  // dalle impostazioni account per chi lavora in dev.
  i18n: {
    supportedLanguages: { en, it },
    fallbackLanguage: 'it',
  },
  collections: [Users, Media, SitiArcheologici, Chiese, Edifici, Collezioni],
  globals: [Home, Museo, MuseoStoria, MuseoSede, MuseoServizi, MuseoLibreria, MuseoContatti, Pau, SiteSettings],
  localization: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    fallback: false,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
