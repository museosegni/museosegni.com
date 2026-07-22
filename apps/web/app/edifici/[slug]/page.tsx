import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getEdificioBySlug, getEdifici } from '@/lib/payload';

export default async function EdificioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [edificio, edifici] = await Promise.all([getEdificioBySlug(slug), getEdifici()]);

  if (!edificio) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-heading text-2xl text-white mb-4">Scheda non trovata</h1>
        <Link href="/edifici" className="text-museum-accent font-body text-sm hover:underline">
          Torna agli Edifici Storici
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative">
        <SiteImage media={edificio.heroImage} preset="hero-16-9" alt={edificio.title} label={edificio.title} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <div className="flex items-center gap-1 text-white/60 text-xs font-body mb-2">
              <Link href="/" className="hover:text-museum-accent">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/edifici" className="hover:text-museum-accent">Edifici Storici</Link>
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
              {edificio.description?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Storia</h2>
              {edificio.history?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Architettura</h2>
              {edificio.architecture?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {(edificio.gallery ?? []).map((img, idx) => (
              <SiteImage
                key={idx}
                media={img.image}
                preset={idx === 2 ? 'square-1-1' : 'card-4-3'}
                alt={img.caption ?? edificio.title}
                label={img.caption ?? edificio.title}
                className="w-full"
              />
            ))}

            <div className="museum-card p-4">
              <h3 className="font-heading text-base text-white mb-2">Altri edifici</h3>
              {edifici
                .filter((e) => e.slug !== slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    href={`/edifici/${e.slug}`}
                    className="block text-white/70 text-sm font-body hover:text-museum-accent transition-colors py-1"
                  >
                    {e.title}
                  </Link>
                ))}
            </div>

            <Link
              href="/edifici"
              className="inline-flex items-center gap-2 text-museum-accent font-body text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla lista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
