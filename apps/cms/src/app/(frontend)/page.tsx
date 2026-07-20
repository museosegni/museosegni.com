import { redirect } from 'next/navigation'

import config from '@/payload.config'

/**
 * Questo progetto è un CMS headless (il sito pubblico è apps/web su Vercel):
 * '/' non serve contenuto proprio, redirige subito all'admin.
 */
export default async function HomePage() {
  const payloadConfig = await config
  redirect(payloadConfig.routes.admin)
}
