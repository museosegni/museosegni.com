import SiteImage from '@/components/SiteImage';
import { getMuseoStoria } from '@/lib/payload';

export default async function MuseoStoriaPage() {
  const storia = await getMuseoStoria();
  const sideImages = storia?.sideImages ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
        Storia del <span className="text-museum-accent">Museo</span>
      </h1>
      <p className="text-white/60 font-body text-sm mb-8">Il percorso espositivo e la sua evoluzione</p>

      <SiteImage
        media={storia?.heroImage}
        preset="hero-16-9"
        alt="Percorso espositivo"
        label="Percorso espositivo"
        className="w-full mb-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="prose prose-invert max-w-none">
          {(storia?.sections ?? []).map((section, idx) => (
            <div key={idx}>
              <h2 className="font-heading text-2xl text-white mb-4">{section.heading}</h2>
              {section.body?.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="text-white/80 font-body text-sm leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {sideImages.map((img, idx) => (
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

      <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
        <h3 className="font-heading text-xl text-white mb-4">Il percorso espositivo attuale</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(storia?.sale ?? []).map((sala) => (
            <div key={sala.title} className="border border-museum-accent/20 rounded-md p-3 bg-museum-dark">
              <p className="text-museum-accent font-body text-sm font-semibold">{sala.title}</p>
              <p className="text-white/70 text-xs font-body">{sala.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
