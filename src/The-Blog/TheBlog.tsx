import type { JSX } from "react";
import { motion } from "framer-motion";
import { outletMotion } from "../Layout";

export default function TheBlog(): JSX.Element {
    return (
        <motion.div
            className="w-screen h-screen flex justify-center items-center bg-indigo-500"
            key={"The-Blog"}
            {...outletMotion}
        >

            <p className="text-xl text-white/65">Coming Soon</p>

        </motion.div>
    )
}