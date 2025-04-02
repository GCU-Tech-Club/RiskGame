import { Territory } from "../game"
import { Card } from "../game/cards"

export type User = {
    id: string
}

export enum COLORS {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    BLACK = "black"
}

export type PlayerColor = keyof typeof COLORS;

export type Player = {
    id: number
    username: string
    code: string
    cardsOwned?: Card[]
    pendingArmies?  : number
    territories?: Record<string, Territory>
    color?: PlayerColor
  }