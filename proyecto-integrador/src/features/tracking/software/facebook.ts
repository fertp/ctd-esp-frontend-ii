import type {
  Initializable,
  TraceableEvent,
  TrackingSoftware
} from '@/features/tracking/tracking.types'

class FacebookTrackingSoftware implements TrackingSoftware, Initializable {
  private initialized = false

  initialize(): void {
    this.initialized = true
    // DO EXTRA LOGIC
  }

  /**
   * Location is ignored in this example
   * @param eventName the tracked event
   */
  trackEvent(event: TraceableEvent): void {
    if (this.initialized) {
      console.log('Facebook tracking event: ' + event.name)
    }
  }
}

export default FacebookTrackingSoftware
