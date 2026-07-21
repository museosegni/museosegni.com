import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from '@payloadcms/translations/languages/en'
import { it } from '@payloadcms/translations/languages/it'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig, type Plugin } from 'payload'
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
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Su Vercel il filesystem è effimero: gli upload (Media collection) vanno su
// Vercel Blob invece che su disco locale. In locale, senza il token, non si
// attiva il plugin e si torna al filesystem (staticDir in collections/Media.ts).
const storagePlugins: Plugin[] = process.env.BLOB_READ_WRITE_TOKEN
  ? [
      vercelBlobStorage({
        collections: { media: true },
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
    ]
  : []

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
      // POSTGRES_URL è impostata automaticamente da Vercel quando si collega
      // l'integrazione Postgres (Neon) dal marketplace; DATABASE_URL resta
      // valida per un Postgres esterno o per lo sviluppo locale.
      connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL || '',
    },
    // In locale/dev lo schema si sincronizza automaticamente (push, comportamento
    // di default di Payload quando NODE_ENV !== 'production'). Su Vercel
    // (NODE_ENV=production) il push è disabilitato per design: le migrazioni in
    // src/migrations/ vengono invece applicate automaticamente ad ogni cold start
    // tramite prodMigrations — nessun comando manuale da lanciare dopo il deploy.
    prodMigrations: migrations,
  }),
  sharp,
  plugins: storagePlugins,
})
