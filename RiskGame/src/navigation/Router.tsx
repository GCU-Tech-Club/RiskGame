import GamePage from "../pages/Game"
import GameLobbyPage from "../pages/GameLobby"
import GameStatsPage from "../pages/GameStats"
import { GameWinPage } from "../pages/GameWin"
import { Home } from "../pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router"

export const Router: FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/winpage" element={<GameWinPage />} />
            <Route path="/stats" element={<GameStatsPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/lobby" element={<GameLobbyPage />} />
        </Routes>
     )
}