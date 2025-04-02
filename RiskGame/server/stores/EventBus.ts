import Player from "@shared/types/game/PlayerType";
import EventEmitter from "node:events";

// Event Map is a mapping of event names to their payloads
type EventMap = {
    'mapstore:playerJoined': [Player];
    'mapstore:playerLeft': [Player];
    'webSocketStore:playerJoined': [Player];
    'webSocketStore:playerLeft': [Player];
    'lobbyStore:startGame': [Player[]];
}

export class EventBus extends EventEmitter<EventMap>{
    private instance?: EventBus;

    constructor() {
        super();
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
    }
}