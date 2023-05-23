import { FC } from 'react'
import { ItemsList } from './ItemsList'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../consts'
import { Location } from '../interfaces'

export const EspisodesList: FC = () => {
  const { data, isLoading, hasError } = useFetch<{ results: Location[] }>(
    `${API_URL}/episode`
  )

  const episodes = data?.results ?? []

  return (
    <ItemsList
      title='Episodes'
      data={episodes}
      isLoading={isLoading}
      hasError={hasError}
    >
      {({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      )}
    </ItemsList>
  )
}
