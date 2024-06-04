import { Parallax } from "react-parallax";

const CampBanner = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -60, max: 50 }}
                bgImage='https://i.ibb.co/GMtHs9P/group-happy-diverse-volunteers.jpg'
                bgImageAlt="cover photo"
                strength={100}
            >
                <div className=" px-10 sm:px-20 sm:py-20 py-10 p-28">
                    <div
                     className=" text-center w-full text-white  bg-[#00000071] space-y-2 max-w-screen-2xl mx-auto
                     xl:py-32 md:py-28 sm:py-20 py-16
                     ">
                        <h3 className='text-2xl sm:text-3xl lg:text-5xl font-semibold'>Available Camps</h3>
                        <p className='text-base font-semibold '>lest Join</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default CampBanner;