import Ps4 from '../entities/Ps4'
import Ps1 from '../entities/Ps1'
import { Console } from '../interfaces'

const consoles: Console[] = [
  {
    name: 'Ps1',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1920px-PSX-Console-wController.png',
    channel: 'crashbandicootstan',
    entity: Ps1
  },
  {
    name: 'Ps4',
    img: 'https://freesvg.org/img/PS4-by-scro2003.png',
    channel: 'valorant',
    entity: Ps4
  }
]

export default consoles
