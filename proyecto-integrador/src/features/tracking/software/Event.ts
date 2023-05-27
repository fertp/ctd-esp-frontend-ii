import type { ClickableEvent, TypeableEvent } from '../tracking.types'

export class ClickEvent implements ClickableEvent {
  name: string
  location: string
  target: string

  constructor(name: string, location: string, target: string) {
    this.name = name
    this.location = location
    this.target = target
  }

  getEventData(): string {
    return `Se hizo click en ${this.target} en ${this.location}`
  }
}

export class KeyupEvent implements TypeableEvent {
  name: string
  location: string
  key: string

  constructor(name: string, location: string, key: string) {
    this.name = name
    this.location = location
    this.key = key
  }

  getEventData(): string {
    return `Se oprimio la tecla ${this.key} en ${this.location}`
  }
}
