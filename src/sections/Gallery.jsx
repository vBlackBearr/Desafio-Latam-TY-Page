
import { FC, useEffect, useState } from 'react';


const Gallery = ({ name }) => {

    const [cols, setCols] = useState(0)

    const galery_data = [
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 224505.png",
            "url": "https://threejs.org",
            "title": "Sitio three.js",
            "subtitle": "Documentacion y Proyectos"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 225428.png",
            "url": "https://www.larsberg.net/#/",
            "title": "Lars Berg",
            "subtitle": "Proyectos, varios frameworks"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 230144.png",
            "url": "https://codepen.io/GreenSock/collections/",
            "title": "Proyectos GSAP",
            "subtitle": "Puro GSAP"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 230510.png",
            "url": "https://bloomcollective.io",
            "title": "Bloom Collective",
            "subtitle": "Inspiracion"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 230717.png",
            "url": "https://lusion.co",
            "title": "Ilusion Website",
            "subtitle": "Inspiracion"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 230954.png",
            "url": "https://framermotionexamples.com/examples?s=free",
            "title": "Framer Motion Examples",
            "subtitle": "Ejemlplos basicos"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 231240.png",
            "url": "https://www.framer.com/gallery/styles/animations",
            "title": "The best of Framer",
            "subtitle": "Paginas con Framer Motion"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 231454.png",
            "url": "https://thetinypod.com",
            "title": "The tiny pod",
            "subtitle": "Inspiracion"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 231825.png",
            "url": "https://domenicobrz.github.io/webgl/",
            "title": "Recopilacion de Proyectos",
            "subtitle": "Varios Frameworks"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 231942.png",
            "url": "https://domenicobrz.github.io/webgl/projects/experiment1/",
            "title": "Experiment webgl",
            "subtitle": "Lo mas chulo que he visto :0"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 232146.png",
            "url": "https://www.aquarium.ru/en",
            "title": "Animacion Fumadisima",
            "subtitle": "Lo mas fumado que he visto xd"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 232426.png",
            "url": "https://helloenjoy.itch.io/lights",
            "title": "Animacion + Juego + Musica",
            "subtitle": "Veanlo todo, lo vale <3"
        },
        {
            "src": "/assets/images/Captura de pantalla 2024-09-13 233032.png",
            "url": "https://spite.github.io/fuck-2020/",
            "title": "fuck-2020, Animacion + Musica",
            "subtitle": "neta no puedo creer que sea web xd"
        }

    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1270) {
                console.log("3 cols")
                setCols(3) // h 1400px
            } else if (window.innerWidth > 880) {
                setCols(2) // h 1900px
            } else {
                setCols(1)
            }
        };

        // Initial width logging
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

    }, []);

    if (cols == 3) {
        return (
            <div className={"flex justify-center max-h-[1400px]"}>
                <div className="flex flex-wrap flex-col content-center gap-4 p-4 max-w-[1500px]">
                    {galery_data.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="max-w-[400px] flex flex-wrap ustify-center align-middle">
                            <div className="relative">
                                <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4" style={{ height: '60%' }}>
                                    <h2 className="text-lg font-bold text-white">{item.title}</h2>
                                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    } else if (cols == 2) {
        return (
            <div className={"flex justify-center max-h-[1900px]"}>
                <div className="flex flex-wrap flex-col content-center gap-4 p-4 max-w-[1500px]">
                    {galery_data.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="max-w-[400px] flex flex-wrap ustify-center align-middle">
                            <div className="relative">
                                <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4" style={{ height: '60%' }}>
                                    <h2 className="text-lg font-bold text-white">{item.title}</h2>
                                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"flex justify-center"}>
                <div className="flex flex-wrap flex-col content-center gap-4 p-4 max-w-[1500px]">
                    {galery_data.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="max-w-[400px] flex flex-wrap ustify-center align-middle">
                            <div className="relative">
                                <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4" style={{ height: '60%' }}>
                                    <h2 className="text-lg font-bold text-white">{item.title}</h2>
                                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
};



export default Gallery;