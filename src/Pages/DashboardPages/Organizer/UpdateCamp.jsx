import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UpdateCamp = () => {
    const { id } = useParams()
    console.log(id);
    const axiosPublic = useAxiosPublic()
    // const { name, category, price, recipe, _id } = item;
    const { data: camp = {} } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp/${id}`)
            return res.data;
        }
    })
    console.log(camp);
    const { campFees, campName, date, description, healthcareProfessionalName, image, location, participantCount } = camp;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        // const res = await axiosSecure.patch(`/update-camp/${id}`)
        // if (res.data.deletedCount) {
        //     Swal.fire({
        //         title: 'Successfully Deleted',
        //         text: 'Camp is successfully deleted !!!',
        //         icon: "success"
        //     });
        //     refetch()
        // }
    }
    return (
        <div>
            <h3 className="text-3xl uppercase font-bold text-center my-12">Update Item</h3>
            <div className="mx-20 p-10 mb-20 border border-[#828282]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4" >
                        <div className='md:flex w-full gap-5 space-y-4 md:space-y-0 '>
                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold" >Camp Name</label>
                                <input {...register("campName", { required: true })} defaultValue={campName}
                                    type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.campName && <span className="text-red-600 font-semibold text-sm">Camp Name is required***</span>}
                            </div>
                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold " >Healthcare Professional Name</label>
                                <input {...register("professionalName", { required: true })} defaultValue={healthcareProfessionalName}
                                    type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.professionalName &&
                                    <span className="text-red-600 font-semibold text-sm">Healthcare Professional Name is required***</span>}
                            </div>
                        </div>

                        <div className='md:flex w-full gap-5 space-y-4 md:space-y-0'>
                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold " >Camp Fees</label>
                                <input {...register("campFees", { required: true })} defaultValue={campFees}
                                    type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.campFees && <span className="text-red-600 font-semibold text-sm">Camp Fees is required***</span>}
                            </div>

                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold" >Location</label>
                                <input {...register("location", { required: true })} defaultValue={location}
                                    type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.location && <span className="text-red-600 font-semibold text-sm">location is required***</span>}
                            </div>
                        </div>

                        <div className='md:flex w-full gap-5 space-y-4 md:space-y-0'>
                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold" >participant count</label>
                                <input {...register("participantCount", { required: true })} defaultValue={participantCount}
                                    type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.participantCount && <span className="text-red-600 font-semibold text-sm">participant count is required***</span>}
                            </div>
                            <div className='w-full md:w-1/2'>
                                <label className="font-semibold " >Date</label>
                                <input {...register("date", { required: true })} defaultValue={date}
                                    type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                {errors.date && <span className="text-red-600 font-semibold text-sm">Date is required***</span>}
                            </div>
                        </div>
                        <div >
                            <label className="font-semibold" >Description</label>
                            <textarea {...register("description", { required: true })} defaultValue={description}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            {errors.description && <span className="text-red-600 font-semibold text-sm">Description is required***</span>}
                        </div>

                        <div >
                            <label className="font-semibold " >Camp Photo</label> <br />
                            <input {...register("photo", { required: true })} defaultValue={image}
                                type='file' className='mt-2' />
                            {errors.photo &&
                                <span className="text-red-600 font-semibold text-sm">Camp Photo is required***</span>}
                        </div>
                    </div>

                    <div className="flex justify-end mt-6" >
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Camp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;