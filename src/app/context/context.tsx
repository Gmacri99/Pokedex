
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { DataBasic, Pokemon } from '../types/Pokemons';
import { apiRequest } from '../helpers/request/getData';
import { parse } from 'path';

type Language = 'es' | 'en';

type AppContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;

};

const AppDefault:AppContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
  language: 'es',
  setLanguage: (lang: Language) => {},
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const  AppProvider =  ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>(AppDefault.language);

  // Persistencia opcional en localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode');
    const storedLang = localStorage.getItem('language');

    console.log(storedLang)
    console.log(storedTheme)

    storedTheme !==null ? setDarkMode(storedTheme=='true') : setDarkMode(false) ;
    storedLang === null ? setLanguage('es') : setLanguage(storedLang as Language);
    
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    localStorage.setItem('language', language);
  }, [darkMode, language]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context ?? AppDefault;
};
