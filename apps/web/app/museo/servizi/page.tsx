import { BookOpen, Camera, GraduationCap, Archive, Wifi, Accessibility, type LucideIcon } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { getMuseoServizi, getSiteSettings } from '@/lib/payload';

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Camera,
  GraduationCap,
  Archive,
  Wifi,
  Accessibility,
};

export default async function MuseoServiziPage() {
  const [servizi, siteSettings] = await Promise.all([getMuseoServizi(), getSiteSettings()]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
        <span className="text-museum-accent">Servizi</span> del Museo
      </h1>
      <p className="text-white/60 font-body text-sm mb-8">
        Biblioteca, archivio e servizi per la ricerca e la didattica
      </p>

      <SiteImage
        media={servizi?.heroImage}
        preset="hero-16-9"
        alt="Sala biblioteca"
        label="Sala biblioteca"
        className="w-full mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(servizi?.services ?? []).map((service) => {
          const Icon = ICONS[service.icon] ?? BookOpen;
          return (
            <div
              key={service.title}
              className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker hover:border-museum-accent transition-colors"
            >
              <Icon className="w-6 h-6 text-museum-accent mb-3" />
              <h3 className="font-heading text-lg text-white mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
        <h3 className="font-heading text-xl text-white mb-3">{servizi?.researchSectionTitle}</h3>
        <p className="text-white/80 font-body text-sm leading-relaxed mb-4">{servizi?.researchText}</p>
        <p className="text-white/60 text-sm font-body">
          Per informazioni: <span className="text-museum-accent">{siteSettings?.email}</span>
        </p>
      </div>
    </section>
  );
}
