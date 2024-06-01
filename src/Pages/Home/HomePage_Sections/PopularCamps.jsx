import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const PopularCamps = () => {
    const axiosPublic = useAxiosPublic()
    const { data: camps = [], isPending: loading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps')
            return res;
        }
    })
    console.log(camps);
    return (
        <div>

        </div>
    );
};

export default PopularCamps;