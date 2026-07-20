import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import { edifici } from '../data/museo';

export default function EdificioPage() {
  const { slug } = useParams<{ slug: string }>();
  const edificio = edifici.find((e) => e.slug === slug);

  if (!edificio) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="font-heading text-2xl text-white mb-4">Scheda non trovata</h1>
          <Link to="/edifici" className="text-museum-accent font-body text-sm hover:underline">
            Torna agli Edifici Storici
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label={`${edificio.title} - 1920x1080`} aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <div className="flex items-center gap-1 text-white/60 text-xs font-body mb-2">
              <Link to="/" className="hover:text-museum-accent">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/edifici" className="hover:text-museum-accent">Edifici Storici</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-museum-accent">{edificio.title}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
              {edificio.title}
            </h1>
            <p className="text-museum-accent font-body text-sm sm:text-base">{edificio.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Descrizione</h2>
              {edificio.description.split('\n\n').map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Storia</h2>
              {edificio.history.split('\n\n').map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Architettura</h2>
              {edificio.architecture.split('\n\n').map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <PlaceholderImage label={`${edificio.title} facciata - 1200x900`} aspectRatio="4/3" className="w-full" />
            <PlaceholderImage label={`${edificio.title} interno - 1200x900`} aspectRatio="4/3" className="w-full" />
            <PlaceholderImage label={`${edificio.title} dettaglio - 1080x1080`} aspectRatio="1/1" className="w-full" />

            <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker">
              <h3 className="font-heading text-base text-white mb-2">Altri edifici</h3>
              {edifici
                .filter((e) => e.slug !== slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    to={`/edifici/${e.slug}`}
                    className="block text-white/70 text-sm font-body hover:text-museum-accent transition-colors py-1"
                  >
                    {e.title}
                  </Link>
                ))}
            </div>

            <Link
              to="/edifici"
              className="inline-flex items-center gap-2 text-museum-accent font-body text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla lista
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
