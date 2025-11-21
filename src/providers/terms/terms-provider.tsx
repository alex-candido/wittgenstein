"use client";
import { createContext, ReactNode, useContext } from "react";

type TermsContextProps = object;

const TermsContext = createContext<TermsContextProps | undefined>(undefined);

export const TermsProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    // TODO: Add state and functions for terms page
  };

  return (
    <TermsContext.Provider value={value}>
      {children}
    </TermsContext.Provider>
  );
};

export const useTerms = () => {
  const context = useContext(TermsContext);
  if (context === undefined) {
    throw new Error("useTerms must be used within a TermsProvider");
  }
  return context;
};
