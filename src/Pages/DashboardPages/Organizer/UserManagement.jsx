import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCount from "../../../Hooks/useCount";
import Loader from "../../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const UserManagement = () => {
    const [search, setSearch] = useState('')
    const axiosSecure = useAxiosSecure();
    const [currentPage, setPage] = useState(0)
    const { count } = useCount('/AllUsers')
    const itemPerPage = 10;
    const numberOfPage = Math.ceil(count.length / itemPerPage);
    const pages = [...Array(numberOfPage).keys()];

    const { data: users = [], refetch ,isPending} = useQuery({
        queryKey: ['users', search, currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}&page=${currentPage}`)
            return res.data;
        }
    })
    // console.log(users);
    const handleUpdate = async (id) => {
        const res = await axiosSecure.patch(`/update-user/${id}`)
        // console.log(res);
        if (res.data) {
            Swal.fire({
                title: 'Successfully Deleted',
                text: 'Participant is successfully deleted !!!',
                icon: "success"
            });
            refetch()
        }
    }
    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/delete-user/${id}`)
        console.log(res);
        if (res.data.deletedCount) {
            Swal.fire({
                title: 'Successfully Deleted',
                text: 'Participant is successfully deleted !!!',
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
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>LifeCare || User Management</title>
            </Helmet>
            <SectionTitle subHeading="All users " heading="manage users" />
            <div>
                <section className="container px-4 mx-auto">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 Total users"> Total users</h2>
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">{count.length} users</span>
                    </div>
                    <div className="my-5 w-full max-w-2xl mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-7">
                        <form className="flex " onSubmit={handleSubmit(handleSearch)}>
                            <input {...register('search')} type="text" placeholder="Search" className="flex-1 h-10 px-4 max-w-xl pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />

                            <Button type="submit" className="h-10 px-3 sm:px-5 py-2 m-1 text-white transition-colors duration-300 transform bg-[#40b6e9] rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 c">
                                Search
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Name
                                                </th>

                                                <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Email
                                                </th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Role
                                                </th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Edit</th>

                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Delete
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
                                                users.map(user => <tr key={user._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {user.role ? user.role : 'Participant'}
                                                    </td>
                                                    <td className="px-10 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {user.role ? "done" :
                                                            <button onClick={() => handleUpdate(user._id)} className="text-gray-500 transition-colors duration-200  hover:text-blue-400 focus:outline-none ">

                                                                Make Organizer
                                                            </button>
                                                        }
                                                    </td>
                                                    <td className="px-10 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <button onClick={() => handleDelete(user._id)} className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none text-xl">
                                                            <FiDelete />
                                                        </button>
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

export default UserManagement;