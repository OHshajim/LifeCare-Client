import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";

const Analytics = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCamps/${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
    console.log(camps);
    const paidCamp = camps.filter(camp => camp.paymentStatus === 'paid')
    const totalFees = paidCamp.reduce((total, item) => total + parseInt(item.campFees), 0)
    return (
        <div >
            <SectionTitle heading="Analytics" subHeading="See Your Activities" />
            <div className="flex w-full">
                <div className="mx-auto container py-12">
                    <div
                        role="list"
                        aria-label="Our stats."
                        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8"
                    >
                        <div
                            role="listitem"
                            className="flex justify-center w-full lg:border-r border-gray-300 py-6"
                        >


                            <div className="text-gray-800  pl-12 w-1/2">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">{camps.length}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide"> Total Registrations</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full lg:border-r border-gray-300 py-6"
                        >


                            <div className="text-gray-800  w-1/2 pl-12">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">${totalFees}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide">Total Paid Fees</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full  py-6"
                        >


                            <div className="text-gray-800  w-1/2 ">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">{paidCamp.length}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide">Paid Registrations</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            {/* chart */}
            <div>

            </div>
        </div>
    );
};

export default Analytics;