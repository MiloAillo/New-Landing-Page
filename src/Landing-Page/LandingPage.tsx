import { useRef, type JSX } from "react";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import { useScroll } from "framer-motion";
import Page3 from "./ui/Page3";
import Page4 from "./ui/Page4";

export default function LandingPage(): JSX.Element {
    return (
        <>
            {/* <Page1 /> */}

            <Page2 />

            {/* <Page3 /> */}

            {/* <Page4 /> */}
        </>
    )
}