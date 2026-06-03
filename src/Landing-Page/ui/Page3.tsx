// import { useTransform, type MotionValue, motion } from "framer-motion";
import { useEffect, useRef, useState, type JSX } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/A Perplexed Thought.webp"
import img2 from "../../assets/Deluged Twilight.webp"
import img3 from "../../assets/Hanging together.webp"
import img4 from "../../assets/Money man.webp"
import img5 from "../../assets/Silently watching.webp"
import img6 from "../../assets/Worldly detachment.webp"
import GenerateRandomXY, { getRandomIntInclusive } from "../../components/Idcard/helper/generateRandomXY";
import { rand } from "three/src/nodes/math/MathNode.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Page3(): JSX.Element {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [ randomImagePos, setRandomImagePos ] = useState<{x:number, y: number}[]>([])

    useEffect(() => {
        if (sectionRef && sectionRef.current) {

            const sectionDOMRect = sectionRef.current.getBoundingClientRect()
            
            const arrayPos: {x: number, y: number}[] = []

            imageArray.forEach(() => {
                
                const randomPos = GenerateRandomXY(0, sectionDOMRect.width - offset, 0, sectionDOMRect.height - offset)

                arrayPos.push(randomPos)

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
        <section ref={sectionRef} className="relative z-2 w-screen min-h-screen bg-indigo-500 flex items-center justify-center">

            {/* scattered images container */}
            <div className="w-full h-full absolute z-5 overflow-hidden">

                { imageArray && randomImagePos.length !== 0 &&

                    imageArray.map((image, i) => {
 
                        return (

                            <motion.img
                                className={`bg-amber-500 absolute top-0 left-0 w-60 border-10 border-white`}
                                src={image}
                                drag
                                dragConstraints={{ top: 0 }}
                                dragMomentum={true}
                                dragTransition={{
                                    bounceDamping: 25,
                                    power: 0.1,
                                    timeConstant: 100
                                }}
                                style={{ x: randomImagePos[i].x, y: randomImagePos[i].y, boxShadow: "10px 15px 5px #00000033", rotate: getRandomIntInclusive(-15, 15) }}
                            />
                        
                        )

                    })
                    
                }

                { randomImagePos.length !== 0 &&
                    <motion.div
                        className={`bg-amber-500 absolute top-0 z-20 left-0 w-fit h-fit border-10 border-white font-bold text-white px-2`}
                        drag
                        dragConstraints={{ top: 0 }}
                        dragMomentum={true}
                        dragTransition={{
                            bounceDamping: 25,
                            power: 0.1,
                            timeConstant: 100
                        }}
                        style={{ x: randomImagePos[0].x, y: randomImagePos[0].y, boxShadow: "10px 15px 5px #00000033", rotate: getRandomIntInclusive(-15, 15) }}
                    >
                        Drag my photograph out of the way!
                    </motion.div>
                }

            </div>

            {/* projects wrapper */}
            <div className="w-[80%] flex text-white py-10">

                <div className="w-fit flex flex-col items-end pr-10 justify-between">

                    <p className="text-3xl text-nowrap font-semibold">My Works</p>

                </div>

                <div className="relative w-full min-h-100 p-2 flex flex-col gap-2">
                    {/* border */}
                    <div className="w-50 h-20 border-l-2 border-t-2 absolute -mt-2 -ml-2" />
                    <div className="w-50 h-20 border-b-2 border-r-2 absolute right-0 bottom-0 -mt-2 -ml-2" />


                    {/* real content */}
                    <div className="w-full bg-white text-indigo-500 px-4 py-3 flex flex-col gap-5">

                        <div className="flex flex-col gap-1">

                            <p className="font-semibold text-xl">MyFinance</p>

                            <p className="font-normal text-base">Uncontrollable urge to shop and spend? Don't know where your money go?  Need to keep track of your financial? MyFinance here to help! Your  digital solution to help with your financial.</p>

                        </div>


                        <div className="flex justify-between">

                            <FontAwesomeIcon icon={faGithub} className="text-2xl" />

                            <button className="bg-indigo-500 text-white px-3.5 py-0.5">Live view</button>

                        </div>

                    </div>

                    <div className="w-full bg-white text-indigo-500 px-4 py-2 flex flex-col gap-5">

                        <div className="flex flex-col gap-1">

                            <p className="font-normal text-base text-center">More in my Github. Be sure to check it out!</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )

}