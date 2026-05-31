import type { JSX } from "react";

export default function NavigationBar(): JSX.Element {
    return (
        <nav className="flex justify-between fixed w-screen px-10 font-light text-xl text-white items-center h-15 bg-transparent z-999">
            <p>Mischiko Moe</p>
            <p>The Blog</p>
            <p>The Lounge</p>
            <p>Version 1.0.0-alpha ©2026</p>
        </nav>
    )
}