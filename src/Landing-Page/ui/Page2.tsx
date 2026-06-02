import { useTransform, type MotionValue, motion } from "framer-motion";
import type { JSX } from "react";
import Idcard from "../../components/Idcard/Idcard";

interface Page2Props {
}

export default function Page2({  }: Page2Props): JSX.Element {


    return (
        <section className="relative z-3 w-screen h-screen bg-white"
            data-scroll
            data-scroll-repeat
            data-scroll-offset="-5%,10%"
            data-scroll-position="end,end"
            data-scroll-call="scrollEvent"
            data-scroll-ignore-fold
        >

        </section>
    )
}