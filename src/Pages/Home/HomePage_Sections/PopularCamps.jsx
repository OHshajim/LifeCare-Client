import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import CampCards from "../../../Components/CampCards";
import { Spinner } from "@material-tailwind/react";

const PopularCamps = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camps = [], isPending: loading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps')
            return res.data;
        }
    })
    console.log(camps);
    return (
        <div>
            
            {/* loader */}
            <div className="flex justify-center ">
                {
                    loading && <Spinner className="h-10 w-10" />
                }
            </div>

            {/* card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    camps.map(camp => <CampCards key={camp._id} camp={camp} />)
                }
            </div>
        </div>
    );
};

export default PopularCamps;