import EventBusListener from "@server/types/interfaces/EventListener";
import { EventBus } from "./EventBus";
import Player from "@shared/types/game/PlayerType";
import LobbyStore from "./lobbyStore";
import { storeProvider } from "./storeProvider";

    /**
     * Store Players
     */
class WebSocketStore implements EventBusListener {
    eventBus: EventBus = new EventBus();
    connectedPlayers: Player[] = [];
    lobbyStore?: LobbyStore;

    constructor() {
        const gameStore = storeProvider.getStore('gameStore');
        gameStore.getState().users;
        this.eventBus.on('webSocketStore:playerJoined', (player) => {
            this.connectedPlayers.push(player);
        });
    }
}