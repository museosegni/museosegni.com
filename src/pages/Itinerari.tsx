import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import { sitiArcheologici } from '../data/museo';

export default function Itinerari() {
  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label="Itinerari Siti del Parco - 1920x1080" aspectRatio="16/9" className="w-full" />
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
              to={`/itinerari/${sito.slug}`}
              className="group block border border-museum-accent/30 rounded-lg overflow-hidden hover:border-museum-accent transition-colors bg-museum-darker"
            >
              <PlaceholderImage
                label={`${sito.title} - 1200x900`}
                aspectRatio="4/3"
                className="border-0 rounded-none"
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

        <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
          <div className="flex items-start gap-4">
            <Map className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Percorso archeologico consigliato</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-4">
                Il percorso ideale per visitare tutti i siti in una giornata parte dall&apos;Acropoli,
                scende verso l&apos;Area del Foro, prosegue per il Complesso Santa Lucia e il Tempio d&apos;Ercole,
                per poi concludersi con le Mura Poligonali e il Ninfeo di Q. Mutius. Durata stimata: 4-5 ore.
              </p>
              <p className="text-white/50 text-xs font-body">
                È consigliata la prenotazione di una guida per una visita completa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
