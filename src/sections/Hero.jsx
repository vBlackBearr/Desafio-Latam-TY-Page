import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './animations/TKAnimation/Scene';

const Hero = () => {

    const arrowRef = useRef(null);

    useEffect(() => {
        gsap.to(arrowRef.current, {
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 1
        });

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(arrowRef.current, {
            scrollTrigger: {
                trigger: arrowRef.current,
                start: "top 500px",
                end: "bottom 500px",
                scrub: 1
            },
            opacity: 0,
        })

    }, []);

    return (
        <>
            <div className="flex items-center justify-center">
                <Scene />
                <div ref={arrowRef} className="slide-down-component mt-10 absolute bottom-[10%]">
                    <h1 className="text-black">Desliza</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-full"
                        color='black'
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Hero;