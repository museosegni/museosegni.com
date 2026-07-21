import { config as loadEnv } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

loadEnv({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../.env') })

import { getPayload } from 'payload'
import { seedContent } from './seedContent'

// L'import di payload.config è dinamico (dopo loadEnv) perché in ESM gli import
// statici sono hoisted sopra qualunque codice top-level: un import statico
// leggerebbe process.env.PAYLOAD_SECRET/DATABASE_URL prima che dotenv li imposti.
async function run() {
  const { default: config } = await import('../payload.config')
  const payload = await getPayload({ config })
  await seedContent(payload)
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
