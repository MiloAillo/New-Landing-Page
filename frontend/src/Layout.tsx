import { useEffect, useState, type JSX } from "react"
import NavigationBar from "./components/NavigationBar"
import { Outlet } from "react-router"
import LocomotiveScroll from "locomotive-scroll"
import { AnimatePresence } from "framer-motion"

export default function Layout(): JSX.Element {
    useEffect(() => {
        const scroll = new LocomotiveScroll()
        return () => scroll.destroy()
    }, [])

	return (
        // global style
        <div className="bg-indigo-500 font-primary flex flex-col items-center">
            <NavigationBar />

            {/* handle motion exit animation */}
            <AnimatePresence mode="popLayout">
                <Outlet />
            </AnimatePresence>
        </div>
    )
}

export const outletMotion = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}