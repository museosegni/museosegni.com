import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getSitiArcheologici, getSitoBySlug } from '@/lib/payload';

export default async function ItinerarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [sito, sitiArcheologici] = await Promise.all([getSitoBySlug(slug), getSitiArcheologici()]);

  if (!sito) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-heading text-2xl text-white mb-4">Sito non trovato</h1>
        <Link href="/itinerari" className="text-museum-accent font-body text-sm hover:underline">
          Torna agli itinerari
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <SiteImage media={sito.heroImage} preset="hero-16-9" alt={sito.title} label={sito.title} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <div className="flex items-center gap-1 text-white/60 text-xs font-body mb-2">
              <Link href="/" className="hover:text-museum-accent">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/itinerari" className="hover:text-museum-accent">Itinerari</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-museum-accent">{sito.title}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
              {sito.title}
            </h1>
            <p className="text-museum-accent font-body text-sm sm:text-base">{sito.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {sito.description?.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className="text-white/80 font-body text-sm sm:text-base leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}

            {/* Gallery */}
            <h2 className="font-heading text-2xl text-white mb-6">
              <span className="text-museum-accent">Galleria</span> fotografica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(sito.gallery ?? []).map((img, idx) => (
                <div key={idx}>
                  <SiteImage media={img.image} preset="card-4-3" alt={img.caption ?? sito.title} label={img.caption ?? sito.title} className="w-full" />
                  <p className="text-white/60 text-xs font-body mt-2">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker">
              <h3 className="font-heading text-lg text-white mb-3">Altri siti del parco</h3>
              <div className="space-y-2">
                {sitiArcheologici
                  .filter((s) => s.slug !== slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/itinerari/${s.slug}`}
                      className="block text-white/70 text-sm font-body hover:text-museum-accent transition-colors py-1 border-b border-white/5"
                    >
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              href="/itinerari"
              className="inline-flex items-center gap-2 text-museum-accent font-body text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla lista itinerari
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
