
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Loader from '../../../Components/Loader/Loader';
const Testimonial = () => {
    const axiosPublic = useAxiosPublic()
    const { data: feedbacks = [], isPending: loading } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedbacks')
            return res.data;
        }
    })

    return (
        <div>
            <div className=' flex justify-center items-center w-full'>
                <img src="https://i.ibb.co/ftJY636/charity-1807427.png" alt="" className=" max-w-32 sm:max-w-52 " />
            </div>

            {
                loading && <div className="flex justify-center my-10">
                    {
                        loading && <Loader />
                    }
                </div>
            }

            <Swiper
                slidesPerView={1.7}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                    <div className='flex flex-col items-center pb-10'>
                        <div className="w-full  px-3 sm:px-10">
                            <div

                                className="flex md:items-center justify-between  py-8 flex-col md:flex-row"
                            >
                                <div className="mx-0 flex items-center gap-4 ">
                                    <img
                                        src={feedback.photoURL}
                                        alt={feedback.name}
                                        className='w-12 h-12 md:h-16  md:w-16 rounded-full p-1 border-2 border-blue-600'
                                    />
                                    <div>
                                        <h4 className='font-bold'>
                                            {feedback.name}
                                        </h4>
                                        <p className='text-xs sm:text-sm font-bold'>{feedback.email}</p>
                                    </div>

                                </div>
                                <div className="flex items-center mt-2">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={feedback.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <hr />
                            <p className='text-sm sm:text-base my-2'>{feedback.comment}</p>
                        </div>
                    </div>
                </SwiperSlide>)

                }

            </Swiper>
        </div>
    );
};

export default Testimonial;