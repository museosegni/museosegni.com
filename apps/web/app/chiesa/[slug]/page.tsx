import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getChiesaBySlug, getChiese } from '@/lib/payload';

export default async function ChiesaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [chiesa, chiese] = await Promise.all([getChiesaBySlug(slug), getChiese()]);

  if (!chiesa) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-heading text-2xl text-white mb-4">Scheda non trovata</h1>
        <Link href="/chiesa" className="text-museum-accent font-body text-sm hover:underline">
          Torna a Chiesa e Culto
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative">
        <SiteImage media={chiesa.heroImage} preset="hero-16-9" alt={chiesa.title} label={chiesa.title} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <div className="flex items-center gap-1 text-white/60 text-xs font-body mb-2">
              <Link href="/" className="hover:text-museum-accent">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chiesa" className="hover:text-museum-accent">Chiesa e Culto</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-museum-accent">{chiesa.title}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
              {chiesa.title}
            </h1>
            <p className="text-museum-accent font-body text-sm sm:text-base">{chiesa.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Descrizione</h2>
              {chiesa.description?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Storia</h2>
              {chiesa.history?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Caratteristiche architettoniche</h2>
              {chiesa.features?.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white/80 font-body text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {(chiesa.gallery ?? []).map((img, idx) => (
              <SiteImage
                key={idx}
                media={img.image}
                preset={idx === 2 ? 'square-1-1' : 'card-4-3'}
                alt={img.caption ?? chiesa.title}
                label={img.caption ?? chiesa.title}
                className="w-full"
              />
            ))}

            <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker">
              <h3 className="font-heading text-base text-white mb-2">Altre chiese</h3>
              {chiese
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/chiesa/${c.slug}`}
                    className="block text-white/70 text-sm font-body hover:text-museum-accent transition-colors py-1"
                  >
                    {c.title}
                  </Link>
                ))}
            </div>

            <Link
              href="/chiesa"
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
