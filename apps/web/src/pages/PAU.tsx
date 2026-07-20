import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

export default function PAU() {
  return (
    <Layout>
      <section className="relative">
        <PlaceholderImage label="PAU Segni Città-Museo - 1920x1080" aspectRatio="16/9" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              PAU <span className="text-museum-accent">Segni Città-Museo</span>
            </h1>
            <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl">
              Il Piano di Assetto Urbanistico per un museo diffuso nel territorio.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading text-2xl text-white">
              Il concetto di <span className="text-museum-accent">museo diffuso</span>
            </h2>
            <p className="text-white/80 font-body text-sm leading-relaxed">
              Il Parco Archeologico Urbano Diffuso “Segni Città-Museo” è stato istituito a luglio 2020.
              L’idea è stata quella di dare finalmente forma a quello che è sempre stato definito come
              un museo a cielo aperto: la città di Segni.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed">
              Con l’acquisto, la valorizzazione e l’apertura al pubblico dell’area del Ninfeo di Q. Mutius,
              si è aggiunto il tassello che mancava a questo itinerario archeologico urbano, che oltre alla
              spettacolare fontana di II secolo a.C., comprende il circuito delle mura, l’area dell’antica
              acropoli, il complesso ellenistico di Santa Lucia, l’area del foro e della Cattedrale e, infine,
              l’area archeologica del tempio d’Ercole.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed">
              A questi complessi archeologici e alla loro trasformazione nel corso dell’età medievale,
              abbiamo aggiunto, per completezza, delle piccole schede informative riguardo gli edifici di
              culto e i principali palazzi storici.
            </p>

            <h3 className="font-heading text-xl text-white pt-4">Gli obiettivi del PAU</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Valorizzazione', desc: 'Valorizzare il patrimonio archeologico e storico-artistico della città' },
                { title: 'Frubilità', desc: 'Rendere i siti accessibili e visitabili con un percorso integrato' },
                { title: 'Qualità urbana', desc: 'Migliorare la qualità dello spazio pubblico e della vita cittadina' },
                { title: 'Sostenibilità', desc: 'Promuovere un turismo culturale sostenibile e responsabile' },
                { title: 'Identità', desc: 'Rafforzare l&apos;identità locale e il senso di appartenenza' },
                { title: 'Ricerca', desc: 'Sostenere la ricerca scientifica e la formazione' },
              ].map((item) => (
                <div key={item.title} className="border border-museum-accent/20 rounded-md p-4 bg-museum-darker">
                  <p className="text-museum-accent font-body text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-white/70 text-xs font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <PlaceholderImage label="Piano urbanistico - 1200x900" aspectRatio="4/3" className="w-full" />
            <PlaceholderImage label="Percorso archeologico - 1200x900" aspectRatio="4/3" className="w-full" />
            <PlaceholderImage label="Riqualificazione urbana - 1200x900" aspectRatio="4/3" className="w-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
