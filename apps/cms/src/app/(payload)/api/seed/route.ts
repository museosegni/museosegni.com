import config from '@payload-config'
import { getPayload } from 'payload'
import { seedContent } from '../../../../seed/seedContent'

// Popola i contenuti reali in produzione (dove non è possibile lanciare lo
// script CLI direttamente sul database). Protetta da PAYLOAD_SECRET passato
// come header — nessun altro modo di autenticarsi. Idempotente: si può
// richiamare più volte senza duplicare i contenuti (upsert per slug).
export async function POST(request: Request) {
  const provided = request.headers.get('x-seed-secret')
  if (!provided || provided !== process.env.PAYLOAD_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = await getPayload({ config })
  await seedContent(payload)

  return Response.json({ ok: true })
}
