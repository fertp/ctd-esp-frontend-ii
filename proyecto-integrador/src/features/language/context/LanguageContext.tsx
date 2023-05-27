import {
  type Dispatch,
  type SetStateAction,
  createContext,
  type ReactNode,
  type FC
} from 'react'
import type Language from '../language.types'
import { useLanguage } from '../hooks/useLanguage'

interface LanguageContextType {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
  translate: (key: string) => string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { language, setLanguage, translate } = useLanguage()

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  )
}
