import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';

export interface Artifact {
  name: string;
  description: string;
  object?: string;
  provenance?: string;
  dating?: string;
  room?: string;
  bibliography?: string;
  image?: string;
}

interface ArtifactDialogProps {
  artifact: Artifact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ArtifactDialog({
  artifact,
  open,
  onOpenChange,
}: ArtifactDialogProps) {
  if (!artifact) return null;

  const hasDetails =
    artifact.object ||
    artifact.provenance ||
    artifact.dating ||
    artifact.room ||
    artifact.bibliography;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-5xl w-full bg-museum-dark border border-museum-accent/30 p-0 overflow-hidden"
      >
        <DialogTitle className="sr-only">{artifact.name}</DialogTitle>

        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-museum-darker flex items-center justify-center p-6 md:p-8">
            <div className="w-full max-w-sm">
              <PlaceholderImage
                label={`${artifact.name} - 1080x1080`}
                aspectRatio="1/1"
                className="border-museum-accent/20 rounded-lg"
              />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[70vh] md:max-h-[80vh]">
            <h2 className="font-heading text-xl md:text-2xl text-white mb-5">
              {artifact.name}
            </h2>

            {hasDetails ? (
              <div className="space-y-4">
                {artifact.object && (
                  <div>
                    <span className="block text-museum-accent font-heading text-sm mb-1">
                      Oggetto
                    </span>
                    <p className="text-white/80 font-body text-sm leading-relaxed">
                      {artifact.object}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {artifact.provenance && (
                    <div>
                      <span className="block text-museum-accent font-heading text-sm mb-1">
                        Provenienza
                      </span>
                      <p className="text-white/80 font-body text-sm">
                        {artifact.provenance}
                      </p>
                    </div>
                  )}

                  {artifact.dating && (
                    <div>
                      <span className="block text-museum-accent font-heading text-sm mb-1">
                        Datazione
                      </span>
                      <p className="text-white/80 font-body text-sm">
                        {artifact.dating}
                      </p>
                    </div>
                  )}

                  {artifact.room && (
                    <div>
                      <span className="block text-museum-accent font-heading text-sm mb-1">
                        Sala
                      </span>
                      <p className="text-white/80 font-body text-sm">
                        {artifact.room}
                      </p>
                    </div>
                  )}
                </div>

                {artifact.bibliography && (
                  <div>
                    <span className="block text-museum-accent font-heading text-sm mb-1">
                      Bibliografia
                    </span>
                    <p className="text-white/80 font-body text-sm leading-relaxed">
                      {artifact.bibliography}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-white/70 font-body text-sm leading-relaxed">
                {artifact.description}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
