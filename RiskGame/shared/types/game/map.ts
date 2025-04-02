export type Territory = {
  id: string // changed to string
  name: string
  occupiedByPlayerID: number // references playerId
  troopCount: number
  neighbors: number[]
  continent: string
}

export type Continent = {
  name: string
  id: string
  ownerUserID: string
  bonusAmount: number
  // string is territoryID  
  territories: Record<string, Territory>
}


export type Map = {
  continents: Record<string, Continent>
  playersMax: number
  name: string
  id: string
  imageId: string
}