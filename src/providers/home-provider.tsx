"use client";

import { createContext, ReactNode, useContext } from "react";

type HomeContextType = object;

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export function HomeProvider({ children }: { children: ReactNode }) {
  const value = {};

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export function useHome() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useMap must be used within a HomeProvider");
  }
  return context;
}
