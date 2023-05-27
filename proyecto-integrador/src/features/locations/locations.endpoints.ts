import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Location, type LocationsResult } from '@/features/locations'

interface GetLocationsProps {
  name: string
  page: number
}

interface GetLocationProps {
  id: number
}

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/location/'
  }),
  endpoints: builder => ({
    getLocations: builder.query<LocationsResult, GetLocationsProps>({
      query: ({ name, page }) => `?name=${name}&page=${page}`
    }),
    getLocation: builder.query<Location, GetLocationProps>({
      query: ({ id }) => `${id}`
    })
  })
})

export const { useGetLocationsQuery, useGetLocationQuery } = locationsApi
