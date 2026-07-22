import Link from 'next/link';
import { Clock, Phone, Mail, MapPin, ArrowRight, CalendarDays, Landmark, Map, Boxes } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import BookingForm from '@/components/BookingForm';
import { getHome, getSiteSettings } from '@/lib/payload';

// Le 3 card in evidenza puntano a route fisse del sito (itinerario, collezione,
// pagina museo): il collegamento resta nel template, solo testo/immagine vengono dal CMS.
const featuredCardLinks = [
  { path: '/itinerari/mura-poligonali', icon: Map },
  { path: '/collezioni/necropoli', icon: Boxes },
  { path: '/museo', icon: Landmark },
];

export default async function Home() {
  const [home, siteSettings] = await Promise.all([getHome(), getSiteSettings()]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] sm:aspect-video">
        <SiteImage
          media={home?.heroImage}
          preset="hero-16-9"
          alt="Sede del Museo Archeologico Comunale di Segni"
          label="Sede del Museo"
          className="absolute inset-0 w-full h-full [&>img]:h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              {home?.heroTitle ?? 'Museo Archeologico'}
              <br />
              <span className="text-museum-accent">{home?.heroTitleAccent ?? 'Comunale di Segni'}</span>
            </h1>
            <p className="text-white/80 font-body text-base sm:text-lg max-w-xl mb-6">
              {home?.heroSubtitle}
            </p>
            <Link
              href="/itinerari"
              className="inline-flex items-center gap-2 bg-museum-accent text-museum-dark px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent-light transition-colors"
            >
              {home?.heroCtaLabel ?? 'Esplora gli itinerari'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="font-heading text-2xl sm:text-3xl text-white mb-4">
          Scopri il <span className="text-museum-accent">Museo</span>
        </h2>
        <p className="text-white/70 font-body text-base leading-relaxed max-w-4xl mb-6 whitespace-pre-line">
          {home?.introText}
        </p>
        {home?.quoteText && (
          <blockquote className="museum-quote-rule pl-4 mb-10 max-w-4xl">
            <p className="text-white/70 font-body text-base italic leading-relaxed">{home.quoteText}</p>
            {home?.quoteSource && (
              <cite className="block mt-2 text-white/50 font-body text-sm not-italic">{home.quoteSource}</cite>
            )}
          </blockquote>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(home?.featuredCards ?? []).map((card, idx) => {
            const link = featuredCardLinks[idx];
            const Icon = link?.icon ?? Landmark;
            return (
              <Link
                key={card.title}
                href={link?.path ?? '/museo'}
                className="group block museum-card museum-interactive overflow-hidden"
              >
                <SiteImage
                  media={card.image}
                  preset="card-4-3"
                  alt={card.title}
                  label={card.title}
                  className="rounded-none"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-museum-accent" />
                    <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm font-body">{card.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-museum-darker museum-edge-y py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
            <span className="text-museum-accent">News</span> e Eventi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(home?.newsItems ?? []).map((news, idx) => (
              <div key={idx} className="museum-card museum-interactive p-5">
                <div className="flex items-center gap-2 text-museum-accent text-xs font-body mb-3">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {news.date}
                </div>
                <h3 className="font-heading text-lg text-white mb-2">{news.title}</h3>
                <p className="text-white/60 text-sm font-body">{news.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Quick Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-white mb-6">
              <span className="text-museum-accent">Orari</span> e Contatti
            </h2>
            <div className="museum-panel p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Orari di apertura</p>
                  {(siteSettings?.openingHours ?? []).map((h, idx) => (
                    <p key={idx} className="text-white/70 text-sm font-body">
                      {h.days}{h.closed ? ': chiuso' : h.hours ? `: ${h.hours}` : ''}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Indirizzo</p>
                  <p className="text-white/70 text-sm font-body">{siteSettings?.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Telefono</p>
                  <p className="text-white/70 text-sm font-body">{siteSettings?.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Email</p>
                  <p className="text-white/70 text-sm font-body">{siteSettings?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-white mb-6">
              Prenota una <span className="text-museum-accent">Visita</span>
            </h2>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
