import { useEffect, type JSX } from "react"
import NavigationBar from "./components/NavigationBar"
import { Outlet } from "react-router"
import LocomotiveScroll from "locomotive-scroll"

export default function Layout(): JSX.Element {
    useEffect(() => {
        const scroll = new LocomotiveScroll()
        return () => scroll.destroy()
    })

	return (
        // global style
        <div className="bg-white font-primary flex flex-col items-center">
            <NavigationBar />

            <Outlet />
        </div>
    )
}