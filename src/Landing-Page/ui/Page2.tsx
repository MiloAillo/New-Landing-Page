import { useTransform, type MotionValue, motion } from "framer-motion";
import type { JSX } from "react";

interface Page2Props {
    page1Scroll: MotionValue<number>
}

export default function Page2({ page1Scroll }: Page2Props): JSX.Element {

    const parallax = useTransform(page1Scroll, [0, 1], ["0vh", "-75vh"])

    return (
        <motion.section style={{ y: parallax }} className="relative z-3 w-screen h-screen bg-white">

        </motion.section>
    )
}