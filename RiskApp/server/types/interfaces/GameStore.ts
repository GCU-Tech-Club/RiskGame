import { User } from "@shared/types"
import EventEmitter from "node:events"

export type GameState = {
    users: User[]
}

export type gameStoreEvents = {
    stateChange: [GameState]
}

export interface GameStoreClass extends EventEmitter<gameStoreEvents> {
    getState(): GameState
}