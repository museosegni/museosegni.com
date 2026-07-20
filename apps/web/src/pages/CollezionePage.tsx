import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import ArtifactDialog, { type Artifact } from '../components/ArtifactDialog';
import { collezioni } from '../data/museo';

export default function CollezionePage() {
  const { slug } = useParams<{ slug: string }>();
  const collezione = collezioni.find((c) => c.slug === slug);

  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!collezione) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="font-heading text-2xl text-white mb-4">Collezione non trovata</h1>
          <Link to="/collezioni" className="text-museum-accent font-body text-sm hover:underline">
            Torna alle Collezioni
          </Link>
        </div>
      </Layout>
    );
  }

  const openArtifact = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setDialogOpen(true);
  };

  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label={`${collezione.title} - 1920x1080`} aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <div className="flex items-center gap-1 text-white/60 text-xs font-body mb-2">
              <Link to="/" className="hover:text-museum-accent">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/collezioni" className="hover:text-museum-accent">Collezioni</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-museum-accent">{collezione.title}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
              {collezione.title}
            </h1>
            <p className="text-museum-accent font-body text-sm sm:text-base">{collezione.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-white/80 font-body text-sm sm:text-base leading-relaxed mb-10 max-w-4xl">
          {collezione.description}
        </p>

        <h2 className="font-heading text-2xl text-white mb-6">
          <span className="text-museum-accent">Reperti</span> principali
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collezione.items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => openArtifact(item)}
              className="text-left border border-museum-accent/30 rounded-lg overflow-hidden bg-museum-darker hover:border-museum-accent transition-colors cursor-pointer"
            >
              <PlaceholderImage
                label={`${item.name} - 1080x1080`}
                aspectRatio="1/1"
                className="border-0 rounded-none"
              />
              <div className="p-4">
                <h3 className="font-heading text-base text-white mb-1">{item.name}</h3>
                <p className="text-white/60 text-xs font-body line-clamp-2">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker">
              <h3 className="font-heading text-base text-white mb-3">Altre collezioni</h3>
              {collezioni
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/collezioni/${c.slug}`}
                    className="block text-white/70 text-sm font-body hover:text-museum-accent transition-colors py-1 border-b border-white/5 last:border-0"
                  >
                    {c.title}
                  </Link>
                ))}
            </div>

            <Link
              to="/collezioni"
              className="inline-flex items-center gap-2 text-museum-accent font-body text-sm hover:underline mt-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al catalogo
            </Link>
          </div>
        </div>
      </section>

      <ArtifactDialog
        artifact={selectedArtifact}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </Layout>
  );
}
