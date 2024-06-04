import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./HomePage_Sections/Banner";
import PopularCamps from "./HomePage_Sections/PopularCamps";
import Success from "./HomePage_Sections/Success";
import Testimonial from "./HomePage_Sections/Testimonial";

const Home = () => {

    return (
        <div>
            <Banner />
            <SectionTitle subHeading={'Lets join'} heading={" popular medical camps"} />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <PopularCamps />
            </div>

            <SectionTitle subHeading={'Success && Care'} heading={"Care & Comfort Services"} />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <Success />
            </div>
            <SectionTitle subHeading={'Testimonials'} heading={"What Our Clients Say"} />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;