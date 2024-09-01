import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./HomePage_Sections/Banner";
import PopularCamps from "./HomePage_Sections/PopularCamps";
import Success from "./HomePage_Sections/Success";
import Testimonial from "./HomePage_Sections/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./HomePage_Sections/ContactUs";
const Home = () => {
  AOS.init();

  return (
    <div>
      <Helmet>
        <title>LifeCare || Home</title>
      </Helmet>
      <Banner />
      <SectionTitle
        subHeading={"Lets join"}
        heading={" popular medical camps"}
      />
      <div
        className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        <PopularCamps />
      </div>

      <SectionTitle
        subHeading={"Success && Care"}
        heading={"Care & Comfort Services"}
      />
      <div
        className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        <Success />
      </div>
      <SectionTitle
        subHeading={"Testimonials"}
        heading={"What Our Clients Say"}
      />
      <div
        className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        <Testimonial />
      </div>
      <SectionTitle subHeading={"Contact With Us"} heading={"Get in Touch"} />
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
