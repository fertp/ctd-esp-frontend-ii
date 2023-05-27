import type {
  TraceableEvent,
  TrackingSoftware
} from '@/features/tracking/tracking.types'

class GoogleTrackingSoftware implements TrackingSoftware {
  trackEvent(event: TraceableEvent): void {
    console.log(
      'Google tracking event: ' +
        event.name +
        ' from location: ' +
        event.location
    )
  }

  /**
   * We shouldn't have this method in our TrackingSoftware interface if we don't need the initialize feature
   */
  // initialize(): void {
  //   // DO NOTHING
  // }
}

export default GoogleTrackingSoftware
