import { useState } from "react";

import { COLORS } from "@shared/types";
import { ColorDisplay } from "../components/ColorDisplay"
import { LobbyStatus } from "../components/lobby/LobbyStatus"

export const GameLobbyPage = () => {
  const [gameId, setGameId] = useState("");
  const [selectedColor, setSelectedColor] = useState<COLORS>(COLORS.RED);

  const handleJoinGame = () => {
    // Implement your logic to join the game using the gameId
    console.log("Joining game with ID:", gameId);
  };

  const selectColor = (color: COLORS
  ) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full min-h-[calc(100vh-54px)] bg-gradient-to-b from-gray-900 to-neutral-800 text-white flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">
              Join Game Lobby
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Enter a game code to join an existing match
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">
                  Select Your Team
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.values(COLORS).map((color) => (
                    <button
                      key={color}
                      onClick={() => selectColor(color)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? "border-amber-500 bg-gray-700"
                          : "border-gray-600 hover:border-amber-400 bg-gray-800"
                      }
                            `}
                    >
                      <ColorDisplay color={color} />
                      <p className="mt-2 text-center capitalize">{color}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter game code"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={handleJoinGame}
                  className="cursor-pointer w-full md:w-auto px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors"
                >
                  Join Lobby
                </button>
              </div>
            </div>
            <div className="flex-1 border-t md:border-l md:border-t-0 border-gray-600 pt-6 md:pt-0 md:pl-8">
              <LobbyStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLobbyPage;
