import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

export default function MuseoStoria() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
          Storia del <span className="text-museum-accent">Museo</span>
        </h1>
        <p className="text-white/60 font-body text-sm mb-8">Il percorso espositivo e la sua evoluzione</p>

        <PlaceholderImage label="Percorso espositivo - 1920x1080" aspectRatio="16/9" className="w-full mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="font-heading text-2xl text-white mb-4">La Ricerca e la Nascita</h2>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              La storia del Museo Archeologico Comunale di Segni è caratterizzata da un fitto e continuo intreccio
              fra attività di ricerca scientifica e impegno di divulgazione dei risultati di tale attività.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Il primo allestimento del Museo nacque infatti dalla volontà di presentare al pubblico la nuova
              immagine della città antica che si stava definendo grazie a una lunga fase di ricerche di topografia
              antica, avviate verso la metà degli anni Ottanta dello scorso secolo, guidate da un gruppo di
              studiosi facenti capo all’Università degli Studi di Salerno e all’Istituto di Storia e di Arte del
              Lazio Meridionale, coordinati da Giovanni Maria De Rossi e da Margherita Cancellieri.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              In tale contesto si inserì una tesi di laurea assegnata nel 1983 a Francesco Maria Cifarelli da
              Ferdinando Castagnoli, allora titolare della Cattedra di Topografia di Roma e dell’Italia antica
              presso l’Università degli Studi di Roma “La Sapienza”.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Il museo, aperto a marzo del 2001, è il risultato di questo progetto e ha visto F. M. Cifarelli
              direttore dal 1996 al 2014. Tuttavia il Museo è sempre stato protagonista di nuovi programmi di
              ricerca scientifica, tali da necessitare già nel 2006 un profondo aggiornamento del percorso
              espositivo.
            </p>
            <h2 className="font-heading text-2xl text-white mb-4">Divulgazione e Futuro</h2>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Le indagini scientifiche e il continuo lavoro didattico e divulgativo sono stati indubbiamente una
              costante del Museo, per meglio far comprendere le ragioni di questa istituzione e per presentare al
              pubblico i risultati di tale impegno.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Il museo, infatti, è un’istituzione nata per essere attiva in tutti i livelli del “fare cultura”,
              da quello prettamente scientifico, destinato apparentemente a pochi, a quello della corretta
              diffusione delle conoscenze sul mercato della divulgazione.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Il Museo Archeologico di Segni dal 2006 non ha potuto inserire nel percorso espositivo tutte le
              novità emerse dai risultati degli ultimi 15 anni di ricerche; tuttavia questi risultati si sono
              via via presentati e divulgati.
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed italic">
              Ci auguriamo presto di poter ampliare la narrazione di questa affascinante storia!
            </p>
          </div>
          <div className="space-y-6">
            <PlaceholderImage label="Sala espositiva - 1200x900" aspectRatio="4/3" className="w-full" />
            <PlaceholderImage label="Reperti in mostra - 1200x900" aspectRatio="4/3" className="w-full" />
          </div>
        </div>

        <div className="mt-12 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker">
          <h3 className="font-heading text-xl text-white mb-4">Il percorso espositivo attuale</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Sala I', desc: 'Preistoria e protostoria' },
              { title: 'Sala II', desc: 'L\'età del Ferro e l\'Orientalizzante' },
              { title: 'Sala III', desc: 'La colonia romana' },
              { title: 'Sala IV', desc: 'L\'età imperiale' },
              { title: 'Sala V', desc: 'Corredi funerari' },
              { title: 'Sala VI', desc: 'Sculture e ritratti' },
              { title: 'Sala VII', desc: 'Iscrizioni e epigrafia' },
              { title: 'Sala VIII', desc: 'Materiali medievali' },
            ].map((sala) => (
              <div key={sala.title} className="border border-museum-accent/20 rounded-md p-3 bg-museum-dark">
                <p className="text-museum-accent font-body text-sm font-semibold">{sala.title}</p>
                <p className="text-white/70 text-xs font-body">{sala.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
