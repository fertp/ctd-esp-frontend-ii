import { type FC } from 'react'
import { useGetLocationQuery } from '@/features/locations/locations.endpoints'
import { LocationDetailComponent } from '@/features/locations/detail/index'

export interface LocationDetailContainerProps {
  id: number
}

const LocationDetailContainer: FC<LocationDetailContainerProps> = ({
  id
}: LocationDetailContainerProps) => {
  const { data: location, error, isLoading } = useGetLocationQuery({ id })

  if (error != null) return <div>Error when loading. Please try again later.</div>

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <LocationDetailComponent location={location} />
      )}
    </>
  )
}

export default LocationDetailContainer
