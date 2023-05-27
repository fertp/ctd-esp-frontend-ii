import { type FC } from 'react'
import { useGetCharactersQuery } from './characters.endpoints'
import { CharacterCard } from './CharacterCard'

export interface CharactersComponentProps {
  rickIDDS: number[]
}

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
  const {
    data: characters,
    error,
    isLoading
  } = useGetCharactersQuery({ ids: rickIDDS })

  if (error != null || characters == null)
    return <div>Error when loading. Please try again later.</div>

  if (isLoading) return <div>Loading characters...</div>

  const charactersArray = Array.isArray(characters) ? characters : [characters]

  return (
    <div className={'characters'}>
      {charactersArray.map(character => (
        <CharacterCard key={character.id}>
          <CharacterCard.Picture
            image={character.image}
            name={character.name}
          />
          <div className='card-body'>
            <CharacterCard.Content name={character.name} />
            <CharacterCard.Actions id={character.id} />
          </div>
        </CharacterCard>
      ))}
    </div>
  )
}

export default CharactersComponent
