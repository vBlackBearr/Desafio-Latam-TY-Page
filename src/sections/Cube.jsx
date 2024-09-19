import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ModelCube from "./animations/CubeExplosion/ModelCube"
import { Suspense } from "react"


const Cube = () => {
    useGLTF.preload('/assets/models/cube-explosion.glb')

    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="h-[1000px]">
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <ModelCube />
            </Suspense>
        </Canvas >
    )
}

export default Cube