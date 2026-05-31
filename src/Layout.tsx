import type { JSX } from "react"
import NavigationBar from "./components/NavigationBar"
import { Outlet } from "react-router"

export default function Layout(): JSX.Element {
	return (
        // global style
        <div className="bg-white font-primary">
            <NavigationBar />

            <Outlet />
        </div>
    )
}