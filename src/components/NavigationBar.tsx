import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function NavigationBar(): JSX.Element {
    const [ hoveredBlog, setHoveredBlog ] = useState(false)
    const [ hoveredLounge, setHoveredLounge ] = useState(false)
    const [ whiteBackground, setWhiteBackground ] = useState(false)
    const [ inPage1, setInPage1 ] = useState(true)

    useEffect (() => {
        const handler = (e: any) => {
            const { way } = e.detail;

            console.log("setWhitebackground :", way)

            if (way === "enter") setWhiteBackground(true)
            if (way === "leave") setWhiteBackground(false)
        }

        window.addEventListener("scrollEvent", handler)
    
        return () => window.removeEventListener("scrollEvent", handler)
    })

    useEffect (() => {
        const handler = (e: any) => {
            const { way } = e.detail;

            console.log("setInPage1 :", way)

            if (way === "enter") setInPage1(true)
            if (way === "leave") setInPage1(false)
        }

        window.addEventListener("scrollEvent2", handler)
    
        return () => window.removeEventListener("scrollEvent2", handler)
    })

    useEffect(() => {
        console.log("white background: ", whiteBackground)
    }, [whiteBackground])

    return (
        <nav className={`flex justify-between fixed w-screen px-10 font-light text-xl items-center h-15 z-999 transition-all duration-300 ${whiteBackground ? "text-indigo-500" : "text-white"}`}>

            <div>

                <p>Mischiko Moe</p>

                    { (!hoveredBlog && !hoveredLounge) &&
                        <motion.div
                            layoutId="underline"
                            className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}
                        />
                    }

                    { (hoveredBlog || hoveredLounge) &&
                        <div className="h-0.5 w-full bg-transparent" />
                    }

            </div>

            
            <div>
            
                <a onMouseEnter={() => setHoveredBlog(true)} onMouseLeave={() => setHoveredBlog(false)}>The Blog</a>

                <AnimatePresence>
                    { hoveredBlog &&
                        <motion.div
                            layoutId="underline"
                            className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}
                        />
                    }
                </AnimatePresence>

            </div>
            
            <div>

                <a onMouseEnter={() => setHoveredLounge(true)} onMouseLeave={() => setHoveredLounge(false)}>The Lounge</a>

                <AnimatePresence>
                    { hoveredLounge &&
                        <motion.div 
                            layoutId="underline"
                            className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`} 
                        />
                    }
                </AnimatePresence>


            </div>

            
            <p>Version 1.0.0-alpha ©2026</p>
        </nav>
    )
}