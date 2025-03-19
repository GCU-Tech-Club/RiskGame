import { Home } from "@app/pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router"

export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}