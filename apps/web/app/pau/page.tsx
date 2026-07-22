import SiteImage from '@/components/SiteImage';
import { getPau } from '@/lib/payload';

export default async function PauPage() {
  const pau = await getPau();

  return (
    <>
      <section className="relative">
        <SiteImage
          media={pau?.heroImage}
          preset="hero-16-9"
          alt="PAU Segni Città-Museo"
          label="PAU Segni Città-Museo"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              {pau?.heroTitle ?? 'PAU'} <span className="text-museum-accent">{pau?.heroTitleAccent ?? 'Segni Città-Museo'}</span>
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              {pau?.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading text-2xl text-white">
              {pau?.introHeading}
            </h2>
            {pau?.introText?.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-white/80 font-body text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}

            <h3 className="font-heading text-xl text-white pt-4">Gli obiettivi del PAU</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(pau?.objectives ?? []).map((item) => (
                <div key={item.title} className="museum-chip p-4">
                  <p className="text-museum-accent font-body text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-white/70 text-xs font-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {(pau?.sideImages ?? []).map((img, idx) => (
              <SiteImage
                key={idx}
                media={img.image}
                preset="card-4-3"
                alt={img.caption ?? ''}
                label={img.caption ?? ''}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
