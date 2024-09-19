import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ShowedProjects = () => {

    return (
        <div className="w-full flex flex-col p-[10%]">
            <div className="w-full flex justify-center">
                <h1 className="">Proyectos mostrados</h1>
            </div>
            <Carousel
                showArrows={true}
                showThumbs={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                centerSlidePercentage={30}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={true}
                showIndicators={false}


            >
                <div>
                    <img src="/assets/images/logo.png" width={20} height={20} />
                </div>
                <div>
                    <img src="/assets/images/logo.png" width={20} height={20} />¿
                </div>
                <div>
                    <img src="/assets/images/logo.png" width={20} height={20} />¿
                </div>
                <div>
                    <img src="/assets/images/logo.png" width={20} height={20} />
                </div>
            </Carousel>
        </div>
    )
}


export default ShowedProjects