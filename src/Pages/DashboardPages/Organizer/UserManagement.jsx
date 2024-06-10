import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
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

return (
    <div>
        <SectionTitle subHeading="manage users " heading="manage users" />
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 Total users"> Total users</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">{users.length} users</span>
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

export default UserManagement;