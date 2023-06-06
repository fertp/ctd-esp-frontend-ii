import Ps1 from './entities/Ps1'

export interface Method {
  name: string
  execute: any
}

export interface Console {
  name: ConsoleName
  img: string
  channel: string
  entity: typeof Ps1
}

type ConsoleName = 'Ps1' | 'Ps4'
