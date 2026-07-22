import type React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- logo statico, nessun bisogno di ottimizzazione next/image
    <img src="/logo-museo-segni.svg" alt="Museo Archeologico Comunale di Segni" className={className} />
  );
};

export default Logo;
