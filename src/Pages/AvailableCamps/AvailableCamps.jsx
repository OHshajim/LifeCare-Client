import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CampBanner from "./AvailableCampSections/CampBanner";
import CampCards from "../../Components/CampCards";
import SectionTitle from "../../Shared/SectionTitle";
import { Button, Input } from "@material-tailwind/react";
const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camps = [], isPending: loading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps')
            return res.data;
        }
    })
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        const search = e.target.search.value
        const res = await axiosPublic.get(`/camps?search=${search}`)
        return res.data;
    }
    return (
        <div>
            <CampBanner />
            <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
                <SectionTitle subHeading={'What Our Users Say'} heading={"Testimonials"} />

                <form onSubmit={handleSearch} className="w-full flex justify-center my-10 px-5">
                    <div className="relative flex w-full max-w-[44rem]">
                        <Input
                            type="text"
                            label="Search"
                            className="pr-20"
                            name="search"
                        />
                        <Button
                            type="submit"
                            size="sm"
                            color="blue"
                            className="!absolute right-1 top-1 rounded"
                        >
                            Search
                        </Button>
                    </div>
                </form>

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