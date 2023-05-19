import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { CharacterCard } from './CharacterCard';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <>
          <CharacterCard>
            <CharacterCard.Picture image={character.image} />
            <div className={'card-body'}>
              <CharacterCard.Content name={character.name} />
              <CharacterCard.Action id={character.id} />
            </div>
          </CharacterCard>
        </>
      ))}
    </div>
  );
};

export default CharactersComponent;
