/**
 * Re-exports any functions
 * All functions should be stateless and only depend on storeProvider if absolutely necessary
 * 
 * Functions ideally take an input, transform it, then produce an output.
 * 
 * It is okay for functions to use other functions - just as long as the chain of functions never 
 * depend on any state besides the input and output.
 */
import PlayerType from "@shared/types/game/PlayerType";

class Player {
    player: PlayerType;

    constructor(player: PlayerType) {
        this.player = player;
    }

    fortify(troopsFrom: string, troopsTo: string, troopsFromNumber: number, troopsToNumber: number) {
        this.player.territories[troopsFrom] -= troopsFromNumber;
        this.player.territories[troopsTo] += troopsToNumber;
    }

}

