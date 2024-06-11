import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCount = (url) => {
    const axiosSecure = useAxiosSecure()
    const { data: count = [] } = useQuery({
        queryKey: ['count',url],
        queryFn: async () => {
            const res = await axiosSecure.get(url);
            console.log(res);
            return res.data;
        }
    })
    return {count} ;
};

export default useCount;