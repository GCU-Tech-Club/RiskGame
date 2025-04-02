
import { create } from 'zustand'
import { Player, PlayerColor } from '@shared/types/users/user'
import { Card } from '@shared/types/game/cards'
import { Territory } from '@shared/types/game'

interface PlayerState {
  currentPlayer: Player | null
  setCurrentPlayer: (player: Player) => void
  updatePlayerCards: (cards: Card[]) => void
  updatePendingArmies: (armies: number) => void
  updateTerritories: (territories: Record<string, Territory>) => void
  updatePlayerColor: (color: PlayerColor) => void
  resetPlayer: () => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentPlayer: null,
  
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  
  updatePlayerCards: (cards) => set((state) => ({
    currentPlayer: state.currentPlayer ? {
      ...state.currentPlayer,
      cardsOwned: cards
    } : null
  })),
  
  updatePendingArmies: (armies) => set((state) => ({
    currentPlayer: state.currentPlayer ? {
      ...state.currentPlayer,
      pendingArmies: armies
    } : null
  })),
  
  updateTerritories: (territories) => set((state) => ({
    currentPlayer: state.currentPlayer ? {
      ...state.currentPlayer,
      territories: territories
    } : null
  })),
  
  updatePlayerColor: (color) => set((state) => ({
    currentPlayer: state.currentPlayer ? {
      ...state.currentPlayer,
      color: color
    } : null
  })),
  
  resetPlayer: () => set({ currentPlayer: null })
}))
