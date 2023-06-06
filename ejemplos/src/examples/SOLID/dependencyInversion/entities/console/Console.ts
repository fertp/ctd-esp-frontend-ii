import { ConsoleName, Method } from '../../interfaces'
import { IGame } from '../game/Game'

export interface IConsole {
  turnedOn: boolean
  methods: Method[]
  name: string
  games: IGame[]
}

export default class Console implements IConsole {
  turnedOn: boolean
  methods: Method[]
  name: string
  games: IGame[]

  constructor(games: IGame[], name: ConsoleName) {
    this.games = games
    this.name = name
    this.turnedOn = false
    this.methods = [
      {
        name: 'turnOn',
        execute: this.turnOn
      },
      {
        name: 'turnOff',
        execute: this.turnOff
      }
    ]
  }

  turnOn() {
    this.turnedOn = true
    return this.turnedOn
  }

  turnOff() {
    this.turnedOn = false
    return this.turnedOn
  }
}
