import { FC } from "react"
import { Link } from "react-router"

type NavButtonProps = {
    children: React.ReactNode
    to: string
    className?: string
}

export const NavButton: FC<NavButtonProps> = ({ children, to, className }) => {
    return (
        <Link to={to} className={`${className} hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105`} >
            {children}
        </Link>
    )
}