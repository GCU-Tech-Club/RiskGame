import EventBusListener from "@server/types/interfaces/EventListener";
import Player from "@shared/types/game/PlayerType";
import { EventBus } from "./EventBus";

export default class LobbyStore implements EventBusListener {
    private MAX_PLAYERS = 6;
    eventBus: EventBus = new EventBus();

    // we will use a stack for the players, so that if one leaves the next one in line gets control
    private players: Player[];

    constructor() {
        this.players = [];
    }

    addPlayer(player: Player) {
        if(this.players.length == this.MAX_PLAYERS && !this.players.includes(player)) {
            this.players.push(player);
            this.eventBus.emit('lobbyStore:startGame', this.players);
        } 
        else {
            return;
        }
    }

    removePlayer(player: Player) {
        this.players = this.players.filter(p => p.id !== player.id);
    }

    // the first player is in control of the lobby
    // if they leave the control gets delegated to the next person in the lobby
}