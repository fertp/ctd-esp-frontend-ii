import { ConsoleName } from '../../interfaces'
import { IGame } from '../game/Game'
import Console from './Console'

export default class Ps1 extends Console {
  constructor(games: IGame[], platform: ConsoleName) {
    // const { methods } = super()
    // this.methods = [...methods]
    super(games, platform)
  }

  startGame() {
    //implementación
    alert(`Partida iniciada en Ps1`)
  }
}
