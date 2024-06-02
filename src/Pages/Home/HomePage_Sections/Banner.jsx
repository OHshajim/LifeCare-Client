import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3600} swipeable={true} emulateTouch transitionTime={1500} stopOnHover={false}>
                <div className="lg:h-screen brightness-75">
                    <img src="https://i.ibb.co/0FcnYTJ/Web-Photo-Editor.jpg" />
                </div>
                <div className="lg:h-screen brightness-75">
                    <img src="https://i.ibb.co/GxQp810/Adobe-Stock-723525677-Preview-transformed.jpg" className="" />
                </div>
                <div className="lg:h-screen brightness-75">
                    <img src="https://i.ibb.co/ysYWpR6/De-Watermark-ai-1717207682858.png" />
                </div>
                <div className="lg:h-screen brightness-75">
                    <img src="https://i.ibb.co/pwNLJJn/Adobe-Stock-735107626-Preview-transformed.jpg" />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;