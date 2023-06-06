import { IConsole } from './Console'
import Ps1 from './Ps1'
import Ps4 from './Ps4'

interface ConsoleEntities {
  Ps1: typeof Ps1
  Ps4: typeof Ps4
}

const entities: ConsoleEntities = { Ps1, Ps4 }

export default entities
