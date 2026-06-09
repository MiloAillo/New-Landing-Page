import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import CustomObserver from "../functions/customObserver";
import { useLocation, useNavigate } from "react-router";

export default function NavigationBar(): JSX.Element {
    const navigate = useNavigate()
    const location = useLocation()

    // landing page useState
    const [ hoveredBlog, setHoveredBlog ] = useState(false)
    const [ hoveredLounge, setHoveredLounge ] = useState(false)
    const [ whiteBackground, setWhiteBackground ] = useState(false)
    const [ inPage1, setInPage1 ] = useState(true)

    const [ barsOpen, setBarsOpen ] = useState(false)

    useEffect(() => {
        if (location.pathname !== "/") {
            setWhiteBackground(false)
            setInPage1(false)
            return
        }

        console.log("Setting up observers for landing page")

        let observer: IntersectionObserver | null = null
        let observer2: IntersectionObserver | null = null

        const initObservers = () => {
            // white page observer
            const whitePage = document.querySelector('.white-page')
            // page 1 observer
            const firstPage = document.querySelector('.page-1')

            if (whitePage && firstPage) {
                observer = CustomObserver({
                    rootMargin: `0px 0px -${window.innerHeight - 61}px 0px`,
                    threshold: 0,
                    trueFunction() {
                        setWhiteBackground(true)
                    },
                    falseFunction() {
                        setWhiteBackground(false)
                    },
                })
                observer.observe(whitePage)

                observer2 = CustomObserver({
                    rootMargin: `0px 0px 0px 0px`,
                    threshold: 0, 
                    trueFunction() { 
                        setInPage1(true) 
                    }, 
                    falseFunction() {
                        setInPage1(false)
                    }, 
                }) 
                observer2.observe(firstPage)

                return true
            }
            return false
        }

        // Try to initialize
        if (!initObservers()) {
            // If elements are not found (e.g. during transition), retry
            const timer = setInterval(() => {
                if (initObservers()) {
                    clearInterval(timer)
                }
            }, 100)
            return () => {
                clearInterval(timer)
                observer?.disconnect()
                observer2?.disconnect()
            }
        }

        return () => {
            observer?.disconnect()
            observer2?.disconnect()
        }

    }, [location.pathname])

    useEffect(() => {
        console.log("white background: ", whiteBackground)
        console.log("inPage1", inPage1)
    }, [whiteBackground, inPage1])

    return (
        <nav className={`flex justify-center fixed w-screen px-5 md:px-10 font-light text-xl items-center h-15 z-999 transition-all duration-300 ${whiteBackground ? "text-indigo-500 bg-white" : "text-white"} ${(!inPage1 && !whiteBackground) ? "bg-indigo-500" : ""}`}>

        <div className="flex justify-between w-full max-w-350">

                <div className="cursor-default">

                    <p onClick={() => {navigate("/")}}>Mischiko Moe</p>

                        { (!hoveredBlog && !hoveredLounge && !barsOpen) &&
                            <motion.div
                                layoutId="underline"
                                className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}
                            />
                        }

                        { (hoveredBlog || hoveredLounge || barsOpen) &&
                            <div className="h-0.5 w-full bg-transparent" />
                        }

                </div>

                
                <div className="hidden md:block">
                
                    <a className="cursor-pointer" onClick={() => {navigate("/blog")}} onMouseEnter={() => setHoveredBlog(true)} onMouseLeave={() => setHoveredBlog(false)}>The Blog</a>

                    <AnimatePresence>
                        { hoveredBlog &&
                            <motion.div
                                layoutId="underline"
                                className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}
                            />
                        }
                    </AnimatePresence>

                </div>
                
                <div className="hidden md:block">

                    <a className="cursor-pointer" onClick={() => {navigate("/lounge")}} onMouseEnter={() => setHoveredLounge(true)} onMouseLeave={() => setHoveredLounge(false)}>The Lounge</a>

                    <AnimatePresence>
                        { hoveredLounge &&
                            <motion.div 
                                layoutId="underline"
                                className={`h-0.5 w-full ${whiteBackground ? "bg-indigo-500" : "bg-white"}`} 
                            />
                        }
                    </AnimatePresence>


                </div>

                <AnimatePresence mode="wait">

                    { !barsOpen &&
                    
                        <motion.div 
                            className="block md:hidden cursor-pointer"
                            key="bars"
                            onClick={() => setBarsOpen(true)} 
                            initial={{
                                rotate: -90
                            }}
                            animate={{
                                rotate: 0
                            }}
                        >
                    
                            <FontAwesomeIcon icon={faBars} />
                        
                        </motion.div>
                    
                    }

                    { barsOpen &&
                
                        <motion.div 
                            key="xMark"
                            className="relative cursor-pointer"
                            onClick={() => setBarsOpen(false)} 
                            initial={{
                                rotate: -90
                            }}
                            animate={{
                                rotate: 0
                            }}
                        >
                    
                            <FontAwesomeIcon icon={faXmark} />

                        </motion.div>
                    
                    }

                </AnimatePresence>


                { barsOpen && 

                    <motion.div 
                        className={`absolute right-0 top-0 mt-18 mr-5 border-2 py-2 flex flex-col gap-2 items-end rounded-sm backdrop-blur-[20px] ${whiteBackground ? "bg-white/75" : "bg-black/25"}`}
                        layoutId="underline"
                        initial={{
                            
                        }}
                        animate={{
                            
                        }}
                    >

                        <div className="px-5 w-fit">

                            <a onClick={() => {navigate("/blog")}} className="cursor-pointer">The Blog</a>

                            <div className={`w-full h-0.5 ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}/>

                        </div>

                        <div className="px-5 w-fit">

                            <a onClick={() => {navigate("/lounge")}} className="cursor-pointer">The Lounge</a>

                            <div className={`w-full h-0.5 ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}/>

                        </div>
                        
                        <p className="px-5 text-sm mt-1 opacity-75 cursor-default">Version 0.20.12-alpha ©2026</p>
                    
                    </motion.div>

                }

                
                <p className="hidden md:block">Version 0.20.12-alpha ©2026</p>
            
        </div>

        </nav>
    )
}