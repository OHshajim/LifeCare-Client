import { FiDelete } from "react-icons/fi";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { BsPencilSquare } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useCount from "../../../Hooks/useCount";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Loader from "../../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const ManageCamp = () => {
    const [search, setSearch] = useState('')
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [currentPage, setPage] = useState(0)
    const { count } = useCount('/AllCampsOfPage')
    console.log(count);
    const itemPerPage = 10;
    const numberOfPage = Math.ceil(count.length / itemPerPage);
    const pages = [...Array(numberOfPage).keys()];

    const { data: camps = [], refetch ,isPending} = useQuery({
        queryKey: ['camps', search, currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allCamps?search=${search}&page=${currentPage}`)
            return res.data;
        }
    })

    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/delete-camp/${id}`)
        console.log(res);
        if (res.data.deletedCount) {
            Swal.fire({
                title: 'Successfully Deleted',
                text: 'Camp is successfully deleted !!!',
                icon: "success"
            });
            refetch()
        }
    }
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

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setPage(currentPage + 1)
        }
    }
    const handlePrev = () => {
        if (currentPage > 0) {
            setPage(currentPage - 1)
        }
    }
    // console.log(camps);
    return (
        <div className="my-20 ">
            <Helmet>
                <title>LifeCare || Manage Camps</title>
            </Helmet>
            <SectionTitle subHeading="manage camps " heading="manage camps" />
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
                                    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Camp Name
                                                </th>

                                                <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Date & Time
                                                </th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Location
                                                </th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Healthcare Professional</th>

                                                <th >

                                                </th>
                                            </tr>
                                        </thead>
                                         {/* loading */}
                                         {
                                            isPending && <div className="flex justify-center ">
                                                {
                                                    isPending && <Loader/>
                                                }
                                            </div>
                                        }
                                        <tbody className="bg-white divide-y divide-gray-200  ">
                                            {
                                                camps.map(camp => <tr key={camp._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.campName}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.date}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.location}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.healthcareProfessionalName}
                                                    </td>

                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <Link to={`/dashboard/update-camp/${camp._id}`}>
                                                                <button
                                                                    className="text-gray-500 transition-colors duration-200  hover:text-blue-500 focus:outline-none text-xl">
                                                                    <BsPencilSquare />
                                                                </button>
                                                            </Link>

                                                            <button onClick={() => handleDelete(camp._id)} className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none text-xl">
                                                                <FiDelete />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* pagination */}
                    <div className="flex items-center justify-between mt-6">
                        <Button onClick={handlePrev}
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2   hover:bg-blue-100/60 hover:text-blue-500">
                            <FaArrowLeftLong />

                            <span>
                                previous
                            </span>
                        </Button>

                        <div className="items-center hidden lg:flex gap-x-3">
                            {
                                pages.map(page =>
                                    <Button onClick={() => setPage(page)} key={page}
                                        className={`px-2 py-1 text-sm  rounded-md   ${currentPage == page ? "text-blue-500 bg-blue-100/60" : "text-gray-500 bg-gray-100"}`}>{page + 1}</Button>)
                            }

                        </div>

                        <Button onClick={handleNext} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-blue-100/60 hover:text-blue-500">
                            Next
                            <FaArrowRightLong />
                        </Button>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default ManageCamp;