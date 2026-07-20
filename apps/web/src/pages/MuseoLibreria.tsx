import Layout from '../components/Layout';
import PlaceholderImage from '../components/PlaceholderImage';

const books = [
  { title: 'Signia: storia e archeologia', author: 'A.M. Reggiani', price: '€ 28,00' },
  { title: 'Le mura poligonali del Lazio', author: 'G. Lugli', price: '€ 35,00' },
  { title: 'Iscrizioni latine di Segni', author: 'M. Corbier', price: '€ 42,00' },
  { title: 'La ceramica a vernice nera di Signia', author: 'P. Pellicetti', price: '€ 24,00' },
  { title: 'Guida ai siti archeologici di Segni', author: 'Comune di Segni', price: '€ 12,00' },
  { title: 'Il Museo Archeologico di Segni', author: 'S. Quilici Gigli', price: '€ 18,00' },
  { title: 'Ercole e il suo culto a Segni', author: 'E. Mangani', price: '€ 22,00' },
  { title: 'Segni medievale: chiese e monasteri', author: 'R. Campani', price: '€ 30,00' },
];

const items = [
  { title: 'T-shirt Museo', desc: 'Cotone organico con logo', price: '€ 18,00' },
  { title: 'Tote bag', desc: 'Tela di cotone con stampa', price: '€ 12,00' },
  { title: 'Poster Mura Poligonali', desc: 'Stampa artistica 50x70', price: '€ 15,00' },
  { title: 'Magnete ceramica', desc: 'Reproduzione antefissa', price: '€ 6,00' },
  { title: 'Quaderno appunti', desc: 'Copertina rigida', price: '€ 10,00' },
  { title: 'Cartoline set', desc: '6 cartoline dei siti', price: '€ 8,00' },
];

export default function MuseoLibreria() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
          <span className="text-museum-accent">Libreria</span> e Bookshop
        </h1>
        <p className="text-white/60 font-body text-sm mb-10">
          Pubblicazioni, guide e merchandising ufficiale del Museo
        </p>

        <PlaceholderImage label="Bookshop interno - 1920x1080" aspectRatio="16/9" className="w-full mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Books */}
          <div>
            <h2 className="font-heading text-2xl text-white mb-6">Pubblicazioni</h2>
            <div className="space-y-3">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="flex items-center justify-between border border-museum-accent/20 rounded-md p-3 bg-museum-darker hover:border-museum-accent/40 transition-colors"
                >
                  <div>
                    <p className="text-white text-sm font-body font-medium">{book.title}</p>
                    <p className="text-white/60 text-xs font-body">{book.author}</p>
                  </div>
                  <span className="text-museum-accent text-sm font-body font-semibold">{book.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Merchandise */}
          <div>
            <h2 className="font-heading text-2xl text-white mb-6">Merchandising</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between border border-museum-accent/20 rounded-md p-3 bg-museum-darker hover:border-museum-accent/40 transition-colors"
                >
                  <div>
                    <p className="text-white text-sm font-body font-medium">{item.title}</p>
                    <p className="text-white/60 text-xs font-body">{item.desc}</p>
                  </div>
                  <span className="text-museum-accent text-sm font-body font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-museum-accent/30 rounded-lg p-6 bg-museum-darker text-center">
          <p className="text-white/80 text-sm font-body">
            Il bookshop è aperto negli orari del Museo. Per acquisti online contattare{' '}
            <span className="text-museum-accent">museo@comune.segni.rm.it</span>
          </p>
        </div>
      </section>
    </Layout>
  );
}
