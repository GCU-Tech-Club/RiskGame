import { useLobbyStore } from "../../stores/lobbyStore"
import { usePlayerStore } from "../../stores/playerStore"

export const LobbyStatus = () => {
  const lobbyRoom = useLobbyStore((state) => state.lobbyRoom);
  const currentPlayer = usePlayerStore((state) => state.currentPlayer)

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-amber-400 mb-2">
          Current Map
        </h4>
        <p className="text-gray-300">{lobbyRoom.mapId}</p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-amber-400 mb-2">Players</h4>
        <div className="space-y-2">
          {lobbyRoom.players.map((player) => (
            <div
              key={player?.id || ''}
              className="flex items-center justify-between bg-gray-700 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: player.color }}
                />
                <span className="text-white">{player.username}</span>
              </div>
              {lobbyRoom.lobbyOwnerId === player.id && (
                <span className="text-amber-500 text-sm">Host</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {lobbyRoom.lobbyOwnerId === currentPlayer?.id && (
        <button
          onClick={() => console.log("Start game")}
          className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors"
        >
          Start Game
        </button>
      )}
    </div>
  );
};
