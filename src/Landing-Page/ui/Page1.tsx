import type { JSX, RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Idcard from "../../components/Idcard/Idcard";
import IndonesianFlag from "../../assets/IndonesianFlag.svg"
import Male from "../../assets/Male.svg"

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

                            <img src={Male} className="h-15" />
                            <img src={IndonesianFlag} className="h-15" />
                        
                        </div>

                        <div>

                            <p className="font-light text-2xl text-indigo-50">Hello, my name is</p>
                            <p className="font-semibold text-6xl">Faris Kahlil Haidar</p>

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