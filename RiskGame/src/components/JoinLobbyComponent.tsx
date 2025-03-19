
import React, { useState } from 'react'

const JoinLobbyComponent = () => {
    const [gameId, setGameId] = useState('')

    const handleJoinGame = () => {
        // Implement your logic to join the game using the gameId
        console.log('Joining game with ID:', gameId)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Game ID"
                value={gameId}
                onChange={e => setGameId(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2"
            />
            <button
                onClick={handleJoinGame}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Join Lobby
            </button>
        </div>
    )
}

export default JoinLobbyComponent
