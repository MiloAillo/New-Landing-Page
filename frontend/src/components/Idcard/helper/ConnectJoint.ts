import { useRevoluteJoint } from "@react-three/rapier";

export default function ConnectJoint(bodyRef1: any, bodyRef2: any, anchor1: [number, number, number], anchor2: [number, number, number]) {
    useRevoluteJoint(bodyRef1, bodyRef2, [
        anchor1,
        anchor2,
        [0, 0, 1] 
    ])
}