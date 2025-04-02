import { Player } from "../users"
import { Map } from "./map"

export type GameState = {
  players: Record<string, Player>
  playersTurnID: string
  cardSetsTraded: number
  map: Map
}

export type Dice = {
  value: number
}