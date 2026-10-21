import Link from 'next/link';
import { Map, ArrowRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getSitiArcheologici } from '@/lib/payload';

export default async function ItinerariPage() {
  const sitiArcheologici = await getSitiArcheologici();

  return (
    <>
      <section className="relative">
        <SiteImage media={sitiArcheologici[0]?.heroImage} preset="hero-16-9" alt="Itinerari: Siti del Parco" label="Itinerari: Siti del Parco" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              <span className="text-museum-accent">Itinerari</span>: Siti del Parco
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Esplora i siti archeologici che raccontano la storia millenaria dell&apos;antica Signia.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sitiArcheologici.map((sito) => (
            <Link
              key={sito.slug}
              href={`/itinerari/${sito.slug}`}
              className="group block museum-card museum-interactive overflow-hidden"
            >
              <SiteImage
                media={sito.heroImage}
                preset="card-4-3"
                alt={sito.title}
                label={sito.title}
                className="rounded-none"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors mb-1">
                      {sito.title}
                    </h3>
                    <p className="text-white/60 text-sm font-body">{sito.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-museum-accent/50 group-hover:text-museum-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 museum-panel p-6">
          <div className="flex items-start gap-4">
            <Map className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Come visitare il Parco</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-4">
                Per la visita al Parco Archeologico, nelle aree come il Ninfeo, bisogna rivolgersi alla
                biglietteria del Museo. Il Ninfeo è visitabile dalle 9.00 alle 13.00, con ultima visita
                alle 12.30.
              </p>
              <p className="text-white/50 text-xs font-body">Si consiglia la prenotazione.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
