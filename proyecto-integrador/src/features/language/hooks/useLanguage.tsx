import enTranslations from '@/data/i18n.en'
import esTranslations from '@/data/i18n.es'
import ptTranslations from '@/data/i18n.pt'
import { type Dispatch, type SetStateAction, useState } from 'react'
import type Language from '../language.types'

const languagesMap = {
  SPANISH: esTranslations,
  ENGLISH: enTranslations,
  PORTUGUESE: ptTranslations
}

/**
 *
 * @todo Tipar esto.
 */
export const useLanguage = (): {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
  translate: (arg: string) => string
} => {
  const [language, setLanguage] = useState<Language>('ENGLISH')

  const translate = (key: string): string => {
    if (Object.keys(languagesMap).includes(language)) {
      return languagesMap[language][key]
    }

    return key
  }

  return { language, setLanguage, translate }
}
