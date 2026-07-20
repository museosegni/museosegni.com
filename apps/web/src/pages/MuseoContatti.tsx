import { Clock, Phone, Mail, MapPin, Train, Car, Ticket } from 'lucide-react';
import Layout from '../components/Layout';

export default function MuseoContatti() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
          Contatti e <span className="text-museum-accent">Orari</span>
        </h1>
        <p className="text-white/60 font-body text-sm mb-10">
          Informazioni pratiche per pianificare la tua visita
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-museum-accent" />
                Indirizzo
              </h3>
              <p className="text-white/80 text-sm font-body">Via Lauri 1</p>
              <p className="text-white/80 text-sm font-body">00037 Segni (RM)</p>
            </div>

            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-museum-accent" />
                Telefono
              </h3>
              <p className="text-white/80 text-sm font-body">+39 069 72 600 72</p>
            </div>

            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-museum-accent" />
                Email
              </h3>
              <p className="text-white/80 text-sm font-body">museo@comune.segni.rm.it</p>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-museum-accent" />
                Orari di apertura
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-white font-body text-sm mb-2">Orario di apertura</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-white/70">Martedì, Venerdì, Sabato e Domenica</span>
                      <span className="text-white text-right">09:00 - 13:00 / 15:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-white/70">Lunedì, Mercoledì, Giovedì</span>
                      <span className="text-red-400">Chiuso</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-xs font-body mt-4">
                * Chiuso il 25 dicembre, 1 gennaio e 1 maggio. Orari speciali durante le festività.
              </p>
            </div>

            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-museum-accent" />
                Biglietti
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-white/70">Ingresso</span>
                  <span className="text-museum-accent font-semibold text-lg">Gratuito</span>
                </div>
              </div>
            </div>

            <div className="border border-museum-accent/30 rounded-lg p-5 bg-museum-darker neon-card-glow">
              <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-museum-accent" />
                Come arrivare
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-museum-accent mt-1" />
                  <p className="text-white/80 text-sm font-body">
                    Autostrada A1, uscita Colleferro. Seguire SP55 in direzione Segni per circa 15 km.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-museum-accent mt-1" />
                  <p className="text-white/80 text-sm font-body">
                    Stazione FS di Segni (linea Roma-Cassino). Dal centro storico 10 minuti a piedi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
