import { useTransform, type MotionValue, motion } from "framer-motion";
import type { JSX } from "react";
import Idcard from "../../components/Idcard/Idcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCode, faRobot, faWaveSquare } from "@fortawesome/free-solid-svg-icons"

interface Page2Props {
}

export default function Page2({  }: Page2Props): JSX.Element {
    return (
        <motion.section 
            className="relative z-3 w-screen min-h-screen bg-white text-indigo-500 justify-center items-center flex"
            data-scroll
            data-scroll-repeat
            data-scroll-offset="-5%,10%"
            data-scroll-position="end,end"
            data-scroll-call="scrollEvent"
            data-scroll-ignore-fold
        >

            <div className="flex w-[80%] gap-15 py-20">

                <div className="flex flex-col gap-10 mt-5">

                    <div className="flex flex-col gap-3 border-2 px-8 py-5">

                        <p className="font-">Excels at</p>
                    
                        <div className="flex gap-2 items-center bg-indigo-500 w-fit text-white px-3 py-1.5">

                            <FontAwesomeIcon icon={faCode} className="text-xl" />
                            <p className="text-xl font-semibold">Frontend Developer</p>

                        </div>

                        <p className="text-base">Though i can work in backend and databases, i find that frontend fit more for me. I have explored the world of gamedev too but it doesnt fit me well.</p>
                    
                    </div>

                    <div className="flex flex-col gap-3 border-2 px-8 py-5">

                        <p className="font-">Studying</p>
                    
                        <div className="flex gap-2 items-center bg-indigo-500 w-fit text-white px-3 py-1.5">

                            <FontAwesomeIcon icon={faRobot} className="text-xl -mt-0.5" />
                            <p className="text-xl font-semibold">DS & AI</p>

                        </div>

                        <p className="text-base">Watching how number and math could mimic how human brain work fascinates me. By learning this, i could understand and implement AI-driven web app or even be machine learning engineer in the future!</p>
                    
                    </div>

                </div>

                <div className="flex flex-col gap-10 -mt-5">

                    <div className="flex flex-col gap-3 border-2 px-8 py-5">

                        <p className="font-">Occasionally do</p>
                    
                        <div className="flex gap-2 items-center bg-indigo-500 w-fit text-white px-3 py-1.5">

                            <FontAwesomeIcon icon={faCamera} className="text-xl" />
                            <p className="text-xl font-semibold">Photography</p>

                        </div>

                        <p className="text-base">I love to express my feeling in a form of some type of art, and photography sits right for me.</p>
                    
                    </div>

                    <div className="flex flex-col gap-3">

                        <p className="font-">Interested in</p>
                    
                        <div className="flex gap-2 items-center bg-indigo-500 text-white py-1.5 w-fit px-4">

                            <FontAwesomeIcon icon={faWaveSquare} className="text-xl" />
                            <p className="text-xl font-semibold">Actor</p>

                        </div>

                        <div className="flex gap-2 items-center bg-indigo-500 text-white py-1.5 w-fit px-4">

                            <FontAwesomeIcon icon={faWaveSquare} className="text-xl" />
                            <p className="text-xl font-semibold">Voice Actor</p>

                        </div>

                        <div className="flex gap-2 items-center bg-indigo-500 text-white py-1.5 w-fit px-4">

                            <FontAwesomeIcon icon={faWaveSquare} className="text-xl" />
                            <p className="text-xl font-semibold">Audio Engineer</p>

                        </div>

                    </div>

                </div>

            </div>

        </motion.section>
    )
}

    //    {/* card */}
                // <div className="flex flex-col gap-3 max-w-60 bg-amber-600/25">

                //     <p className="font-">Excels at</p>
                
                //     <div className="flex gap-2 items-center">

                //         <FontAwesomeIcon icon={faCode} className="text-xl" />
                //         <p className="text-xl font-semibold">Frontend Developer</p>

                //     </div>

                //     <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>
                
                // </div>

    //             {/* card */}
    //             <div className="flex flex-col gap-3 max-w-60 bg-blue-600/25">

    //                 <p className="font-">Excels at</p>
                
    //                 <div className="flex gap-2 items-center">

    //                     <FontAwesomeIcon icon={faCode} className="text-xl" />
    //                     <p className="text-xl font-semibold">Frontend Developer</p>

    //                 </div>

    //                 <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>

    //             </div>

    //             {/* card */}
    //             <div className="flex flex-col gap-3 max-w-60 bg-violet-600/20">

    //                 <p className="font-">Excels at</p>
                
    //                 <div className="flex gap-2 items-center">

    //                     <FontAwesomeIcon icon={faCode} className="text-xl" />
    //                     <p className="text-xl font-semibold">Frontend Developer</p>

    //                 </div>

    //                 <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>

    //             </div>

    //             {/* card */}
    //             <div className="flex flex-col gap-3 max-w-60  bg-yellow-200/20">

    //                 <p className="font-">Excels at</p>
                
    //                 <div className="flex gap-2 items-center">

    //                     <FontAwesomeIcon icon={faCode} className="text-xl" />
    //                     <p className="text-xl font-semibold">Frontend Developer</p>

    //                 </div>

    //                 <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>

    //             </div>

    //             {/* card */}
    //             <div className="flex flex-col gap-3 max-w-60 bg-purple-600/20">

    //                 <p className="font-">Excels at</p>
                
    //                 <div className="flex gap-2 items-center">

    //                     <FontAwesomeIcon icon={faCode} className="text-xl" />
    //                     <p className="text-xl font-semibold">Frontend Developer</p>

    //                 </div>

    //                 <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>

    //             </div>

    //             {/* card */}
    //             <div className="flex flex-col gap-3 max-w-60 bg-pink-600/25">

    //                 <p className="font-">Excels at</p>
                
    //                 <div className="flex gap-2 items-center">

    //                     <FontAwesomeIcon icon={faCode} className="text-xl" />
    //                     <p className="text-xl font-semibold">Frontend Developer</p>

    //                 </div>

    //                 <p className="text-base">Though i can work in backend and databases, i find frontend fit more for me.</p>

    //             </div>