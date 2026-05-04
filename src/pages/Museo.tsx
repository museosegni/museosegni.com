import { Link } from 'react-router-dom';
import { BookOpen, Clock, Phone, Mail, MapPin, BookMarked, ArrowRight, FileText, Landmark as LandmarkIcon } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

const subpages = [
  {
    title: 'La Sede',
    description: 'Palazzo della Comunità: sede storica del museo dal XIII secolo',
    path: '/museo/sede',
    icon: LandmarkIcon,
  },
  {
    title: 'Storia del Museo',
    description: 'Il percorso espositivo e la storia della fondazione del museo',
    path: '/museo/storia',
    icon: BookOpen,
  },
  {
    title: 'Servizi',
    description: 'Biblioteca, archivio fotografico e servizi per ricercatori',
    path: '/museo/servizi',
    icon: BookMarked,
  },
  {
    title: 'Contatti e Orari',
    description: 'Informazioni pratiche per la visita',
    path: '/museo/contatti',
    icon: Clock,
  },
  {
    title: 'Libreria',
    description: 'Pubblicazioni e merchandising del bookshop',
    path: '/museo/libreria',
    icon: BookOpen,
  },
];

export default function Museo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage label="Museo Archeologico - 1920x1080" aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              Il <span className="text-museum-accent">Museo</span> Archeologico
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Un'istituzione d'eccellenza che valorizza il patrimonio antico e medievale di Segni,
              cuore pulsante di una straordinaria città-museo.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker neon-card-glow">
            <MapPin className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">Via Lauri 1, 00037 Segni (RM)</p>
          </div>
          <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker neon-card-glow">
            <Phone className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">+39 069 72 600 72</p>
          </div>
          <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker neon-card-glow">
            <Mail className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">museo@comune.segni.rm.it</p>
          </div>
          <div className="border border-museum-accent/30 rounded-lg p-4 bg-museum-darker neon-card-glow">
            <Clock className="w-5 h-5 text-museum-accent mb-2" />
            <p className="text-white/80 text-xs font-body">Mar, Ven, Sab, Dom: 09-13 / 15-19</p>
          </div>
        </div>

        <div className="text-white/80 font-body text-base leading-relaxed max-w-4xl space-y-6 mb-12">
          <p>
            Il Museo Archeologico Comunale di Segni, dal 2005 Marchio di Qualità della Regione
            Lazio, è ospitato nell’antico Palazzo della Comunità, costruito nel XIII secolo nel
            cuore del centro storico della città.
          </p>
          <p>
            Aperto al pubblico per la prima volta nel 2001, ampliato successivamente nel 2006,
            propone un allestimento interamente dedicato al ricchissimo patrimonio della città
            antica e medievale e del suo territorio: i molteplici itinerari che si snodano al
            suo interno divengono poi, all’esterno della struttura, singoli percorsi di visita
            a quella che può oggi vantarsi di essere una vera e propria “città – museo”.
          </p>
          <p>
            Il percorso espositivo, oltre ad un’ampia ed agevole pannellatura con plastici e
            ricostruzioni assonometriche, è arricchito da gruppi scultorei di notevole interesse,
            numerose iscrizioni sacre e funerarie, elementi architettonici decorativi e una
            vasta collezione di materiale ceramico d’età romana e medievale.
          </p>
          <p>
            Il Museo Archeologico Comunale di Segni fa parte del Sistema Museale dei Monti Lepini
            e del Sistema Museale Tematico Regionale Proust – Musei Archeologici della Regione
            Lazio.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 pt-4">
            <a 
              href="/docs/regolamento.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-museum-accent/10 border border-museum-accent/40 text-white px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent hover:text-museum-dark transition-all"
            >
              <FileText className="w-4 h-4" />
              Regolamento
            </a>
            <a 
              href="/docs/carta-servizi.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-museum-accent/10 border border-museum-accent/40 text-white px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-museum-accent hover:text-museum-dark transition-all"
            >
              <FileText className="w-4 h-4" />
              Carta dei Servizi
            </a>
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
          Esplora le <span className="text-museum-accent">sezioni</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subpages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex items-start gap-4 border border-museum-accent/30 rounded-lg p-5 bg-museum-darker hover:border-museum-accent transition-colors neon-card-glow"
            >
              <div className="p-2.5 rounded-md bg-museum-accent/10 text-museum-accent">
                <page.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-white group-hover:text-museum-accent transition-colors mb-1">
                  {page.title}
                </h3>
                <p className="text-white/60 text-sm font-body">{page.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-museum-accent/50 group-hover:text-museum-accent transition-colors mt-1" />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
