import { FC } from 'react'
import { ItemsList } from './ItemsList'
import { Character } from '../interfaces'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../consts'

export const CharactersList: FC = () => {
  const { data, isLoading, hasError } = useFetch<{ results: Character[] }>(
    `${API_URL}/character`
  )

  const characters = data?.results ?? []

  return (
    <ItemsList<Character>
      title='Characters'
      data={characters}
      isLoading={isLoading}
      hasError={hasError}
    >
      {({ id, image, name }) => (
        <li key={id}>
          <img
            src={image}
            alt={name}
            width={64}
          />
          <p>{name.split(' ')[0]}</p>
        </li>
      )}
    </ItemsList>
  )
}
