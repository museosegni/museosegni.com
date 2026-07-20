// Tipi locali che rispecchiano lo schema di apps/cms (collections/globals).
// Non condivisi via import diretto dal pacchetto cms per tenere i due
// workspace disaccoppiati — se lo schema cambia vanno aggiornati qui.

export interface MediaDoc {
  url?: string
  alt?: string
  sizes?: Record<string, { url?: string; width?: number; height?: number } | undefined>
}

export interface GalleryItem {
  image?: MediaDoc | null
  caption?: string | null
}

export interface Sito {
  slug: string
  title: string
  subtitle?: string | null
  description?: string | null
  heroImage?: MediaDoc | null
  gallery?: GalleryItem[]
}

export interface Chiesa {
  slug: string
  title: string
  subtitle?: string | null
  description?: string | null
  history?: string | null
  features?: string | null
  heroImage?: MediaDoc | null
  gallery?: GalleryItem[]
}

export interface Edificio {
  slug: string
  title: string
  subtitle?: string | null
  description?: string | null
  history?: string | null
  architecture?: string | null
  heroImage?: MediaDoc | null
  gallery?: GalleryItem[]
}

export interface Artifact {
  name: string
  description?: string | null
  image?: MediaDoc | null
  object?: string | null
  provenance?: string | null
  dating?: string | null
  room?: string | null
  bibliography?: string | null
}

export interface Collezione {
  slug: string
  title: string
  subtitle?: string | null
  description?: string | null
  heroImage?: MediaDoc | null
  items?: Artifact[]
}

export interface Home {
  heroTitle?: string | null
  heroTitleAccent?: string | null
  heroSubtitle?: string | null
  heroImage?: MediaDoc | null
  heroCtaLabel?: string | null
  introTitle?: string | null
  introText?: string | null
  featuredCards?: { title: string; description?: string | null; image?: MediaDoc | null }[]
  newsSectionTitle?: string | null
  newsItems?: { title: string; date?: string | null; excerpt?: string | null }[]
}

export interface Museo {
  heroTitle?: string | null
  heroSubtitle?: string | null
  heroImage?: MediaDoc | null
  intro?: string | null
}

export interface MuseoStoria {
  heroImage?: MediaDoc | null
  sections?: { heading: string; body?: string | null }[]
  sideImages?: GalleryItem[]
  sale?: { title: string; description?: string | null }[]
}

export interface MuseoSede {
  subtitle?: string | null
  heading?: string | null
  body?: string | null
  exteriorImage?: MediaDoc | null
  factCards?: { title: string; description?: string | null }[]
  interiorImage?: MediaDoc | null
}

export interface MuseoServizio {
  icon: string
  title: string
  description?: string | null
}

export interface MuseoServizi {
  heroImage?: MediaDoc | null
  services?: MuseoServizio[]
  researchSectionTitle?: string | null
  researchText?: string | null
}

export interface MuseoLibreria {
  heroImage?: MediaDoc | null
  books?: { title: string; author?: string | null; price?: string | null }[]
  merchandise?: { title: string; description?: string | null; price?: string | null }[]
}

export interface MuseoContatti {
  subtitle?: string | null
}

export interface Pau {
  heroTitle?: string | null
  heroTitleAccent?: string | null
  heroSubtitle?: string | null
  heroImage?: MediaDoc | null
  introHeading?: string | null
  introText?: string | null
  objectives?: { title: string; description?: string | null }[]
  sideImages?: GalleryItem[]
}

export interface SiteSettings {
  address?: string | null
  phone?: string | null
  email?: string | null
  openingHours?: { days?: string | null; hours?: string | null; closed?: boolean }[]
  holidayNote?: string | null
  ticketPrice?: string | null
  howToArrive?: { mode: 'car' | 'train'; description?: string | null }[]
  regolamentoPdf?: MediaDoc | null
  cartaServiziPdf?: MediaDoc | null
}
