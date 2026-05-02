'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'fr' | 'en';
const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: 'fr', toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const toggle = () => setLang(l => l === 'fr' ? 'en' : 'fr');
  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
