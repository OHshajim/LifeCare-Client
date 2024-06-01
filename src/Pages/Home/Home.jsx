import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./HomePage_Sections/Banner";
import PopularCamps from "./HomePage_Sections/PopularCamps";

const Home = () => {

    return (
        <div>
            <Banner />
            <SectionTitle subHeading={'Lets join'} heading={" popular medical camps"} />
            <PopularCamps />
        </div>
    );
};

export default Home;