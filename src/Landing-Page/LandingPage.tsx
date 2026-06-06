import { useState, type JSX } from "react";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import Page3 from "./ui/Page3";
import Page4 from "./ui/Page4";
import Alert from "../components/Idcard/components/AlertComponent";

export default function LandingPage(): JSX.Element {
    const [ showMobileAlert, setShowMobileAlert ] = useState(true)

    return (
        <>
            { showMobileAlert &&
            
                <Alert 
                    title="I am working for a fix" 
                    description="This web isn't mobile device friendly, as it require moderate amount of power to properly function." 
                    closeFunction={() => setShowMobileAlert(false)}
                    className="fixed z-99999 right-0 mr-5 mt-5 w-[75%] text-white md:hidden" 
                />
            
            }

            <Page1 />

            <Page2 />

            <Page3 />

            <Page4 />
        </>
    )
}