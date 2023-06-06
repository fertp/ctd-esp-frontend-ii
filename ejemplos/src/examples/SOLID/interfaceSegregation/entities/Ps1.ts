import Console from './Console'

export default class Ps1 extends Console {
  methods
  constructor() {
    // const { methods } = super()
    // this.methods = [...methods]
    super()
    this.methods = [
      {
        name: 'encender',
        execute: this.turnOn
      },
      {
        name: 'apagar',
        execute: this.turnOff
      },
      {
        name: 'startGame',
        execute: this.startGame
      }
    ]
  }
}
