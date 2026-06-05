import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import CustomObserver from "../functions/customObserver";

export default function NavigationBar(): JSX.Element {
    const [ hoveredBlog, setHoveredBlog ] = useState(false)
    const [ hoveredLounge, setHoveredLounge ] = useState(false)
    const [ whiteBackground, setWhiteBackground ] = useState(false)
    const [ inPage1, setInPage1 ] = useState(true)

    const [ barsOpen, setBarsOpen ] = useState(false)

    useEffect(() => {

        // white page observer
        const whitePage = document.querySelector('.white-page')

        // page 1 observer
        const firstPage = document.querySelector('.page-1')

        if (whitePage && firstPage) {
    
            const observer = CustomObserver({
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
            
            const observer2 = CustomObserver({
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

        }


    }, [])

    useEffect(() => {
        console.log("white background: ", whiteBackground)
        console.log("inPage1", inPage1)
    }, [whiteBackground, inPage1])

    return (
        <nav className={`flex justify-between fixed w-screen px-5 md:px-10 font-light text-xl items-center h-15 z-999 transition-all duration-300 ${whiteBackground ? "text-indigo-500 bg-white" : "text-white"} ${(!inPage1 && !whiteBackground) ? "bg-indigo-500" : ""}`}>

            <div>

                <p>Mischiko Moe</p>

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
            
            <div className="hidden md:block">

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

            <AnimatePresence mode="wait">

                { !barsOpen &&
                
                    <motion.div 
                        className="block md:hidden"
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
                        className="relative"
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

                        <p>The Blog</p>

                        <div className={`w-full h-0.5 ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}/>

                    </div>

                    <div className="px-5 w-fit">

                        <p>The Lounge</p>

                        <div className={`w-full h-0.5 ${whiteBackground ? "bg-indigo-500" : "bg-white"}`}/>

                    </div>
                    
                    <p className="px-5 text-sm mt-1 opacity-75">Version 1.0.0-alpha ©2026</p>
                
                </motion.div>

            }

            
            <p className="hidden md:block">Version 1.0.0-alpha ©2026</p>
        </nav>
    )
}