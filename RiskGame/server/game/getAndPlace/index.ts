/**
 * Re-exports any functions
 * All functions should be stateless and only depend on storeProvider if absolutely necessary
 * 
 * Functions ideally take an input, transform it, then produce an output.
 * 
 * It is okay for functions to use other functions - just as long as the chain of functions never 
 * depend on any state besides the input and output.
*/
import Player from "@shared/types/game/PlayerType";
import { Card, Territory } from "@shared/types/game";

/**
 * Determines the number of armies a player receives based on territories owned.
 */
function getArmiesFromTerritories(plr: Player): number {
    const territoriesOwned = Object.keys(plr.territories).length;
    return Math.max(Math.floor(territoriesOwned / 3), 3);
}

/**
 * Determines the number of bonus armies a player receives from controlling continents.
 */
function getArmiesFromContinent(plr: Player, map: Map): number {
    return Object.values(map.continents)
        .filter(continent => continent.ownerUserID === plr.id)
        .reduce((total, continent) => total + continent.bonusAmount, 0);
}

/**
 * Determines the number of armies a player receives based on card trade-ins.
 */
function getArmiesFromCard(cards: Card[], numTraded: number): number {
    if (cards.length < 3) return 0; // Must trade at least 3 cards

    let hasInfantry = false, hasCavalry = false, hasArtillery = false;

    // Check for card types
    for (const card of cards) {
        switch (card.cardType) {
            case CardTypes.SOLDIER:
                hasInfantry = true;
                break;
            case CardTypes.CANNON:
                hasArtillery = true;
                break;
            case CardTypes.HORSE:
                hasCavalry = true;
                break;
        }
    }

    // Validate the set (either all different or all the same)
    const isValid = (hasInfantry && hasCavalry && hasArtillery) || 
                    (hasInfantry + hasCavalry + hasArtillery === 1);

    if (!isValid) return 0;

    // Calculate armies received from trade-ins
    if (numTraded < 6) {
        return [4, 6, 8, 10, 12, 15][numTraded];
    }
    return 15 + (numTraded - 5) * 5;
}

/**
 * Places troops on a given territory.
 */
function Place(territory: Territory, troopCount: number): void {
    territory.troopCount += troopCount;
}
