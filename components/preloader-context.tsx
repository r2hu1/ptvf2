"use client";
import { createContext, useContext, useState, useEffect } from "react";

const PreloaderContext = createContext({ done: false });
export const usePreloader = () => useContext(PreloaderContext);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <PreloaderContext.Provider value={{ done }}>
      {children}
    </PreloaderContext.Provider>
  );
}
