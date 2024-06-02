import { Parallax } from "react-parallax";

const CampBanner = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -90, max: 70 }}
                bgImage='https://i.ibb.co/GMtHs9P/group-happy-diverse-volunteers.jpg'
                bgImageAlt="cover photo"
                strength={300}
            >
                <div className=" max-h-[650px] xl:p-28">
                    <div className=" text-center xl:py-24 xl:px-32 w-full text-white  bg-[#00000071] space-y-2 max-w-screen-2xl mx-auto">
                        <h3 className='text-5xl'>Our Camp</h3>
                        <p className='text-base font-semibold'>lest Join</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default CampBanner;