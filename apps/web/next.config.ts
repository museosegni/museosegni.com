import type { NextConfig } from 'next'

const cmsHost = (() => {
  try {
    return new URL(process.env.PAYLOAD_URL ?? 'https://cms.museosegni.com').hostname
  } catch {
    return 'cms.museosegni.com'
  }
})()

// Indirizzi del vecchio sito WordPress (stesso dominio) -> nuove pagine, per non
// perdere link esterni e posizionamento sui motori di ricerca.
const legacyPages: Record<string, string> = {
  'storia': '/museo/storia',
  'servizi': '/museo/servizi',
  'contatti-e-orari': '/museo/contatti',
  'libreria-del-museo': '/museo/libreria',
  'parco-archeologico-urbano': '/pau',
  'il-circuito-delle-mura-poligonali': '/itinerari/mura-poligonali',
  'ninfeo': '/itinerari/ninfeo',
  'acropoli': '/itinerari/acropoli',
  'foro': '/itinerari/area-del-foro',
  'santa-lucia': '/itinerari/santa-lucia',
  'tempio-ercole': '/itinerari/tempio-ercole',
  'cattedrale-santa-maria-assunta': '/chiesa/cattedrale',
  'chiesa-di-san-pietro': '/chiesa/san-pietro',
  'chiesa-del-gesu-e-palazzo-comunale': '/chiesa/gesu',
  'chiesa-di-santo-stefano': '/chiesa/san-stefano',
  'palazzo-comunita': '/edifici/palazzo-comunita',
  'vescovado': '/edifici/vescovado',
  'palazzo-conti': '/edifici/palazzo-conti',
  'corredi-funerari-necropoli': '/collezioni/necropoli',
  'votivi': '/collezioni/doni',
  'materiali-piu-antichi': '/collezioni/materiali',
  'le-iscrizioni': '/collezioni/iscrizioni',
  'bolli': '/collezioni/produzioni',
  'sculture-decorazioni': '/collezioni/sculture',
  'terrecotte-architettoniche': '/collezioni/terrecotte',
  'tavola-cucina': '/collezioni/tavola-cucina',
  'eventi-sagra-marrone-visite-guidate-museo-segni': '/',
  'privacy-policy': '/privacy',
  'cookie-policy-ue': '/privacy#cookie',
}

const nextConfig: NextConfig = {
  // Next toglie prima lo slash finale dei vecchi URL (/storia/ -> /storia), poi applica questi.
  async redirects() {
    return Object.entries(legacyPages).map(([slug, destination]) => ({
      source: `/${slug}`,
      destination,
      permanent: true,
    }))
  },
  // Inlinea PAYLOAD_URL anche nel bundle client: i componenti client (es.
  // CollezioneReperti) costruiscono gli URL dei media con mediaUrl() e senza
  // questo userebbero il default di produzione, diverso dal render server.
  env: { PAYLOAD_URL: process.env.PAYLOAD_URL ?? 'https://cms.museosegni.com' },
  // I contenuti (testi + media) sono letti live dalle API di Payload CMS
  // (vedi lib/payload.ts), self-hosted su VPS separato (cms.museosegni.com).
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: cmsHost },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
}

export default nextConfig
