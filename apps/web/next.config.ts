import type { NextConfig } from 'next'

const cmsHost = (() => {
  try {
    return new URL(process.env.PAYLOAD_URL ?? 'https://cms.museosegni.com').hostname
  } catch {
    return 'cms.museosegni.com'
  }
})()

const nextConfig: NextConfig = {
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
