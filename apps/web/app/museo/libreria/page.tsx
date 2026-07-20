import SiteImage from '@/components/SiteImage';
import { getMuseoLibreria, getSiteSettings } from '@/lib/payload';

export default async function MuseoLibreriaPage() {
  const [libreria, siteSettings] = await Promise.all([getMuseoLibreria(), getSiteSettings()]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
        <span className="text-museum-accent">Libreria</span> e Bookshop
      </h1>
      <p className="text-white/60 font-body text-sm mb-10">
        Pubblicazioni, guide e merchandising ufficiale del Museo
      </p>

      <SiteImage
        media={libreria?.heroImage}
        preset="hero-16-9"
        alt="Bookshop interno"
        label="Bookshop interno"
        className="w-full mb-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Books */}
        <div>
          <h2 className="font-heading text-2xl text-white mb-6">Pubblicazioni</h2>
          <div className="space-y-3">
            {(libreria?.books ?? []).map((book) => (
              <div
                key={book.title}
                className="flex items-center justify-between border border-museum-accent/20 rounded-md p-3 bg-museum-darker hover:border-museum-accent/40 transition-colors"
              >
                <div>
                  <p className="text-white text-sm font-body font-medium">{book.title}</p>
                  <p className="text-white/60 text-xs font-body">{book.author}</p>
                </div>
                <span className="text-museum-accent text-sm font-body font-semibold">{book.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Merchandise */}
        <div>
          <h2 className="font-heading text-2xl text-white mb-6">Merchandising</h2>
          <div className="space-y-3">
            {(libreria?.merchandise ?? []).map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between border border-museum-accent/20 rounded-md p-3 bg-museum-darker hover:border-museum-accent/40 transition-colors"
              >
                <div>
                  <p className="text-white text-sm font-body font-medium">{item.title}</p>
                  <p className="text-white/60 text-xs font-body">{item.description}</p>
                </div>
                <span className="text-museum-accent text-sm font-body font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker text-center">
        <p className="text-white/80 text-sm font-body">
          Il bookshop è aperto negli orari del Museo. Per acquisti online contattare{' '}
          <span className="text-museum-accent">{siteSettings?.email}</span>
        </p>
      </div>
    </section>
  );
}
