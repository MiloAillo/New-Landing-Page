import { useRef, type JSX } from "react";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import { useScroll } from "framer-motion";
import Page3 from "./ui/Page3";

export default function LandingPage(): JSX.Element {
    const page1Ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress: page1Scroll } = useScroll({
        target: page1Ref,
        offset: ["start start", "end start"]
    })

    return (
        <>
            <Page1 page1Ref={page1Ref} />

            <Page2 page1Scroll={page1Scroll} />

            <Page3 />
        </>
    )
}