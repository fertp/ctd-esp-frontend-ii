import type {
  Initializable,
  TraceableEvent,
  TrackingSoftware
} from '@/features/tracking/tracking.types'

class AmplitudeTrackingSoftware implements TrackingSoftware, Initializable {
  private initialized = false

  initialize(): void {
    this.initialized = true
    // DO EXTRA LOGIC
  }

  trackEvent(event: TraceableEvent): void {
    console.log(event.getEventData())
  }
}

export default AmplitudeTrackingSoftware
