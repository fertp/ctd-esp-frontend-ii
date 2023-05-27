import LocationsTable, {
  type LocationsTableProps
} from './locations-table.component'
import { withLoading } from '@/features/loading'

export const LocationsTableWithLoading =
  withLoading<LocationsTableProps>(LocationsTable)
