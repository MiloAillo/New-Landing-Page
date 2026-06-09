import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";

export type AlertType = {
    className?: string
    title: string
    description: string
    closeFunction: () => any
}

export default function Alert({ className, title, description, closeFunction }: AlertType): JSX.Element {

    return (
        
        <div className={`bg-red-500/20 backdrop-blur-2xl border-2 border-red-500/30 flex flex-row pl-5 pr-3 py-2 rounded-xl ${className}`}>

            <div>

                <p className="font-normal text-[15px]">{title}</p>
                <p className="font-light text-sm">{description}</p>

            </div>
        
            <div onClick={() => closeFunction()}>

                <FontAwesomeIcon icon={faXmark} />

            </div>

        </div>
    
    )
}