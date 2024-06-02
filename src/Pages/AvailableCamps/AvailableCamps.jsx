import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CampBanner from "./AvailableCampSections/CampBanner";
import CampCards from "../../Components/CampCards";
import SectionTitle from "../../Shared/SectionTitle";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('')
    const { data: camps = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camps?search=${search}`)
            console.log(res);
            return res.data;
        }
    })
    const {
        register,
        handleSubmit,
    } = useForm()

    const handleSearch = async (data) => {
        setSearch(data.search);
        if(loading){
            return <p>load</p>
        }
        if (search === ''){
            refetch()
            return;
        }
        console.log(data);
        await refetch()
    }
    return (
        <div>
            <CampBanner />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <SectionTitle subHeading={'What Our Users Say'} heading={"Testimonials"} />

                <div className="w-full max-w-2xl mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-10">
                    <form className="flex " onSubmit={handleSubmit(handleSearch)}>
                        <input {...register('search')} type="text" placeholder="Search" className="flex-1 h-10 px-4 max-w-xl pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />

                        <Button type="submit" className="h-10 px-3 sm:px-5 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 c">
                            Search
                        </Button>
                    </form>
                </div>
                {
                    loading && <p>Load</p>
                }
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
                    {
                        camps.map(camp => <CampCards key={camp._id} camp={camp} />)
                    }
                </div>
            </div >
        </div >
    );
};

export default AvailableCamps;