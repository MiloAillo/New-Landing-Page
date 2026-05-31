import {Tube, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { interactionGroups, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState, type JSX } from "react";
import { CatmullRomCurve3, Mesh, MeshPhysicalMaterial, Vector3 } from "three";
import ConnectJoint from "../helper/ConnectJoint";
import ConnectJointComponent from "./ConnectJointComponent";

interface modelProps {
    glbPath: string
}

export default function Model({ glbPath }: modelProps): JSX.Element {
    const { nodes } = useGLTF(glbPath)
    
    // Debug: log available nodes
    console.log("Available GLB nodes:", Object.keys(nodes))

    const plasticMaterial = new MeshPhysicalMaterial({
        transmission: 1.0,
        roughness: 0.02,
        ior: 1.46,
        thickness: 0.05,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        transparent: true,
        opacity: 0.35,
    });

    useEffect(() => {
        if (nodes.wrap) {
            nodes.wrap.traverse((child) => {
                if ((child as Mesh).isMesh) {
                    (child as Mesh).material = plasticMaterial;
                }
            });
        }
    }, [nodes]);

    const [ mouseDebug, _setMouseDebug ] = useState<boolean>(false)
    const [ isDragging, setIsDragging ] = useState<boolean>(false)

    // for rope hanging
    const [ curve, setCurve ] = useState<any>(null)

    const count = 5
    const length = 1

    const fixedRef = useRef<RapierRigidBody>(null)
    const refs = Array.from({ length: count }, () => useRef<RapierRigidBody>(null))
    const cardRef = useRef<RapierRigidBody>(null)
    const mouseDebugRef = useRef<RapierRigidBody>(null)

    useEffect(() => {
        const handleGlobalMouseUp = window.addEventListener("mouseup", () => setIsDragging(false))

        return () => {
            window.removeEventListener("mouseup", () => handleGlobalMouseUp)
        }
    }, [])

    // map each point for curve
    useFrame(() => {
        const points: Vector3[] = []

        // get fixed ball coor
        if (fixedRef.current) {
            const pos = fixedRef.current.translation()
            points.push(new Vector3(pos.x, pos.y, pos.z))
        }

        // get each chain body coor
        refs.forEach((ref) => {
            if (ref.current) {
                const pos = ref.current.translation()
                points.push(new Vector3(pos.x, pos.y, pos.z))
            }
        });

        // get id card coor
        if (cardRef.current) {
            const pos = cardRef.current.translation()
            points.push(new Vector3(pos.x, pos.y, pos.z))
        }

        setCurve(new CatmullRomCurve3(points, false, "centripetal"))
    })

    // cursor simulation
    useFrame((state) => {
        let mousePos2D = new Vector3(state.pointer.x, state.pointer.y, 0.9)
        // even though its 2d, the third pos is for unproject so that it put the z at half the viewing frustum

        // transform 2d to 3d space
        mousePos2D.unproject(state.camera)

        // Subtracting the camera position gives you the raw line direction
        const direction = mousePos2D.sub(state.camera.position).normalize()

        const targetZ = cardRef.current ? cardRef.current.translation().z : 0

        // The Multiplier formula:
        const multiplier = (targetZ - state.camera.position.z) / direction.z

        const realMouse3D = state.camera.position.clone().add(direction.multiplyScalar(multiplier))

        // 3d mouse element movement
        if (mouseDebugRef.current) {
            mouseDebugRef.current.setNextKinematicTranslation(realMouse3D)
        }
    })

    return (
        <>
            <RigidBody type="fixed" ref={fixedRef} colliders={false}>
                <mesh>
                    <sphereGeometry args={[0.028]} />
                    <meshStandardMaterial color={"black"} />
                </mesh>
            </RigidBody>

            {refs.map((ref, i) => {
                const parentRef = i === 0 ? null : refs[i - 1]

                if (parentRef) ConnectJoint(parentRef, ref, [0, -(length / 2), 0], [0, (length / 2), 0])
                else ConnectJoint(fixedRef, ref, [0, 0, 0], [0, (length /2), 0])

                if (i == refs.length - 1) ConnectJoint(refs[refs.length - 1], cardRef, [0, -(length / 2), 0], [0, 0, 0])

                const yPosition = -(length / 2) - (length * i)

                return (
                <RigidBody 
                    key={`chain-${i}`} 
                    ref={ref} 
                    colliders="cuboid" 
                    position={[0, yPosition, 0]}
                    collisionGroups={interactionGroups([0], [1])}
                    includeInvisible
                    linearDamping={20}
                    // angularDamping={5000}
                >
                    <mesh visible={false}>
                        <boxGeometry args={[0.1, length, 0.1]} />
                    </mesh>
                </RigidBody>
                )
            })}

            {/* card hanging */}
            <RigidBody ref={cardRef} position={[0, -(refs.length * length), 0]} collisionGroups={interactionGroups([0], [1])}>
                {/* <mesh
                    onPointerDown={(e) => { e.stopPropagation(); setIsDragging(true) }}
                >
                    <boxGeometry args={[1, 1.5, 0.1]} />
                </mesh> */}
                <group
                    onPointerDown={(e) => { e.stopPropagation(); setIsDragging(true) }}
                >
                    {nodes.id_paper && <primitive object={nodes.id_paper} />}
                    {nodes.wrap && <primitive object={nodes.wrap} />}
                </group>
            </RigidBody>

            { curve && curve.points && curve.points.length > 2 && 
                <Tube
                    args={[
                        curve,
                        64,
                        0.04,
                        8,
                        false
                    ]} 
                >
                    <meshStandardMaterial color={"black"} />
                </Tube>
            }

            {/* mouse simulation */}
            <RigidBody type="kinematicPosition" ref={mouseDebugRef} colliders={false}>
                <mesh visible={mouseDebug ? true : false}>
                    <sphereGeometry args={
                        [0.05]} />
                </mesh>
            </RigidBody>

            { cardRef && mouseDebugRef && isDragging &&
            <ConnectJointComponent
                    bodyRef1={cardRef} 
                    bodyRef2={mouseDebugRef} 
                    anchor1={[0,0,0]} 
                    anchor2={[0,0,0]}
                />
            }
        </>
    )
}