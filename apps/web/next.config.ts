import type { NextConfig } from 'next'

const cmsHost = (() => {
  try {
    return new URL(process.env.PAYLOAD_URL ?? 'https://cms.museosegni.com').hostname
  } catch {
    return 'cms.museosegni.com'
  }
})()

const nextConfig: NextConfig = {
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
