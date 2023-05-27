import './characters.css'
import type Character from './characters.types'

import { charactersApi } from './characters.endpoints'
import CharactersComponent, {
  type CharactersComponentProps
} from './characters.component'
export { CharacterCard } from './CharacterCard'

export { CharactersComponent, charactersApi }
export type { Character, CharactersComponentProps }
