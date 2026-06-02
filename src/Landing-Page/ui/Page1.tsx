import type { JSX, RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Idcard from "../../components/Idcard/Idcard";
import IndonesianFlag from "../../assets/IndonesianFlag.svg"
import Male from "../../assets/Male.svg"
import Vinyl from "../../assets/vinyl.jpeg"
import Play from "../../assets/PlayButton.svg"
import PrevNext from "../../assets/PrevNext.svg"

interface Page1Props {
    page1Ref: RefObject<HTMLDivElement | null>
}

export default function Page1({ page1Ref }: Page1Props): JSX.Element {
    return (
        <section ref={page1Ref} className="relative z-1 w-screen h-screen bg-indigo-500 pt-15 text-white">
                <Idcard className="absolute -mt-15 z-1 w-full h-full" cameraPosition={[2,-7, 10]} />

                <div className="w-full h-full flex items-center justify-center -mt-15">

                    <div className="w-105 h-10" />
               
                    <div className="flex flex-col gap-7 max-w-110">


                        <div className="flex gap-6">

                            <img src={Male} className="h-13" />
                            <img src={IndonesianFlag} className="h-13" />
                        
                        </div>

                        <div>

                            <p className="font-light text-2xl text-indigo-50">Hello, my name is</p>
                            <p className="font-semibold text-6xl">Faris Kahlil Haidar</p>

                        </div>

                        <div className="absolute translate-y-[30vh] translate-x-[30vw] rotate-20 w-39 h-fit border-2 rounded-lg border-white px-4 py-4 flex flex-col gap-5 items-center">

                            <div className="w-27 h-27 rounded-full bg-amber-50 flex justify-center items-center overflow-hidden animate-spin [animation-duration:10s]">

                                <img src={Vinyl} className="z-4 opacity-75" />

                                <div className="h-6 w-6 rounded-full bg-indigo-500 z-5 absolute" />

                            </div>

                            <div className="flex flex-col justify-between w-full overflow-hidden gap-2">

                                <p className="text-ellipsis text-nowrap overflow-hidden min-w-0">Lorem Ipsum - Dolor Sit Amet</p>

                                <div className="flex justify-between px-3">
                                    <img src={PrevNext} className="rotate-180 w-4" />

                                    <img src={Play} className="w-4" />

                                    <img src={PrevNext} className="w-4" />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="absolute left-0 bottom-0 mb-3 ml-3 flex flex-col gap-2">

                    <button className="flex gap-2 items-center border px-3 py-1 w-fit">

                        <FontAwesomeIcon icon={faInstagram} />
                        <p className="font-normal text-base">Instagram</p>

                    </button>

                    <button className="flex gap-2 items-center border px-3 py-1 w-fit">

                        <FontAwesomeIcon icon={faLinkedin} />
                        <p className="font-normal text-base">Faris Kahlil Haidar</p>

                    </button>

                    <button className="flex gap-2 items-center border px-3 py-1 w-fit">

                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="font-normal text-base">fariskahlilhaidar@gmail.com</p>

                    </button>

                </div>

        </section>
    )
}