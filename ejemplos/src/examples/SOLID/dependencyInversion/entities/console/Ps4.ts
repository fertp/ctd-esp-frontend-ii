import { ConsoleName } from '../../interfaces'
import { IGame } from '../game/Game'
import Console from './Console'

export default class Ps4 extends Console {
  constructor(games: IGame[], platform: ConsoleName) {
    // const { methods } = super()
    // this.methods = [...methods]
    super(games, platform)
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
