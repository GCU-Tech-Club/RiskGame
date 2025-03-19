import JoinLobbyComponent from "@app/components/JoinLobbyComponent"
import { FC } from "react"

// The home page
export const Home: FC = () => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Risk Game</h1>
            <div className="flex items-center">
                <JoinLobbyComponent />
            </div>
        </div>
    )
}