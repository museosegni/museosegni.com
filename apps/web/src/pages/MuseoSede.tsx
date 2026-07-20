import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

export default function MuseoSede() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
          La <span className="text-museum-accent">Sede</span>
        </h1>
        <p className="text-white/60 font-body text-sm mb-10">
          Palazzo della Comunità: un gioiello del XIII secolo nel cuore di Segni
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="font-heading text-2xl text-white mb-4">Il Palazzo della Comunità</h2>
            <div className="text-white/80 font-body text-base space-y-4">
              <p>
                Il palazzo fu costruito verso la metà del XIII secolo e fu la sede del Comune fino
                al 1876. Dal 2001 ospita il Museo Archeologico Comunale di Segni. Nella sua fase
                originaria l’edificio doveva essere costituito da un portico al pianterreno formato
                da una serie di arcate a tutto sesto, che alternano blocchetti di calcare a quelli
                di tufo, dando un effetto bicromo molto vivace.
              </p>
              <p>
                Al secondo piano si apriva una loggia con ampi finestroni ad arco acuto in
                blocchetti di tufo e al terzo piano probabilmente vi era una seconda loggia, più
                piccola. Il palazzo, come mostra la muratura stessa portata alla luce durante i
                restauri effettuati proprio in occasione dell’individuazione dell’edificio come
                sede museale, ha subito numerosi rifacimenti nel corso dei secoli.
              </p>
              <p>
                Una ricostruzione del Palazzo e dell’assetto della piazza nel Duecento si trova
                nelle sezioni medievali del percorso espositivo del Museo.
              </p>
            </div>
          </div>
          <PlaceholderImage label="Palazzo della Comunità - Esterno" aspectRatio="4/3" className="rounded-lg neon-card-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker neon-card-glow">
            <h3 className="font-heading text-xl text-white mb-3">XIII Secolo</h3>
            <p className="text-white/60 text-sm font-body">Periodo di costruzione dell'edificio originario.</p>
          </div>
          <div className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker neon-card-glow">
            <h3 className="font-heading text-xl text-white mb-3">Centro Storico</h3>
            <p className="text-white/60 text-sm font-body">Posizione privilegiata nel fulcro dell'antica Signia.</p>
          </div>
          <div className="border border-museum-accent/30 rounded-lg p-6 bg-museum-darker neon-card-glow">
            <h3 className="font-heading text-xl text-white mb-3">Architettura</h3>
            <p className="text-white/60 text-sm font-body">Elementi gotici e romanici conservati nel tempo.</p>
          </div>
        </div>

        <PlaceholderImage label="Interni del Museo - Sale espositive" aspectRatio="21/9" className="rounded-lg neon-card-glow mb-10" />
      </section>
    </Layout>
  );
}
