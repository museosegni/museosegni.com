import Link from 'next/link';
import { BookOpen, Clock, Phone, Mail, MapPin, BookMarked, ArrowRight, FileText, Landmark as LandmarkIcon } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getMuseo, getSiteSettings, mediaUrl } from '@/lib/payload';

const subpages = [
  {
    title: 'La Sede',
    description: 'Palazzo della Comunità: sede storica del museo dal XIII secolo',
    path: '/museo/sede',
    icon: LandmarkIcon,
  },
  {
    title: 'Storia del Museo',
    description: 'Il percorso espositivo e la storia della fondazione del museo',
    path: '/museo/storia',
    icon: BookOpen,
  },
  {
    title: 'Servizi',
    description: 'Biblioteca, archivio fotografico e servizi per ricercatori',
    path: '/museo/servizi',
    icon: BookMarked,
  },
  {
    title: 'Contatti e Orari',
    description: 'Informazioni pratiche per la visita',
    path: '/museo/contatti',
    icon: Clock,
  },
  {
    title: 'Libreria',
    description: 'Pubblicazioni e merchandising del bookshop',
    path: '/museo/libreria',
    icon: BookOpen,
  },
];

export default async function MuseoPage() {
  const [museo, siteSettings] = await Promise.all([getMuseo(), getSiteSettings()]);
  const hours = siteSettings?.openingHours?.find((h) => !h.closed);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <SiteImage media={museo?.heroImage} preset="hero-16-9" alt="Museo Archeologico" label="Museo Archeologico" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              Il <span className="text-museum-accent">Museo</span> Archeologico
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              {museo?.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="museum-card p-4">
            <MapPin className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">{siteSettings?.address}</p>
          </div>
          <div className="museum-card p-4">
            <Phone className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">{siteSettings?.phone}</p>
          </div>
          <div className="museum-card p-4">
            <Mail className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">{siteSettings?.email}</p>
          </div>
          <div className="museum-card p-4">
            <Clock className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">{hours ? `${hours.days}: ${hours.hours}` : ''}</p>
          </div>
        </div>

        <div className="text-white/80 font-body text-base leading-relaxed max-w-4xl space-y-6 mb-12">
          {museo?.intro?.split('\n\n').map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}

          <div className="flex flex-wrap gap-4 mt-8 pt-4">
            {siteSettings?.regolamentoPdf?.url && (
              <a
                href={mediaUrl(siteSettings.regolamentoPdf.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-museum-accent/10 border border-museum-accent/40 text-white px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent hover:text-museum-dark transition-all"
              >
                <FileText className="w-4 h-4" />
                Regolamento
              </a>
            )}
            {siteSettings?.cartaServiziPdf?.url && (
              <a
                href={mediaUrl(siteSettings.cartaServiziPdf.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-museum-accent/10 border border-museum-accent/40 text-white px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent hover:text-museum-dark transition-all"
              >
                <FileText className="w-4 h-4" />
                Carta dei Servizi
              </a>
            )}
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
          Esplora le <span className="text-museum-accent">sezioni</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subpages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group flex items-start gap-4 museum-card museum-interactive p-5"
            >
              <div className="p-2.5 rounded-md bg-museum-accent/10 text-museum-accent">
                <page.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors mb-1">
                  {page.title}
                </h3>
                <p className="text-white/60 text-sm font-body">{page.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-museum-accent/50 group-hover:text-museum-accent transition-colors mt-1" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
