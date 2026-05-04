import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Landmark,
  Map,
  Boxes,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { label: 'Home', icon: Home, path: '/' },
  {
    label: 'Museo',
    icon: Landmark,
    path: '/museo',
    children: [
      { label: 'La Sede', path: '/museo/sede' },
      { label: 'Storia', path: '/museo/storia' },
      { label: 'Servizi', path: '/museo/servizi' },
      { label: 'Contatti e Orari', path: '/museo/contatti' },
      { label: 'Libreria', path: '/museo/libreria' },
    ],
  },
  {
    label: 'PAU - Segni Città Museo',
    icon: Map,
    path: '/pau',
    children: [
      { label: 'Siti del Parco (Itinerari)', path: '/itinerari' },
      { label: 'Chiesa e Culto', path: '/chiesa' },
      { label: 'Edifici Storici', path: '/edifici' },
    ],
  },
  {
    label: 'Collezioni',
    icon: Boxes,
    path: '/collezioni',
    children: [
      { label: 'Necropoli', path: '/collezioni/necropoli' },
      { label: 'Doni agli dei', path: '/collezioni/doni' },
      { label: 'Materiali antichi', path: '/collezioni/materiali' },
      { label: 'Iscrizioni', path: '/collezioni/iscrizioni' },
      { label: 'Produzioni e bolli', path: '/collezioni/produzioni' },
      { label: 'Sculture', path: '/collezioni/sculture' },
      { label: 'Terrecotte', path: '/collezioni/terrecotte' },
      { label: 'Tavola e cucina', path: '/collezioni/tavola-cucina' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Trova la sezione corrente in base al pathname
  const currentSection = navItems.find((item) => {
    if (location.pathname === item.path) return true;
    if (item.children) {
      return item.children.some(
        (child) =>
          location.pathname === child.path ||
          location.pathname.startsWith(child.path + '/')
      );
    }
    return false;
  });

  return (
    <>
      <header className="fixed bottom-0 lg:sticky lg:top-0 z-50 w-full bg-museum-dark/95 backdrop-blur-md border-t lg:border-t-0 lg:border-b border-museum-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-body transition-colors ${
                      location.pathname === item.path ||
                      (item.children &&
                        item.children.some(
                          (c) =>
                            location.pathname === c.path ||
                            location.pathname.startsWith(c.path + '/')
                        ))
                        ? 'text-museum-accent bg-museum-accent/10'
                        : 'text-white/80 hover:text-museum-accent hover:bg-museum-accent/5'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div
                      className={`absolute top-full mt-1 w-56 bg-museum-dark border border-museum-accent/40 rounded-md shadow-xl overflow-hidden z-50 ${
                        item.label === 'Collezioni' ? 'right-0' : 'left-0'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm font-body transition-colors ${
                            location.pathname === child.path ||
                            location.pathname.startsWith(child.path + '/')
                              ? 'text-museum-accent bg-museum-accent/10'
                              : 'text-white/80 hover:text-museum-accent hover:bg-museum-accent/5'
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-1">
              {/* Current section button */}
              {currentSection && (
                <button
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-md text-sm font-body transition-colors ${
                    sectionOpen
                      ? 'text-museum-accent bg-museum-accent/10'
                      : 'text-white/80'
                  }`}
                  onClick={() => {
                    if (currentSection.children) {
                      setSectionOpen(!sectionOpen);
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span className="max-w-[100px] sm:max-w-[160px] truncate">
                    {currentSection.label}
                  </span>
                  {currentSection.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        sectionOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
              )}

              {/* Mobile hamburger */}
              <button
                className="p-2 text-white"
                onClick={() => {
                  setMobileOpen(!mobileOpen);
                  setSectionOpen(false);
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay - hamburger panel */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-[55]"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed bottom-20 left-4 right-4 z-[60] bg-museum-dark border border-museum-accent/30 rounded-2xl shadow-2xl max-h-[70vh] overflow-y-auto">
            <nav className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-body ${
                    location.pathname === item.path ||
                    (item.children &&
                      item.children.some(
                        (c) =>
                          location.pathname === c.path ||
                          location.pathname.startsWith(c.path + '/')
                      ))
                      ? 'text-museum-accent bg-museum-accent/10'
                      : 'text-white/80'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Mobile section dropdown */}
      {sectionOpen && currentSection?.children && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-[55]"
            onClick={() => setSectionOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed bottom-20 left-4 right-4 z-[60] bg-museum-dark border border-museum-accent/30 rounded-2xl shadow-2xl max-h-[70vh] overflow-y-auto">
            <nav className="px-4 py-3 space-y-0.5">
              {currentSection.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`block px-3 py-2 rounded-md text-sm font-body ${
                    location.pathname === child.path ||
                    location.pathname.startsWith(child.path + '/')
                      ? 'text-museum-accent bg-museum-accent/10'
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setSectionOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
