"use client";
import { createContext, ReactNode, useContext } from "react";

type DocsContextProps = object;

const DocsContext = createContext<DocsContextProps | undefined>(undefined);

export const DocsProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    // TODO: Add state and functions for docs (e.g., fetching doc content)
  };

  return (
    <DocsContext.Provider value={value}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => {
  const context = useContext(DocsContext);
  if (context === undefined) {
    throw new Error("useDocs must be used within a DocsProvider");
  }
  return context;
};
