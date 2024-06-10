import PropTypes from 'prop-types';
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="flex justify-center items-center flex-col mt-20 mb-10">
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