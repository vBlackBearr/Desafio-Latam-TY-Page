import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { ScrollTrigger } from 'gsap/all'
import { useFrame } from '@react-three/fiber'

const ModelCube = () => {

    // useEffect(() => {
    //     ScrollTrigger.create({
    //         trigger: document.body,
    //         start: "4000px 4500px",
    //         end: "bottom bottom",
    //         markers: true,
    //         onUpdate: (self) => {
                
    //             Object.keys(actions).forEach((key) => {
    //                 const action = actions[key]
    //                 const clip = action.getClip()
    //                 action.play().paused = true
    //                 action.time += 0.01
    //                 console.log(clip.duration)
    //             })
                
    //         }
    //     })
    // }, [])

    useFrame(() => {
        Object.keys(actions).forEach((key) => {
            const action = actions[key]
            const clip = action.getClip()
            action.play().paused = true
            action.time += 0.01
            console.log(clip.duration)
        })
    })

    const { animations, scene } = useGLTF('/assets/models/cube-exposion.glb')

    const ref = useRef(null)

    scene.scale.x = 2.5
    scene.scale.y = 2.5
    scene.scale.z = 2.5


    const { actions, clips } = useAnimations(animations, scene)



    return (
        <group ref={ref}>
            <primitive object={scene} position={[0, 0, 0]} />
        </group>
    )
}

export default ModelCube