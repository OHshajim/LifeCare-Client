import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RegisteredCamps = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCamps/${user?.email}`)
            return res.data;
        }
    })
    console.log(camps);
    return (
        <div>

        </div>
    );
};

export default RegisteredCamps;