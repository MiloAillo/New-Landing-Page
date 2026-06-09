// import { useTransform, type MotionValue, motion } from "framer-motion";
import { useEffect, useRef, useState, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/A Perplexed Thought.webp"
import img2 from "../../assets/Deluged Twilight.webp"
import img3 from "../../assets/Hanging together.webp"
import img4 from "../../assets/Money man.webp"
import img5 from "../../assets/Silently watching.webp"
import img6 from "../../assets/Worldly detachment.webp"
import GenerateRandomXY, { getRandomIntInclusive } from "../../components/Idcard/helper/generateRandomXY";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../data/projects";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

export default function Page3(): JSX.Element {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [ randomImagePos, setRandomImagePos ] = useState<{x:number, y: number, rotation: number}[]>([])
    
    // fullscreen image view
    const [ imageView, setImageView ] = useState("")
    const [ openImageView, setOpenImageView ] = useState(false)

    const isDragging = useRef(false)


    useEffect(() => {
        if (sectionRef && sectionRef.current) {

            const sectionDOMRect = sectionRef.current.getBoundingClientRect()
            
            const arrayPos: {x: number, y: number, rotation: number}[] = []

            imageArray.forEach(() => {
                
                const randomPos = GenerateRandomXY(0, sectionDOMRect.width - offset, 0, sectionDOMRect.height - offset)

                const rotation = getRandomIntInclusive(-15, 15)

                arrayPos.push({x: randomPos.x, y: randomPos.y, rotation: rotation})

            })

            setRandomImagePos(arrayPos)

        }
    }, [])

    const imageArray = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ]

    // offset to compensate to prevent the image ever goes out of bound (in px)
    const offset = 200

    return (
        <section ref={sectionRef} className="relative z-2 w-screen bg-indigo-500 flex items-center justify-center overflow-hidden">

            {/* fullscreen image view */}  
            <AnimatePresence>

                { openImageView &&

                    <motion.div 
                        key={"fullImageView"}
                        className="absolute z-1000 w-full h-full bg-black/40 top-0 left-0 flex justify-center items-center backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-[80%] md:w-full h-fit max-h-full md:h-[70%]">

                            <motion.img
                                className={`bg-amber-500 h-full border-10 border-white z-20`}
                                src={imageView}
                                style={{
                                    rotate: 0
                                }}
                            />

                            <div className="h-full w-full md:w-10 pb-3 justify-end md:justify-center flex">
                            
                                <FontAwesomeIcon 
                                    className="text-2xl text-white cursor-pointer" 
                                    icon={faXmarkCircle} 
                                    onClick={() => setOpenImageView(false)}
                                />
                            
                            </div>

                        </div>


                    </motion.div>

                }

            </AnimatePresence>

            {/* random image generation */}
            { imageArray && randomImagePos.length !== 0 &&

                imageArray.map((image, i) => {

                    return (

                        <motion.img
                            className={`bg-amber-500 absolute top-0 left-0 w-60 border-10 border-white z-20 cursor-pointer`}
                            src={image}
                            onTap={() => {
                                if (!isDragging.current) {
                                    setImageView(image); 
                                    setOpenImageView(true)
                                }
                            }}
                            drag
                            onDragStart={() => isDragging.current = true}
                            onDragEnd={() => setTimeout(() => isDragging.current = false, 100)}
                            dragConstraints={{ top: 0 }}
                            dragMomentum={true}
                            dragTransition={{
                                bounceDamping: 25,
                                power: 0.1,
                                timeConstant: 100
                            }}
                            style={{ x: randomImagePos[i].x, y: randomImagePos[i].y, boxShadow: "10px 15px 5px #00000033", rotate: randomImagePos[i].rotation }}
                        />
                    
                    )

                })
                
            }

            { randomImagePos.length !== 0 &&
                <motion.div
                    className={`bg-amber-500 absolute top-0 z-20 left-0 w-fit h-fit border-10 border-white font-bold text-white px-2 cursor-grab`}
                    drag
                    dragMomentum={true}
                    dragConstraints={{ top: 0 }}
                    dragTransition={{
                        bounceDamping: 25,
                        power: 0.1,
                        timeConstant: 100
                    }}
                    style={{ x: randomImagePos[0].x, y: randomImagePos[0].y, boxShadow: "10px 15px 5px #00000033", rotate: -5 }}
                >
                    Drag my photograph out of the way!
                </motion.div>
            }

            { randomImagePos.length !== 0 &&
                <motion.div
                    className={`bg-amber-500 absolute top-0 z-20 left-0 w-fit h-fit border-10 border-white font-bold text-white px-2 cursor-grab`}
                    drag
                    dragMomentum={true}
                    dragConstraints={{ top: 0 }}
                    dragTransition={{
                        bounceDamping: 25,
                        power: 0.1,
                        timeConstant: 100
                    }}
                    style={{ x: randomImagePos[0].x + 80, y: randomImagePos[0].y + 30, boxShadow: "10px 15px 5px #00000033", rotate: 3 }}
                >
                    Or Click it!
                </motion.div>
            }


            {/* projects wrapper */}
            <div className="w-[80%] max-w-330 flex flex-col gap-5 md:gap-0 items-center md:items-start md:flex-row text-white py-10 z-1">

                <div className="w-fit flex flex-col items-end md:pr-10 justify-between">

                    <p className="text-3xl text-nowrap font-semibold cursor-default">My Works</p>

                </div>

                <div className="relative w-full min-h-100 p-2 flex flex-col gap-2">
                    {/* border */}
                    <div className="w-50 h-20 border-l-2 border-t-2 absolute -mt-2 -ml-2" />
                    <div className="w-50 h-20 border-b-2 border-r-2 absolute right-0 bottom-0 -mt-2 -ml-2" />

                    { projects && projects.length !== 0 && 

                        projects.map(project => (    

                            <div className="w-full bg-white text-indigo-500 px-4 py-3 flex flex-col gap-5 z-1 relative">


                                <div className="flex flex-col gap-1">

                                    <p className="font-semibold text-xl cursor-default">{project.title}</p>

                                    <p className="font-normal text-base cursor-default">{project.description}</p>

                                </div>


                                <div className="flex w-full justify-between">

                                    { project.sourceLink &&

                                        <FontAwesomeIcon 
                                            className="text-2xl cursor-pointer" 
                                            icon={faGithub}
                                            onClick={() => window.open(project.sourceLink, "_blank")} 
                                        />
                                    
                                    }

                                    { !project.sourceLink &&

                                        <FontAwesomeIcon 
                                            className="text-2xl opacity-50 cursor-not-allowed" 
                                            icon={faGithub}
                                        />
                                    
                                    }

                                    { project.liveLink &&
                                        <button 
                                            className="bg-indigo-500 text-white px-3.5 py-0.5 cursor-pointer"
                                            onClick={() => window.open(project.liveLink, "_blank")}
                                        >
                                            {project.liveText ? project.liveText : "Live view"}
                                        </button>
                                    }

                                </div>

                            </div>

                        ))

                    }

                    {/* real content */}

                    <div className="w-full bg-white text-indigo-500 px-4 py-2 flex flex-col gap-5">

                        <div className="flex flex-col gap-1">

                            <p className="font-normal text-base text-center cursor-default">More in my Github. Be sure to check it out!</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )

}