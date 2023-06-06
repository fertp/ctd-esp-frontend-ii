import Console from './Console'

export default class Ps4 extends Console {
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
      },
      {
        name: 'seeOnlineFriends',
        execute: this.seeOnlineFriends
      },
      {
        name: 'startOnlineGame',
        execute: this.startOnlineGame
      }
    ]
  }

  seeOnlineFriends() {
    //implementación
    alert(`Buscando Amigos conectados en Ps4`)
  }

  startOnlineGame() {
    //implementación
    alert(`Partida en linea iniciada en Ps4`)
  }
}
