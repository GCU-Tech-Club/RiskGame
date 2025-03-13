// templates game store logic

import EventEmitter from "node:events"
import { GameState, GameStoreClass, gameStoreEvents } from "@server/types/interfaces/GameStore"

export class GameStore extends EventEmitter<gameStoreEvents> implements GameStoreClass {
    private state: GameState = {
        users: []
    }

    constructor() {
        super()
    }

    getState(): GameState {
        return this.state
    }
}