'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalState = {
  sponsorOpen: boolean;
  speakerOpen: boolean;
  openSponsor: () => void;
  closeSponsor: () => void;
  openSpeaker: () => void;
  closeSpeaker: () => void;
};

const ModalContext = createContext<ModalState | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [sponsorOpen, setSponsorOpen] = useState(false);
  const [speakerOpen, setSpeakerOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        sponsorOpen,
        speakerOpen,
        openSponsor: () => setSponsorOpen(true),
        closeSponsor: () => setSponsorOpen(false),
        openSpeaker: () => setSpeakerOpen(true),
        closeSpeaker: () => setSpeakerOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModals must be used within ModalProvider');
  return ctx;
}
