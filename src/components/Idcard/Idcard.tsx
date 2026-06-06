import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { type JSX } from "react";
import Model from "./components/Model";

interface IdcardProps {
    cameraPosition?: [number, number, number]
    className?: string
}

export default function Idcard({ cameraPosition,  className }: IdcardProps): JSX.Element {
    return (
        <section className={className}>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={cameraPosition !== undefined ? cameraPosition : [0,-7, 10]} />

                {/* <OrbitControls /> */}

                <pointLight position={[1, -3, 20]} intensity={1000} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

                <Environment preset="warehouse" />

                <Physics numSolverIterations={10} gravity={[0, -10, 0]}>

                    <Model glbPath="/idcard.glb" />
                    
                </Physics>

            </Canvas>
        </section>
    )
}