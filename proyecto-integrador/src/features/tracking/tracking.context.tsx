import type { FC, ReactNode } from 'react'
import { createContext, useContext, useMemo, useState } from 'react'
import {
  AmplitudeTrackingSoftware,
  FacebookTrackingSoftware,
  GoogleTrackingSoftware
} from '@/features/tracking/software'
import type {
  TraceableEvent,
  TrackingSoftware
} from '@/features/tracking/tracking.types'
// import AmplitudeTrackingSoftware from '@/features/tracking/software/amplitude'

export interface TrackingState {
  trackingSoftwares: TrackingSoftware[]
  trackEvent: (event: TraceableEvent) => void
}

interface ProviderProps {
  children: ReactNode
}

const TrackingContext = createContext<TrackingState | undefined>(undefined)

export const TrackingProvider: FC<ProviderProps> = ({ children }) => {
  const [trackingSoftwares] = useState([
    new AmplitudeTrackingSoftware(),
    new FacebookTrackingSoftware(),
    new GoogleTrackingSoftware()
  ])

  const value = useMemo(
    () => ({
      trackingSoftwares,
      trackEvent: (event: TraceableEvent) => {
        trackingSoftwares.forEach(trackingSoftware => {
          if ('initialize' in trackingSoftware) {
            trackingSoftware.initialize()
          }
          trackingSoftware.trackEvent(event)
        })
      }
    }),
    [trackingSoftwares]
  )

  return (
    <TrackingContext.Provider value={value}>
      {children}
    </TrackingContext.Provider>
  )
}

const useTracking = (): TrackingState => {
  const context = useContext(TrackingContext)

  if (context == null) {
    throw new Error('useTracking must be used within a TrackingProvider')
  }
  return context
}

export default useTracking
