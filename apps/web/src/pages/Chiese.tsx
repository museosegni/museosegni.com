import { Link } from 'react-router-dom';
import { Church, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import { chiese } from '../data/museo';

export default function Chiese() {
  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label="Chiesa e Culto - 1920x1080" aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              <span className="text-museum-accent">Chiesa</span> e Culto
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Le chiese di Segni raccontano fede, arte e storia attraverso i secoli.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chiese.map((chiesa) => (
            <Link
              key={chiesa.slug}
              to={`/chiesa/${chiesa.slug}`}
              className="group block border border-museum-accent/30 rounded-lg overflow-hidden hover:border-museum-accent transition-colors bg-museum-darker"
            >
              <PlaceholderImage
                label={`${chiesa.title} - 1200x900`}
                aspectRatio="4/3"
                className="border-0 rounded-none"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors mb-1">
                      {chiesa.title}
                    </h3>
                    <p className="text-white/60 text-sm font-body">{chiesa.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-museum-accent/50 group-hover:text-museum-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
          <div className="flex items-start gap-4">
            <Church className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Il percorso della fede</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">
                Le chiese di Segni costituiscono un percorso storico-artistico che attraversa l&apos;intero
                centro storico. Dalla maestosa Cattedrale all&apos;antica chiesa di S. Pietro, ogni luogo di
                culto conserva testimonianze preziose di arte sacra, dalla pittura medievale alla
                decorazione barocca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
