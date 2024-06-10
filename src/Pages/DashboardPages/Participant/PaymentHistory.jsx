import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('')
    const { user } = useAuth();
    const { data: camps = [], refetch } = useQuery({
        queryKey: ['camps', user?.email, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paidCamps/${user?.email}?search=${search}`);
            console.log(res);
            return res.data;
        }
    })
    console.log(camps);
    const {
        register,
        handleSubmit,
    } = useForm()

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
        <div >
            <SectionTitle subHeading="manage camps " heading="Payment History" />
            <div>
                <section className="container px-4 mx-auto">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 Total camps"> Total Camps</h2>
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">{camps.length} Camps</span>
                    </div>
                    <div className="my-5 w-full max-w-2xl mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-7">
                        <form className="flex " onSubmit={handleSubmit(handleSearch)}>
                            <input {...register('search')} type="text" placeholder="Search" className="flex-1 h-10 px-4 max-w-xl pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />

                            <Button type="submit" className="h-10 px-3 sm:px-5 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 c">
                                Search
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Camp Name
                                                </th>

                                                <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Camp Fees
                                                </th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Payment Status
                                                </th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Confirmation Status
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200  ">
                                            {
                                                camps.map(camp => <tr key={camp._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.campName}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        ${camp.campFees}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        Paid
                                                    </td>

                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.status}
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100    -800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>
                                previous
                            </span>
                        </a>

                        <div className="items-center hidden lg:flex gap-x-3">
                            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60">1</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md -800  hover:bg-gray-100">2</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md -800  hover:bg-gray-100">3</a>
                        </div>

                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100    -800">
                            <span>
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default PaymentHistory;