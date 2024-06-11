import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const SectionTitle = ({ subHeading, heading }) => {
    AOS.init();
    return (
        <div className="flex justify-center items-center flex-col mt-20 mb-10" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top">
            <p className="text-base font-bold bg-[#edfaff] text-[#65bfe5] px-2 py-1 mb-2">{subHeading}</p>
            <h3 className="md:text-3xl sm:text-2xl text-xl  font-bold uppercase">{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
};
export default SectionTitle;