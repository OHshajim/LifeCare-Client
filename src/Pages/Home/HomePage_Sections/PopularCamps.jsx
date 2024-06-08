import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import CampCards from "../../../Components/CampCards";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";

const PopularCamps = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camps = [], isPending: loading, } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/popularCamps')
            return res.data;
        }
    })
    // console.log(camps);
    return (
        <div>

            {/* loader */}
            <div className="flex justify-center ">
                {
                    loading && <Loader />
                }
            </div>

            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                 camps.map(camp => <CampCards key={camp._id} camp={camp} />)
                }
            </div>
            <div className="my-10 flex justify-center">
                <Link to='/availableCamps'><Button>See All Camps</Button></Link>
            </div>
        </div>
    );
};

export default PopularCamps;