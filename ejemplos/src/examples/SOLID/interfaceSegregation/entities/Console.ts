import { Method } from '../interfaces'

export interface IConsole {
  turnedOn: boolean
  // methods: Method[]
  // name: string
  // games: IGame[]
}

export default class Console implements IConsole {
  turnedOn: boolean
  // methods: Method[]

  constructor() {
    this.turnedOn = false
    // this.methods = [
    //   {
    //     name: 'encender',
    //     execute: this.turnOn
    //   },
    //   {
    //     name: 'apagar',
    //     execute: this.turnOff
    //   },
    //   {
    //     name: 'startGame',
    //     execute: this.startGame
    //   },
    //   {
    //     name: 'seeOnlineFriends',
    //     execute: this.seeOnlineFriends
    //   },
    //   {
    //     name: 'startOnlineGame',
    //     execute: this.startOnlineGame
    //   }
    // ]
  }

  turnOn() {
    this.turnedOn = true
    return this.turnedOn
  }

  turnOff() {
    this.turnedOn = false
    return this.turnedOn
  }

  startGame() {
    //implementación
    alert(`Partida iniciada en Ps1`)
  }
}
