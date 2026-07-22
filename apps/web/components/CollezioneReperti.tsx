'use client';

import { useState } from 'react';
import SiteImage from './SiteImage';
import ArtifactDialog from './ArtifactDialog';
import type { Artifact } from '@/lib/types';

export default function CollezioneReperti({ items }: { items: Artifact[] }) {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openArtifact = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => openArtifact(item)}
            className="text-left museum-card museum-interactive overflow-hidden cursor-pointer"
          >
            <SiteImage
              media={item.image}
              preset="square-1-1"
              alt={item.name}
              label={item.name}
              className="rounded-none"
            />
            <div className="p-4">
              <h3 className="font-heading text-base text-white mb-1">{item.name}</h3>
              <p className="text-white/60 text-xs font-body line-clamp-2">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      <ArtifactDialog artifact={selectedArtifact} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
