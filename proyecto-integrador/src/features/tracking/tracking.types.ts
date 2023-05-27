export type TrackingSoftwareType =
  | 'GOOGLE_ANALYTICS'
  | 'FACEBOOK_PIXEL'
  | 'AMPLITUDE'

export interface TrackingSoftware {
  trackEvent: (e: TraceableEvent) => void
}

export interface Initializable {
  initialize: () => void
}

export interface TraceableEvent {
  name: string
  location: string
  getEventData: () => string
}

export interface ClickableEvent extends TraceableEvent {
  target: string
}

export interface TypeableEvent extends TraceableEvent {
  key: string
}
