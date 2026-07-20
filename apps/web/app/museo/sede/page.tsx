import SiteImage from '@/components/SiteImage';
import { getMuseoSede } from '@/lib/payload';

export default async function MuseoSedePage() {
  const sede = await getMuseoSede();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
        La <span className="text-museum-accent">Sede</span>
      </h1>
      <p className="text-white/60 font-body text-sm mb-10">{sede?.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="font-heading text-2xl text-white mb-4">{sede?.heading}</h2>
          <div className="text-white/80 font-body text-base space-y-4">
            {sede?.body?.split('\n\n').map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
          </div>
        </div>
        <SiteImage
          media={sede?.exteriorImage}
          preset="card-4-3"
          alt="Palazzo della Comunità - Esterno"
          label="Palazzo della Comunità - Esterno"
          className="rounded-lg neon-card-glow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {(sede?.factCards ?? []).map((card) => (
          <div key={card.title} className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker neon-card-glow">
            <h3 className="font-heading text-xl text-white mb-3">{card.title}</h3>
            <p className="text-white/60 text-sm font-body">{card.description}</p>
          </div>
        ))}
      </div>

      <SiteImage
        media={sede?.interiorImage}
        preset="banner-21-9"
        alt="Interni del Museo - Sale espositive"
        label="Interni del Museo - Sale espositive"
        className="rounded-lg neon-card-glow mb-10"
      />
    </section>
  );
}
