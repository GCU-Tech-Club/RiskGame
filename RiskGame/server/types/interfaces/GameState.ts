import Player from '@shared/types/game/Player';
import { Map } from '@shared/types/game/map';

type GameState = {
    players: Record<string, Player>
    playersTurnID: string
    cardSetsTraded: number
    map: Map
}

export default GameState;