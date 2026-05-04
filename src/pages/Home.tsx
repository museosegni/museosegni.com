import { Link } from 'react-router-dom';
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CalendarDays,
  Landmark,
  Map,
  Boxes,
} from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';
import { useState } from 'react';

const newsItems = [
  {
    title: 'Nuova mostra archeologica',
    date: '15 Aprile 2026',
    excerpt: 'Inaugurazione della nuova sezione espositiva dedicata ai reperti della necropoli orientalizzante.',
  },
  {
    title: 'Visita guidata alle Mura Poligonali',
    date: '10 Aprile 2026',
    excerpt: 'Prenotazioni aperte per la visita guidata serale del 25 aprile alle mura poligonali.',
  },
  {
    title: 'Restauri al Ninfeo di Q. Mutius',
    date: '5 Aprile 2026',
    excerpt: 'Conclusi i lavori di restauro del monumentale ninfeo romano. Riapertura al pubblico.',
  },
];

const featuredCards = [
  {
    title: 'Mura Poligonali',
    description: 'Le imponenti fortificazioni della città antica',
    image: 'Mura Poligonali',
    path: '/itinerari/mura-poligonali',
    icon: Map,
  },
  {
    title: 'Necropoli',
    description: 'Oggetti per l\'ultimo viaggio',
    image: 'Necropoli',
    path: '/collezioni/necropoli',
    icon: Boxes,
  },
  {
    title: 'Museo Archeologico',
    description: 'Scopri la storia e i servizi del museo',
    image: 'Museo Archeologico',
    path: '/museo',
    icon: Landmark,
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    people: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per la tua prenotazione! Ti contatteremo presto.');
    setFormData({ name: '', email: '', date: '', people: '1', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage label="Hero Home - 1920x1080" aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Museo Archeologico
              <br />
              <span className="text-museum-accent">Comunale di Segni</span>
            </h1>
            <p className="text-white/80 font-body text-base sm:text-lg max-w-xl mb-6">
              Dal 2001 il museo valorizza il patrimonio antico e medievale di Segni, unendo gli
              itinerari interni ai percorsi esterni di una vera e propria città-museo.
            </p>
            <Link
              to="/itinerari"
              className="inline-flex items-center gap-2 bg-museum-accent text-museum-dark px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent-light transition-colors"
            >
              Esplora gli itinerari
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
        <p className="text-white/70 font-body text-base leading-relaxed max-w-4xl mb-10">
          Aperto al pubblico per la prima volta nel 2001, ampliato successivamente nel 2006, propone un allestimento interamente dedicato al ricchissimo patrimonio della città antica e medievale e del suo territorio: i molteplici itinerari che si snodano al suo interno divengono poi, all’esterno della struttura, singoli percorsi di visita a quella che può oggi vantarsi di essere una vera e propria “città – museo”.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group block border border-museum-accent/30 rounded-lg overflow-hidden hover:border-museum-accent transition-colors bg-museum-darker neon-card-glow"
            >
              <PlaceholderImage label={`${card.image} - 1200x900`} aspectRatio="4/3" className="border-0 rounded-none" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <card.icon className="w-4 h-4 text-museum-accent" />
                  <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm font-body">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-museum-darker border-y border-museum-accent/20 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
            <span className="text-museum-accent">News</span> e Eventi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news, idx) => (
              <div key={idx} className="border border-museum-accent/30 rounded-lg p-5 bg-museum-dark hover:border-museum-accent/60 transition-colors neon-card-glow">
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
            <div className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker space-y-4 neon-card-glow">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Orari di apertura</p>
                  <p className="text-white/70 text-sm font-body">Mar, Ven, Sab, Dom: 09:00 - 13:00 / 15:00 - 19:00</p>
                  <p className="text-white/70 text-sm font-body">Lun, Mer, Gio: chiuso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Indirizzo</p>
                  <p className="text-white/70 text-sm font-body">Via Lauri 1, 00037 Segni (RM)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Telefono</p>
                  <p className="text-white/70 text-sm font-body">+39 069 72 600 72</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-museum-accent mt-0.5" />
                <div>
                  <p className="text-white font-body text-sm font-semibold">Email</p>
                  <p className="text-white/70 text-sm font-body">museo@comune.segni.rm.it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-white mb-6">
              Prenota una <span className="text-museum-accent">Visita</span>
            </h2>
            <form onSubmit={handleSubmit} className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-body mb-1.5">Nome e cognome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-museum-dark border border-museum-accent/30 rounded-md px-3 h-[42px] text-white text-base font-body focus:border-museum-accent focus:outline-none"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-body mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-museum-dark border border-museum-accent/30 rounded-md px-3 h-[42px] text-white text-base font-body focus:border-museum-accent focus:outline-none"
                    placeholder="mario@esempio.it"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-body mb-1.5">Data della visita</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-museum-dark border border-museum-accent/30 rounded-md px-3 h-[42px] text-white text-base font-body focus:border-museum-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-body mb-1.5">Numero persone</label>
                  <select
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    className="w-full bg-museum-dark border border-museum-accent/30 rounded-lg px-3 h-[42px] text-white text-base font-body focus:border-museum-accent focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="bg-museum-dark">{n} {n === 1 ? 'persona' : 'persone'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-body mb-1.5">Note aggiuntive</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-museum-dark border border-museum-accent/30 rounded-md px-3 py-2 text-white text-sm font-body focus:border-museum-accent focus:outline-none resize-none"
                  placeholder="Richieste particolari, accessibilità, lingua guida..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-museum-accent text-museum-dark font-body font-semibold py-2.5 rounded-md hover:bg-museum-accent-light transition-colors text-sm"
              >
                Invia richiesta di prenotazione
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
