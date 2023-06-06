import Ps1 from './entities/console/Ps1'
import Ps4 from './entities/console/Ps4'

export interface Method {
  name: string
  execute: any
}

export interface ConsoleData {
  name: ConsoleName
  img: string
  channel: string
  entity: typeof Ps1 | typeof Ps4
}

export type ConsoleName = 'Ps1' | 'Ps4'
