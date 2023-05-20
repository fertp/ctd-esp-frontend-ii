import { FC } from 'react'
import { ItemsList } from './ItemsList'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../consts'
import { Location } from '../interfaces'

export const LocationsList: FC = () => {
  const { data, ...rest } = useFetch<{ results: Location[] }>(
    `${API_URL}/location`
  )

  const locations = data?.results ?? []

  return (
    <ItemsList
      title='Locations'
      data={locations}
      {...rest}
    >
      {({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      )}
    </ItemsList>
  )
}
