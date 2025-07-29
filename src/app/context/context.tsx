'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export type Language = 'es' | 'en' | 'fr' | 'it' | 'ger' | 'jp' | 'kr'

type AppContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  language: Language
  setLanguage: (lang: Language) => void
}

const AppDefault: AppContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
  language: 'en',
  setLanguage: () => {},
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Valores seguros por defecto
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<Language>('en')

  // ✅ Sincronizar con localStorage después del montaje
  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode')
    const storedLang = localStorage.getItem('language')

    if (storedTheme !== null) {
      setDarkMode(storedTheme === 'true')
    }

    if (
      storedLang &&
      ['es', 'en', 'fr', 'it', 'ger', 'jp', 'kr'].includes(storedLang)
    ) {
      setLanguage(storedLang as Language)
    }
  }, [])

  // ✅ Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
    localStorage.setItem('language', language)
  }, [darkMode, language])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

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
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context ?? AppDefault
}
