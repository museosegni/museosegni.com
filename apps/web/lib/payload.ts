import type {
  Chiesa,
  Collezione,
  Edificio,
  Home,
  MuseoContatti,
  MuseoLibreria,
  Museo,
  MuseoSede,
  MuseoServizi,
  MuseoStoria,
  Pau,
  MediaDoc,
  SiteSettings,
  Sito,
} from './types'

export const PAYLOAD_URL = process.env.PAYLOAD_URL ?? 'https://cms.museosegni.com'

/** GET resiliente verso Payload: ritorna null se il CMS non è raggiungibile
 * (es. durante lo sviluppo del frontend prima che il CMS sia in linea).
 * `locale` è sempre esplicito: con `localization` attiva in Payload, senza
 * questo parametro i campi `localized: true` vengono omessi dalla risposta
 * invece di ricadere sulla lingua di default. */
async function payloadFetch<T>(path: string): Promise<T | null> {
  const separator = path.includes('?') ? '&' : '?'
  try {
    const res = await fetch(`${PAYLOAD_URL}/api${path}${separator}locale=it`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

/** Risolve l'URL assoluto di una variante (preset) di un media Payload. */
export function mediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined
  return url.startsWith('http') ? url : `${PAYLOAD_URL}${url}`
}

export async function getHome(): Promise<Home | null> {
  return payloadFetch<Home>('/globals/home')
}

export async function getMuseo(): Promise<Museo | null> {
  return payloadFetch<Museo>('/globals/museo')
}

export async function getMuseoStoria(): Promise<MuseoStoria | null> {
  return payloadFetch<MuseoStoria>('/globals/museo-storia')
}

export async function getMuseoSede(): Promise<MuseoSede | null> {
  return payloadFetch<MuseoSede>('/globals/museo-sede')
}

export async function getMuseoServizi(): Promise<MuseoServizi | null> {
  return payloadFetch<MuseoServizi>('/globals/museo-servizi')
}

export async function getMuseoLibreria(): Promise<MuseoLibreria | null> {
  return payloadFetch<MuseoLibreria>('/globals/museo-libreria')
}

export async function getMuseoContatti(): Promise<MuseoContatti | null> {
  return payloadFetch<MuseoContatti>('/globals/museo-contatti')
}

export async function getPau(): Promise<Pau | null> {
  return payloadFetch<Pau>('/globals/pau')
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return payloadFetch<SiteSettings>('/globals/site-settings')
}

export async function getSitiArcheologici(): Promise<Sito[]> {
  const r = await payloadFetch<{ docs: Sito[] }>('/siti-archeologici?depth=2&limit=100&sort=ordine')
  return r?.docs ?? []
}

export async function getSitoBySlug(slug: string): Promise<Sito | null> {
  const r = await payloadFetch<{ docs: Sito[] }>(
    `/siti-archeologici?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&limit=1`,
  )
  return r?.docs?.[0] ?? null
}

export async function getChiese(): Promise<Chiesa[]> {
  const r = await payloadFetch<{ docs: Chiesa[] }>('/chiese?depth=2&limit=100&sort=ordine')
  return r?.docs ?? []
}

export async function getChiesaBySlug(slug: string): Promise<Chiesa | null> {
  const r = await payloadFetch<{ docs: Chiesa[] }>(
    `/chiese?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&limit=1`,
  )
  return r?.docs?.[0] ?? null
}

export async function getEdifici(): Promise<Edificio[]> {
  const r = await payloadFetch<{ docs: Edificio[] }>('/edifici?depth=2&limit=100&sort=ordine')
  return r?.docs ?? []
}

export async function getEdificioBySlug(slug: string): Promise<Edificio | null> {
  const r = await payloadFetch<{ docs: Edificio[] }>(
    `/edifici?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&limit=1`,
  )
  return r?.docs?.[0] ?? null
}

export async function getCollezioni(): Promise<Collezione[]> {
  const r = await payloadFetch<{ docs: Collezione[] }>('/collezioni?depth=2&limit=100&sort=ordine')
  return r?.docs ?? []
}

export async function getCollezioneBySlug(slug: string): Promise<Collezione | null> {
  const r = await payloadFetch<{ docs: Collezione[] }>(
    `/collezioni?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&limit=1`,
  )
  return r?.docs?.[0] ?? null
}

export type { MediaDoc }
