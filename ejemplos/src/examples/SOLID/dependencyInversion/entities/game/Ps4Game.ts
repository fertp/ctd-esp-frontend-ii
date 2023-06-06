import Game from './Game'

export default class Ps4Game extends Game {
  constructor(name: string) {
    super(name)
    this.name = name
  }
}
