import COLORS from './COLORS';
import { Card } from './Card';
import { Territory } from './map';

type PlayerType = {
    id: number
    username: string
    code: string
    cardsOwned: Card[]
    pendingArmies: number
    territories: Record<string, Territory>
    colors: COLORS
}

export default PlayerType;