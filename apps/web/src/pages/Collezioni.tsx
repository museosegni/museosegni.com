import { Link } from 'react-router-dom';
import { Boxes, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import { collezioni } from '../data/museo';

export default function Collezioni() {
  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label="Collezioni - 1920x1080" aspectRatio="16/9" className="w-full" />
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
              to={`/collezioni/${collezione.slug}`}
              className="group block border border-museum-accent/30 rounded-lg overflow-hidden hover:border-museum-accent transition-colors bg-museum-darker"
            >
              <PlaceholderImage
                label={`${collezione.title} - 1080x1080`}
                aspectRatio="1/1"
                className="border-0 rounded-none"
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

        <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
          <div className="flex items-start gap-4">
            <Boxes className="w-6 h-6 text-museum-accent mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white mb-2">Il patrimonio del Museo</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">
                Le collezioni del Museo Archeologico Comunale di Segni comprendono migliaia di reperti
                che coprono un arco cronologico dalla preistoria al Medioevo. I materiali provengono
                per lo più dalla città antica e dal suo territorio, offrendo un quadro completo della
                vita quotidiana, della religione, dell&apos;arte e dell&apos;economia di una comunità
                del Lazio antico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
