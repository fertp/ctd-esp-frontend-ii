import { ConsoleName } from '../../interfaces'

export interface IGame {
  platform: ConsoleName
  name: string
  start: () => void
}

export default class Game implements IGame {
  platform: ConsoleName
  name: string

  constructor(name: string) {
    this.platform = 'Ps1'
    this.name = name
  }

  start() {
    // Implementation
  }
}
