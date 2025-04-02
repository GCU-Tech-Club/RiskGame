import { COLORS, Player } from "@shared/types"
import { create } from "zustand"
import { LobbyRoom } from "@shared/types/game/lobby"

interface LobbyStore {
  lobbyRoom: LobbyRoom
  addPlayer: (player: Player) => void;
  removePlayer: (playerId: number) => void;
  setMap: (map: string) => void;
  setLobbyRoom: (lobbyRoom: LobbyRoom) => void;
  updateAvailableColors: (colors: COLORS[]) => void;
  setNumPlayers: (numPlayers: number) => void;
  setLobbyOwnerId: (ownerId: number) => void;
  resetLobbyRoom: () => void;
}

export const useLobbyStore = create<LobbyStore>((set) => ({
  lobbyRoom: {
    id: "",
    mapId: "",
    players: [],
    availableColors: [],
    numPlayers: 0,
    lobbyOwnerId: 0,
  },
  addPlayer: (player) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        players: [...state.lobbyRoom.players, player],
      },
    })),
  removePlayer: (playerId) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        players: state.lobbyRoom.players.filter((p) => p.id !== playerId),
      },
    })),
  setMap: (mapId) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        mapId,
      },
    })),
  setLobbyRoom: (lobbyRoom) =>
    set(() => ({
      lobbyRoom,
    })),
  updateAvailableColors: (colors) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        availableColors: colors,
      },
    })),
  setNumPlayers: (numPlayers) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        numPlayers,
      },
    })),
  setLobbyOwnerId: (ownerId) =>
    set((state) => ({
      lobbyRoom: {
        ...state.lobbyRoom,
        lobbyOwnerId: ownerId,
      },
    })),
  resetLobbyRoom: () =>
    set(() => ({
      lobbyRoom: {
        id: "",
        mapId: "",
        players: [],
        availableColors: [],
        numPlayers: 0,
        lobbyOwnerId: 0,
      },
    })),
}));