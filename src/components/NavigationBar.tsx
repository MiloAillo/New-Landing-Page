import { useState, type JSX } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function NavigationBar(): JSX.Element {
    const [ hoveredBlog, setHoveredBlog ] = useState(false)
    const [ hoveredLounge, setHoveredLounge ] = useState(false)

    return (
        <nav className="flex justify-between fixed w-screen px-10 font-light text-xl text-white items-center h-15 bg-transparent z-999">

            <div>

                <p>Mischiko Moe</p>

                    { (!hoveredBlog && !hoveredLounge) &&
                        <motion.div
                            layoutId="underline"
                            className="h-0.5 w-full bg-amber-50"
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
                            className="h-0.5 w-full bg-amber-50"
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
                            className="h-0.5 w-full bg-amber-50" 
                        />
                    }
                </AnimatePresence>


            </div>

            
            <p>Version 1.0.0-alpha ©2026</p>
        </nav>
    )
}