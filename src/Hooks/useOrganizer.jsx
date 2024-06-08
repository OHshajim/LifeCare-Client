import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrganizer = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isOrganizer, isPending: isOrganizerLoading } = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/organizer/${user?.email}`)
            console.log(res.data?.organizer, user.email);
            return res.data?.organizer;
        }
    })
    return [isOrganizer, isOrganizerLoading]
};

export default useOrganizer;