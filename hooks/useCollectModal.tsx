"use client";

import { createContext, useContext, useState } from "react";

type CollectContextType = {
  isOpen: boolean;
  trackTitle: string;
  open: (title: string) => void;
  close: () => void;
};

const CollectContext = createContext<CollectContextType | null>(null);

export function CollectModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [trackTitle, setTrackTitle] = useState("");

  const open = (title: string) => {
    setTrackTitle(title);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setTrackTitle("");
  };

  return (
    <CollectContext.Provider value={{ isOpen, trackTitle, open, close }}>
      {children}
    </CollectContext.Provider>
  );
}

export const useCollectModal = () => {
  const context = useContext(CollectContext);
  if (!context) throw new Error("useCollectModal must be used within CollectModalProvider");
  return context;
};
