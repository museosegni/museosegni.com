import { mediaUrl } from '@/lib/payload'
import type { MediaDoc } from '@/lib/types'

const PRESETS = {
  'hero-16-9': { aspect: 'aspect-video', dims: '1920 x 1080px' },
  'card-4-3': { aspect: 'aspect-[4/3]', dims: '1200 x 900px' },
  'square-1-1': { aspect: 'aspect-square', dims: '1080 x 1080px' },
  'banner-21-9': { aspect: 'aspect-[21/9]', dims: '2100 x 900px' },
} as const

type Preset = keyof typeof PRESETS

interface SiteImageProps {
  media?: MediaDoc | null
  preset: Preset
  alt: string
  /** Etichetta mostrata al posto dell'immagine finché non è stata caricata dal CMS. */
  label: string
  className?: string
}

/**
 * Ogni riquadro del sito richiede una dimensione precisa (vedi apps/cms
 * Media collection): finché il campo upload non è valorizzato mostra un
 * placeholder con le dimensioni attese, esattamente come il vecchio
 * PlaceholderImage — una volta caricata l'immagine nell'admin, usa le
 * varianti AVIF/WebP generate automaticamente per quel preset.
 */
export default function SiteImage({ media, preset, alt, label, className = '' }: SiteImageProps) {
  const { aspect, dims } = PRESETS[preset]
  const avif = media?.sizes?.[`${preset}-avif`]
  const webp = media?.sizes?.[`${preset}-webp`]

  if (!avif?.url && !webp?.url) {
    return (
      <div
        className={`bg-museum-darker border border-museum-accent/40 flex items-center justify-center relative overflow-hidden ${aspect} ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-museum-accent/20 to-transparent" />
        <div className="text-center z-10 p-4">
          <div className="text-museum-accent/60 text-xs font-body uppercase tracking-widest mb-1">{dims}</div>
          <div className="text-white/50 text-sm font-body">{label}</div>
        </div>
      </div>
    )
  }

  return (
    <picture className={`block ${aspect} ${className} overflow-hidden`}>
      {avif?.url && <source srcSet={mediaUrl(avif.url)} type="image/avif" />}
      {webp?.url && <source srcSet={mediaUrl(webp.url)} type="image/webp" />}
      {/* eslint-disable-next-line @next/next/no-img-element -- AVIF/WebP già pre-generati da Payload, no reprocessing */}
      <img src={mediaUrl(webp?.url ?? avif?.url ?? media?.url)} alt={alt} className="w-full h-full object-cover" />
    </picture>
  )
}
