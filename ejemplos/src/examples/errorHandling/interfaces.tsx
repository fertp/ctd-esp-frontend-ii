export interface Character {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: Location
  name: string
  origin: Origin
  species: string
  status: string
  type: string
  url: string
}

export interface Episode {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}

export interface Location {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}

export interface Origin {
  name: string
  url: string
}
