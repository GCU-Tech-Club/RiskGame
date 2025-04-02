import { FC } from "react"
import { NavButton } from "../components/NavButton"
import { Link } from "react-router"

export const Navbar: FC = () => {
    return (
        <nav className="w-full p-4 flex items-center justify-between bg-neutral-800 shadow-lg">
            <Link to="/" className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">Risk Game</h1>
            </Link>
            <div className="flex items-center space-x-4">
                <NavButton to="/lobby" className="bg-amber-500">
                    <p>Join Lobby</p>
                </NavButton>
            </div>
        </nav>
    )
}