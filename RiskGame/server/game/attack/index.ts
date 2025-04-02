/**
 * Re-exports any functions
 * All functions should be stateless and only depend on storeProvider if absolutely necessary
 *
 * Functions ideally take an input, transform it, then produce an output.
 *
 * It is okay for functions to use other functions - just as long as the chain of functions never
 * depend on any state besides the input and output.
 */
import { Territory } from "@shared/types/game/map";
import Dice from "@shared/types/game/Dice";

function canAttack(attackingTerritory: Territory, defendingTerritory: Territory) {}

function rollDice(attackerDice: Dice, defenderDice: Dice, attackingTerritory: Territory, defendingTerritory: Territory) {}
