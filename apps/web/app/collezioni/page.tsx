import Link from 'next/link';
import { Boxes, ArrowRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getCollezioni } from '@/lib/payload';

export default async function CollezioniPage() {
  const collezioni = await getCollezioni();

  return (
    <>
      <section className="relative">
        <SiteImage media={collezioni[0]?.heroImage} preset="hero-16-9" alt="Collezioni" label="Collezioni" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              Le <span className="text-museum-accent">Collezioni</span>
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Il catalogo dei reperti del Museo, organizzato per categorie tematiche.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collezioni.map((collezione) => (
            <Link
              key={collezione.slug}
              href={`/collezioni/${collezione.slug}`}
              className="group block museum-card museum-interactive overflow-hidden"
            >
              <SiteImage
                media={collezione.heroImage}
                preset="square-1-1"
                alt={collezione.title}
                label={collezione.title}
                className="rounded-none"
              />
              <div className="p-4">
                <h3 className="font-heading text-lg text-white group-hover:text-museum-accent transition-colors mb-1">
                  {collezione.title}
                </h3>
                <p className="text-white/60 text-xs font-body">{collezione.subtitle}</p>
                <div className="flex items-center gap-1 mt-3 text-museum-accent text-xs font-body">
                  Esplora <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 museum-panel p-6">
          <div className="flex items-start gap-4">
            <Boxes className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Il patrimonio del Museo</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">
                Il percorso espositivo, oltre ad un&apos;ampia ed agevole pannellatura con plastici e
                ricostruzioni assonometriche, è arricchito da gruppi scultorei di notevole interesse,
                numerose iscrizioni sacre e funerarie, elementi architettonici decorativi e una vasta
                collezione di materiale ceramico d&apos;età romana e medievale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
