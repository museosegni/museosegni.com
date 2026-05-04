import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Landmark, Boxes } from 'lucide-react';

const bottomItems = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'PAU', icon: Map, path: '/pau' },
  { label: 'Museo', icon: Landmark, path: '/museo' },
  { label: 'Collezioni', icon: Boxes, path: '/collezioni' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-museum-dark/95 backdrop-blur-md border-t border-museum-accent/30 pb-safe">
      <div className="flex items-center justify-around h-16">
        {bottomItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors ${
                isActive
                  ? 'text-museum-accent'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-body">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
