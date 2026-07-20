import { withPayload } from '@payloadcms/next/withPayload'
import { existsSync } from 'fs'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

// In locale questo pacchetto vive dentro il monorepo pnpm (apps/cms) — il vero
// node_modules/.pnpm è alla radice del workspace. In produzione sul VPS, invece,
// il progetto è deployato standalone (nessun pnpm-workspace.yaml sopra): in quel
// caso il node_modules vive nella cartella stessa. Rileviamo il contesto per
// evitare che Turbopack rifiuti di compilare file fisicamente fuori dal root.
const monorepoRoot = path.resolve(dirname, '../..')
const turbopackRoot = existsSync(path.join(monorepoRoot, 'pnpm-workspace.yaml'))
  ? monorepoRoot
  : dirname

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: turbopackRoot,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
