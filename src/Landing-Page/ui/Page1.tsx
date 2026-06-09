import { useState, type JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Idcard from "../../components/Idcard/Idcard";
import IndonesianFlag from "../../assets/IndonesianFlag.svg"
import Male from "../../assets/Male.svg"
import Vinyl from "../../assets/vinyl.jpeg"
import Play from "../../assets/PlayButton.svg"
import Pause from "../../assets/PauseButton.svg"
import PrevNext from "../../assets/PrevNext.svg"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Page1Props {
}

export default function Page1({  }: Page1Props): JSX.Element {
    const [ play, setPlay ] = useState(true)


    return (
        <section 
            className="page-1 relative z-1 w-screen h-screen min-h-200 md:min-h-150 max-h-230 md:max-h-200 bg-indigo-500 pt-15 text-white pb-5"
        >

                <Idcard className="absolute -mt-15 z-5 w-full h-full hidden md:block" cameraPosition={[2,-7, 10]} />
                <Idcard className="absolute -mt-15 z-5 w-full h-full block md:hidden" cameraPosition={[0,-7.5, 10]} />

                <div className="relative w-full h-full flex items-center md:-mt-15 flex-col justify-end md:justify-center md:flex-row">

                    <div className="hidden md:block w-105 h-10" />
               
                    <div className="flex flex-col items-center md:items-start gap-3 md:gap-7 max-w-110">


                        <div className="flex gap-6 relative">

                            <img src={Male} className="h-10 md:h-13" />
                            <img src={IndonesianFlag} className="h-10 md:h-13" />
                        
                        </div>

                        <div className="flex flex-col items-center md:items-start">

                            <p className="font-light text-xl sm:text-2xl md:text-2xl text-indigo-50">Hello, my name is</p>
                            <p className="font-semibold text-4xl sm:text-5xl md:text-6xl">Faris Kahlil Haidar</p>

                        </div>

                        {/* contact button -- up to small only */}
                        <div className="md:hidden z-10 flex gap-2 flex-wrap justify-center pb-5">

                            <button onClick={() => window.open("https://legacy-mischikomoe.vercel.app", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 text-white w-fit hover:bg-transparent hover:text-white transition-all cursor-pointer">

                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                <p className="font-normal text-base">Legacy Landing Page</p>

                            </button>

                            <button onClick={() => window.open("https://www.instagram.com/miloukato", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 bg-white text-indigo-500 w-fit h-fit hover:bg-transparent hover:text-white transition-all cursor-pointer">

                                <FontAwesomeIcon icon={faInstagram} />
                                <p className="font-normal text-base">Instagram</p>

                            </button>

                            <button onClick={() => window.open("https://www.linkedin.com/in/faris-kahlil-haidar-7bb35031b", "_blank")} className="flex gap-2 items-center bg-white text-indigo-500 border px-3 py-1.5 w-fit h-fit hover:bg-transparent hover:text-white transition-all cursor-pointer">

                                <FontAwesomeIcon icon={faLinkedin} />
                                <p className="font-normal text-base">Faris Kahlil Haidar</p>

                            </button>

                            <button onClick={() => window.open("mailto://fariskahlilhaidar@gmail.com", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 w-fit h-fit bg-white text-indigo-500 hover:bg-transparent hover:text-white transition-all cursor-pointer">

                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className="font-normal text-base">fariskahlilhaidar@gmail.com</p>

                            </button>

                        </div>

                        {/* vinyl -- hidden */}
                        <div className="absolute translate-y-[30vh] translate-x-[30vw] rotate-20 w-39 h-fit border-2 rounded-lg border-white px-4 py-4 flex-col gap-5 items-center pointer-events-auto opacity-60 hidden">

                            <div className="w-27 h-27 rounded-full bg-amber-50 flex justify-center items-center overflow-hidden animate-spin [animation-duration:10s]">

                                <img src={Vinyl} className="z-4 opacity-75" />

                                <div className="h-6 w-6 rounded-full bg-indigo-500 z-5 absolute" />

                            </div>

                            <div className="flex flex-col justify-between w-full overflow-hidden gap-2">

                                <p className="text-ellipsis text-nowrap overflow-hidden min-w-0">Under Construction</p>

                                <div className="flex justify-between px-3 relative z-100">
                                    <img src={PrevNext} className="rotate-180 w-4" />

                                    { !play && <img src={Play} onClick={(e) => {e.stopPropagation(); setPlay(true)}} className="w-4" /> }

                                    { play && <img src={Pause} onClick={(e) => {e.stopPropagation(); setPlay(false)}} className="w-4" /> }

                                    <img src={PrevNext} className="w-4" />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* contact button -- md and up only */}
                <div className="hidden absolute z-10 left-0 bottom-0 mb-3 ml-3 md:flex flex-col gap-2 md:max-w-340 md:w-full md:left-[50%] md:translate-x-[-50%] ">

                    <button onClick={() => window.open("https://legacy-mischikomoe.vercel.app", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 text-white w-fit hover:bg-transparent hover:text-white transition-all cursor-pointer">

                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <p className="font-normal text-base">Legacy Landing Page</p>

                    </button>

                    <button onClick={() => window.open("https://www.instagram.com/miloukato", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 bg-white text-indigo-500 w-fit hover:bg-transparent hover:text-white transition-all cursor-pointer">

                        <FontAwesomeIcon icon={faInstagram} />
                        <p className="font-normal text-base">Instagram</p>

                    </button>

                    <button onClick={() => window.open("https://www.linkedin.com/in/faris-kahlil-haidar-7bb35031b", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 w-fit bg-white text-indigo-500 hover:bg-transparent hover:text-white transition-all cursor-pointer">

                        <FontAwesomeIcon icon={faLinkedin} />
                        <p className="font-normal text-base">Faris Kahlil Haidar</p>

                    </button>

                    <button onClick={() => window.open("mailto://fariskahlilhaidar@gmail.com", "_blank")} className="flex gap-2 items-center border px-3 py-1.5 w-fit bg-white text-indigo-500 hover:bg-transparent hover:text-white transition-all cursor-pointer">

                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="font-normal text-base">fariskahlilhaidar@gmail.com</p>

                    </button>

                </div>

        </section>
    )
}