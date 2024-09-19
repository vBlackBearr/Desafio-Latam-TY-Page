'use client'
import { Center, ScrollControls, useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { Group, MathUtils } from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export default function     Model() {

    useGLTF.preload('/assets/models/text-animation.glb');


    const group = useRef(null);
    const { nodes, animations, scene } = useGLTF('/assets/models/text-animation.glb');

    // const { actions } = useAnimations(animations, scene)

    scene.scale.x = 30;
    scene.scale.y = 30;

    const { actions, clips } = useAnimations(animations, scene);
    const scroll = useScroll();


    // Scroll animation using ScrollControls 

    // useFrame(() => {
    //     Object.keys(actions).forEach((key) => {
    //         const action = actions[key];
    //         const clip = action.getClip();
    //         actions[key].play().paused = true;
    //         actions[key].time = clip.duration * scroll.offset;
    //     })
    // });


    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Create a GSAP ScrollTrigger
    ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: 500,
        onUpdate: (self) => {
            const scrollProgress = self.progress;
            // Update animation based on scroll progress
            Object.keys(actions).forEach((key) => {
                const action = actions[key];
                const clip = action.getClip();
                action.play().paused = true;
                action.time = clip.duration * (window.scrollY / 500);
            });

        }
    });



    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )

}