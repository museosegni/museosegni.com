import type { CollectionConfig } from 'payload'

// I 4 formati di riquadro richiesti dal sito (vedi apps/web/src/components/PlaceholderImage.tsx):
// hero 16:9, card 4:3, square 1:1, banner 21:9. Ogni preset genera sia AVIF che WebP, in modo
// che il frontend possa scegliere via <picture> il formato migliore supportato dal browser.
const PRESETS = [
  { name: 'hero-16-9', width: 1920, height: 1080 },
  { name: 'card-4-3', width: 1200, height: 900 },
  { name: 'square-1-1', width: 1080, height: 1080 },
  { name: 'banner-21-9', width: 2100, height: 900 },
] as const

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media',
    // Immagini + PDF (regolamento, carta dei servizi...). Sharp applica resize/formatOptions
    // solo ai mimetype immagine: i PDF caricati non vengono toccati.
    mimeTypes: ['image/*', 'application/pdf'],
    // L'originale caricato resta come sorgente (non convertito) per poter aggiungere
    // in futuro altri preset senza dover ricaricare le immagini.
    imageSizes: PRESETS.flatMap(({ name, width, height }) => [
      {
        name: `${name}-avif`,
        width,
        height,
        formatOptions: { format: 'avif' as const, options: { quality: 60 } },
      },
      {
        name: `${name}-webp`,
        width,
        height,
        formatOptions: { format: 'webp' as const, options: { quality: 70 } },
      },
    ]),
  },
}
