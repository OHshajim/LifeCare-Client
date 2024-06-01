import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3600} swipeable={true} emulateTouch transitionTime={1500} stopOnHover={false}>
                <div>
                    <img src="https://i.ibb.co/rp9BLm4/hero-img-2-1.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/rp9BLm4/hero-img-2-1.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/rp9BLm4/hero-img-2-1.jpg" />
                    <p className="legend"></p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;