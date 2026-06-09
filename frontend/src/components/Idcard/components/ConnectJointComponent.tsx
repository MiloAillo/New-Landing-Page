import { useRopeJoint } from "@react-three/rapier"

export default function ConnectJointComponent({bodyRef1, bodyRef2, anchor1, anchor2}: any) {
    useRopeJoint(bodyRef1, bodyRef2, [
        anchor1,
        anchor2,
        0.1
    ])

    return null
}