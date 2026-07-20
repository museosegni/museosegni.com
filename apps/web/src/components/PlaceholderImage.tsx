
interface PlaceholderImageProps {
  label: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
  width?: string;
  height?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  label,
  aspectRatio = '16/9',
  width,
  height,
  className = '',
}) => {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
  };

  return (
    <div
      className={`bg-museum-darker border border-museum-accent/40 flex items-center justify-center relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
      style={width || height ? { width, height, aspectRatio: undefined } : {}}
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-museum-accent/20 to-transparent" />
      <div className="text-center z-10 p-4">
        <div className="text-museum-accent/60 text-xs font-body uppercase tracking-widest mb-1">
          {aspectRatio === '16/9' && '1920 x 1080px'}
          {aspectRatio === '4/3' && '1200 x 900px'}
          {aspectRatio === '1/1' && '1080 x 1080px'}
          {aspectRatio === '21/9' && '2100 x 900px'}
        </div>
        <div className="text-white/50 text-sm font-body">{label}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
