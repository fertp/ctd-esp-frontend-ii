import LocationsComponent from './locations.component';
import { locationsApi } from './locations.endpoints';
import locationReducer, { type LS } from './locations.slices';
import { type LocationsResult, type Location } from './locations.types';

export { LocationsComponent, locationReducer, locationsApi };
export type { LocationsResult, Location, LS };
