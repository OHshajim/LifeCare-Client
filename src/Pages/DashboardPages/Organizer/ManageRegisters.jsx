import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageRegisters = () => {
    const axiosSecure = useAxiosSecure();
    const { data: registers = [], refetch } = useQuery({
        queryKey: ['registers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/registers')
            return res.data;
        }
    })
    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/registeredCamp/${id}`)
        console.log(res);
        if (res.data.deletedCount) {
            Swal.fire({
                title: 'Successfully Deleted',
                text: 'Registration is successfully deleted !!!',
                icon: "success"
            });
            refetch()
        }
    }
    return (
        <div>
            <div>
                <SectionTitle subHeading="manage registers camps " heading="manage registers camps" />
                <div>
                    <section className="container px-4 mx-auto">
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 Total camps"> Total Camps</h2>
                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">{registers.length} Camps</span>
                        </div>

                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200 ">
                                            <thead className="bg-gray-50 ">
                                                <tr>
                                                    <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Camp Name
                                                    </th>

                                                    <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Camp Fees
                                                    </th>

                                                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Participant Name
                                                    </th>

                                                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Payment Status
                                                    </th>
                                                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Confirmation Status
                                                    </th>
                                                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                        Cancellation
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200  ">
                                                {
                                                    registers.map(register => <tr key={register._id}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {register.campName}
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            ${register.campFees}
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {register.participantName}
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {
                                                                register.paymentStatus ?

                                                                    register.paymentStatus
                                                                    :
                                                                    'Unpaid'

                                                            }
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {
                                                                register.paymentStatus ?

                                                                    "Confirmed"
                                                                    :
                                                                    'Pending'
                                                            }
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {
                                                                register.paymentStatus ?
                                                                    <Button disabled>
                                                                        Cancel
                                                                    </Button>
                                                                    : <Button onClick={() => handleDelete(register._id)}>
                                                                        Cancel
                                                                    </Button>
                                                            }
                                                        </td>

                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

            </div>
        </div>
    );
};

export default ManageRegisters;