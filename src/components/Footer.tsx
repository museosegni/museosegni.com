import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-museum-darker border-t border-museum-accent/30 pt-16 pb-8 text-white/70 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <Logo className="h-14 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Valorizziamo il patrimonio archeologico e la storia millenaria della città di Segni, 
              offrendo percorsi di scoperta e ricerca.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">Con il contributo di</p>
              <div className="flex flex-col gap-1 text-xs">
                <span>L.R. 24/2019</span>
                <span>PianoMusei 2022</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Navigazione</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/museo" className="hover:text-museum-accent transition-colors">Il Museo</Link></li>
              <li><Link to="/pau" className="hover:text-museum-accent transition-colors">PAU - Città Museo</Link></li>
              <li><Link to="/itinerari" className="hover:text-museum-accent transition-colors">Itinerari</Link></li>
              <li><Link to="/collezioni" className="hover:text-museum-accent transition-colors">Collezioni</Link></li>
              <li><Link to="/museo/contatti" className="hover:text-museum-accent transition-colors">Orari e Biglietti</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Contatti</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-museum-accent shrink-0" />
                <span>Via Lauri 1, 00037 Segni (RM)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-museum-accent shrink-0" />
                <span>+39 069 72 600 72</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-museum-accent shrink-0" />
                <span>museo@comune.segni.rm.it</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-museum-accent shrink-0" />
                <div>
                  <p>Mar - Dom: 9:00 - 19:00</p>
                  <p className="text-xs opacity-60 italic">Lunedì chiuso</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg text-white mb-6">Seguici</h3>
            <p className="text-sm mb-6">
              Resta aggiornato sulle nostre attività, mostre ed eventi speciali.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-museum-accent/10 text-museum-accent hover:bg-museum-accent hover:text-museum-dark transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-museum-accent/10 text-museum-accent hover:bg-museum-accent hover:text-museum-dark transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-museum-accent/10 text-museum-accent hover:bg-museum-accent hover:text-museum-dark transition-all" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Museo Archeologico Comunale di Segni. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Accessibilità</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
