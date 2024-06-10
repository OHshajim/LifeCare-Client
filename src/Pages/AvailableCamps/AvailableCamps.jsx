import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CampBanner from "./AvailableCampSections/CampBanner";
import CampCards from "../../Components/CampCards";
import SectionTitle from "../../Shared/SectionTitle";
import { Button, Option, Select, } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Components/Loader/Loader";
// import Select from 'react-select'
// import Select from 'react-select'
const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [isThree, setThree] = useState(true)
    const { data: camps = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camps', search, sort],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camps?search=${search}&&sortBy=${sort}`)
            console.log(res);
            return res.data;
        }
    })
    const {
        register,
        handleSubmit,
    } = useForm()

    const handleSort = (value) => {
        console.log(value);
        setSort(value)
        refetch()
    }
    const handleSearch = async (data) => {
        setSearch(data.search);
        if (search === '') {
            refetch()
            return;
        }
        console.log(data);
        return await refetch();
    }
    return (
        <div>
            <CampBanner />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <SectionTitle subHeading={'join with us'} heading={"Available Camps"} />

                {/* search part */}
                <div className="w-full max-w-2xl mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-7">
                    <form className="flex " onSubmit={handleSubmit(handleSearch)}>
                        <input {...register('search')} type="text" placeholder="Search" className="flex-1 h-10 px-4 max-w-xl pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />

                        <Button type="submit" className="h-10 px-3 sm:px-5 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 c">
                            Search
                        </Button>
                    </form>
                </div>
                <div className="xl:flex xl:justify-between ">
                    <div className="xl:block hidden">
                        <Button
                            onClick={() => setThree(!isThree)}>{isThree ? 'Make Two' : 'Make Three'}</Button>
                    </div>
                           

                    {/* sort */}
                    <div className="flex justify-center mb-7 ">
                        <div className=" w-40">
                            <Select  onChange={handleSort} className=" " label="Sort by" >
                                <Option value="">Default</Option>
                                <Option value="campName">Camp Name</Option>
                                <Option value="campFees">Camp Fees</Option>
                                <Option value="date">Date</Option>
                                <Option value="participantCount">ParticipantCount</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                {/* loading */}
                {
                    loading && <div className="flex justify-center ">
                        {
                            loading && <Loader />
                        }
                    </div>
                }
                {/* error */}
                {
                    !loading && (camps.length == 0) && <p className="text-red-700 my-20"></p>
                }

                {/* cart */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${isThree ? 'lg:grid-cols-3' : ''}`}>
                    {
                        camps.map(camp => <CampCards key={camp._id} camp={camp} />)
                    }
                </div>
            </div >
        </div >
    );
};

export default AvailableCamps;