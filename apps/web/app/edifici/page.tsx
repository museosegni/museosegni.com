import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getEdifici } from '@/lib/payload';

export default async function EdificiPage() {
  const edifici = await getEdifici();

  return (
    <>
      <section className="relative">
        <SiteImage preset="hero-16-9" alt="Edifici Storici" label="Edifici Storici" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              <span className="text-museum-accent">Edifici</span> Storici
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Palazzi e residenze che testimoniano il potere civile ed ecclesiastico attraverso i secoli.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {edifici.map((edificio) => (
            <Link
              key={edificio.slug}
              href={`/edifici/${edificio.slug}`}
              className="group block museum-card museum-interactive overflow-hidden"
            >
              <SiteImage
                media={edificio.heroImage}
                preset="card-4-3"
                alt={edificio.title}
                label={edificio.title}
                className="rounded-none"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors mb-1">
                      {edificio.title}
                    </h3>
                    <p className="text-white/60 text-sm font-body">{edificio.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-museum-accent/50 group-hover:text-museum-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 museum-panel p-6">
          <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Architettura civile a Segni</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">
                Gli edifici storici di Segni rappresentano un prezioso campionario di architettura civile
                che spazia dal Medioevo al Rinascimento. Palazzi comunali, residenze vescovili e case
                nobiliari si alternano nel tessuto urbano, offrendo un quadro completo dell&apos;evoluzione
                delle strutture di potere e della vita sociale della città.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
