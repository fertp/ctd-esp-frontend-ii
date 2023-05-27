import { type FC } from 'react'
import { useGetLocationsQuery } from '@/features/locations/locations.endpoints'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Pagination } from '@/features/pagination'
import {
  nextLocations,
  previousLocations
} from '@/features/locations/locations.slices'
import { LocationsTableWithLoading } from './table/locationsTableWithLoading'

const LocationsComponent: FC = () => {
  const dispatch = useAppDispatch()
  const { query: locationsQuery, page } = useAppSelector(
    state => state.locations
  )
  const {
    data: locations,
    isError,
    isLoading
  } = useGetLocationsQuery({ name: locationsQuery, page })

  // const isError = !!((error != null) || (locations == null) || locations.results.length === 0)

  const onPreviousPage = (): void => {
    dispatch(previousLocations())
  }

  const onNextPage = (): void => {
    dispatch(nextLocations())
  }

  return (
    <div>
      <Pagination
        p={locations?.info}
        onP={onPreviousPage}
        onN={onNextPage}
      />

      <LocationsTableWithLoading
        isLoading={isLoading}
        onFailedToLoad={isError}
        locations={locations?.results}
      />

      <Pagination
        p={locations?.info}
        onP={onPreviousPage}
        onN={onNextPage}
      />
    </div>
  )
}

export default LocationsComponent
