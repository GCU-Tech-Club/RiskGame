import { COLORS, Player } from "../users"

export type LobbyRoom = {
  id: string
  mapId: string
  players: Player[]
  availableColors: COLORS[]
  numPlayers: number
  lobbyOwnerId: number
}