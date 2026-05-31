import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Idcard from "../../components/Idcard/Idcard";

export default function Page1(): JSX.Element {
    return (
        <section className="w-screen h-screen bg-indigo-500 pt-15 text-white">
                <Idcard className="absolute -mt-15 z-1 w-full h-full" cameraPosition={[-2,-7, 10]} />

                <div className="w-full h-full flex items-center justify-center -mt-10">

                    <div className="max-w-110 flex flex-col gap-5">

                        <div className="flex flex-col gap-2">

                            <div>

                                <p className="font-light text-2xl text-indigo-50">Hello, my name is</p>
                                <p className="font-semibold text-6xl">Faris Kahlil Haidar</p>

                            </div>

                            <p className="text-2xl">A software engineer aiming to be a fullstack developer.</p>

                        </div>

                        <div className="flex flex-col gap-1">

                            <p className="font-normal text-xl">You can contact me at</p>

                            <div className="text-xl font-light flex flex-col gap-1">

                                <div className="flex items-center gap-1">

                                    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                                    <p>Instagram</p>

                                </div>

                                <div className="flex items-center gap-1">

                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                                    <p>fariskahlilhaidar@gmail.com</p>

                                </div>

                                <div className="flex items-center gap-1">

                                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                                    <p>Faris Kahlil Haidar</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="w-70 h-10" />

                </div>
        </section>
    )
}