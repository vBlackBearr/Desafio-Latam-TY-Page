import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Suspense, useEffect, useState } from 'react';


export default function Scene() {

    const [isFixed, setFixed] = useState(true);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
            if (window.scrollY > 500) {
                setFixed(false);
            } else {
                setFixed(true);
            }
        });
    }, []);

    return (
        <Canvas gl={
            { antialias: true }} dpr={[1, 1.5]}
            style={
                {
                    height: '300px', alignContent: 'center', justifyContent: 'center',
                    top: isFixed ? `${((scroll / 2) + 150)}px` : '400px',

                }}>
            <ambientLight intensity={.8} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>

        </Canvas>
    )
}