import { FC } from "react"
import { NavButton } from "../components/NavButton"

// The home page
export const Home: FC = () => {

    return (
        <div className="w-full min-h-[calc(100vh-54px)] bg-gradient-to-b from-gray-900 to-neutral-800 text-white flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold mb-4 text-amber-500">Risk Game</h1>
                    <p className="text-xl text-gray-300 mb-8">Conquer the world in this classic strategy game of military conquest</p>
                    <NavButton to="/lobby" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors">
                        Join Lobby
                    </NavButton>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-amber-400">Global Domination</h2>
                        <p className="text-gray-300">Lead your armies across continents, forge alliances, and conquer territories in epic battles.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-amber-400">Strategic Warfare</h2>
                        <p className="text-gray-300">Plan your moves carefully, manage your resources, and outmaneuver your opponents.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-amber-400">Multiplayer Battles</h2>
                        <p className="text-gray-300">Challenge friends or compete against players worldwide in intense multiplayer matches.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}