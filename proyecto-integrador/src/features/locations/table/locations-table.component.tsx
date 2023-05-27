import { type FC } from 'react'
import { type Location } from '@/features/locations'
import { useNavigate } from 'react-router-dom'
import useTracking from '@/features/tracking/tracking.context'
import { ClickEvent } from '@/features/tracking'

export interface LocationsTableProps {
  locations?: Location[]
}

const LocationsTable: FC<LocationsTableProps> = ({
  locations
}: LocationsTableProps) => {
  const navigate = useNavigate()
  const { trackEvent } = useTracking()
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
          <th># of Characters</th>
        </tr>
      </thead>
      <tbody>
        {locations?.map(l => (
          <tr
            key={l.id}
            onClick={() => {
              navigate(`/location/${l.id}`)
              const event = new ClickEvent(
                'LOCATION_CLICKED',
                'LOCATION_TABLE',
                'TALE_ROW'
              )
              trackEvent(event)
            }}
          >
            <td>#{l.id}</td>
            <td>{l.name}</td>
            <td>{l.type}</td>
            <td>{l.dimension}</td>
            <td>{l.residents.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LocationsTable
