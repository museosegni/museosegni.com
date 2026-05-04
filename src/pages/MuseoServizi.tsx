import { BookOpen, Camera, GraduationCap, Archive, Wifi, Accessibility } from 'lucide-react';
import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

const services = [
  {
    icon: BookOpen,
    title: 'Biblioteca specializzata',
    description: 'La biblioteca del Museo conserva oltre 3.000 volumi dedicati all\'archeologia, alla storia antica e all\'arte del territorio signino. Sono disponibili monografie, riviste specializzate e tesi di laurea. L\'accesso è gratuito su prenotazione per studiosi e ricercatori.',
  },
  {
    icon: Archive,
    title: 'Archivio fotografico',
    description: 'L\'archivio conserva migliaia di fotografie storiche e documentarie relative agli scavi, ai reperti e ai monumenti di Segni. Le immagini coprono un arco cronologico che va dalla fine dell\'Ottocento ai giorni nostri, documentando l\'evoluzione degli studi archeologici.',
  },
  {
    icon: GraduationCap,
    title: 'Laboratorio didattico',
    description: 'Spazio attrezzato per attività educative rivolte a scuole di ogni ordine e grado. I laboratori propongono attività pratiche di archeologia sperimentale, dalla lavorazione della ceramica alla scrittura su tavolette cerate.',
  },
  {
    icon: Camera,
    title: 'Visite guidate',
    description: 'Il Museo organizza visite guidate per gruppi, scolaresche e singoli visitatori, sia all\'interno del percorso espositivo che presso i siti archeologici della città. È possibile prenotare visite in diverse lingue.',
  },
  {
    icon: Wifi,
    title: 'WiFi gratuito',
    description: 'Tutta l\'area del Museo è coperta da connessione WiFi gratuita per i visitatori. Sono inoltre disponibili QR code in ogni sala per accedere a contenuti multimediali aggiuntivi.',
  },
  {
    icon: Accessibility,
    title: 'Accessibilità',
    description: 'Il percorso museale è accessibile a persone con mobilità ridotta. Sono disponibili servizi per visitatori con disabilità visive e uditive, inclusi percorsi tattili e visite in LIS.',
  },
];

export default function MuseoServizi() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
          <span className="text-museum-accent">Servizi</span> del Museo
        </h1>
        <p className="text-white/60 font-body text-sm mb-8">
          Biblioteca, archivio e servizi per la ricerca e la didattica
        </p>

        <PlaceholderImage label="Sala biblioteca - 1920x1080" aspectRatio="16/9" className="w-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker hover:border-museum-accent transition-colors"
            >
              <service.icon className="w-6 h-6 text-museum-accent mb-3" />
              <h3 className="font-heading text-lg text-white mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
          <h3 className="font-heading text-xl text-white mb-3">Servizio per ricercatori</h3>
          <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
            Il Museo offre supporto specializzato a ricercatori, studenti universitari e studiosi interessati
            ai materiali della collezione. È possibile richiedere l\'accesso agli oggetti non esposti per studi
            specifici, previa presentazione di un progetto di ricerca. Il personale scientifico del Museo è
            disponibile per consulenze e collaborazioni scientifiche.
          </p>
          <p className="text-white/60 text-sm font-body">
            Per informazioni: <span className="text-museum-accent">museo@comune.segni.rm.it</span>
          </p>
        </div>
      </section>
    </Layout>
  );
}
