import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle";

const AddCamp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm() 
     const onSubmit = (data) => console.log(data)

    return (
        <div className="my-20">
            <SectionTitle subHeading="Adding " heading="Add a new Camp" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4" >

                    <div className='md:flex w-full gap-5 space-y-4 md:space-y-0 '>
                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold" >Camp Name</label>
                            <input {...register("campName", { required: true })}
                             type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                              {errors.campName && <span  className="text-red-600 font-semibold text-sm">Camp Name is required***</span>}
                        </div>
                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold " >Healthcare Professional Name</label>
                            <input {...register("professionalName", { required: true })}
                              type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                              {errors.professionalName && 
                              <span className="text-red-600 font-semibold text-sm">Healthcare Professional Name is required***</span>}
                        </div>
                    </div>

                    <div className='md:flex w-full gap-5 space-y-4 md:space-y-0'>
                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold " >Camp Fees</label>
                            <input {...register("campFees", { required: true })}
                             type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                             {errors.campFees && <span className="text-red-600 font-semibold text-sm">Camp Fees is required***</span>}
                        </div>

                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold" >Location</label>
                            <input {...register("location", { required: true })}
                             type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                             {errors.location && <span className="text-red-600 font-semibold text-sm">location is required***</span>}
                        </div>
                    </div>

                    <div className='md:flex w-full gap-5 space-y-4 md:space-y-0'>
                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold" >participant count</label>
                            <input {...register("participantCount", { required: true })}
                             type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                             {errors.participantCount && <span className="text-red-600 font-semibold text-sm">participant count is required***</span>}
                        </div>
                        <div className='w-full md:w-1/2'>
                            <label className="font-semibold " >Date</label>
                            <input {...register("date", { required: true })}
                             type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                             {errors.date && <span className="text-red-600 font-semibold text-sm">Date is required***</span>}
                        </div>
                    </div>
                    <div >
                        <label className="font-semibold" >Description</label>
                        <textarea {...register("description", { required: true })}
                         className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                         {errors.description && <span className="text-red-600 font-semibold text-sm">Description is required***</span>}
                    </div>

                    <div >
                        <label className="font-semibold " >Camp Photo</label> <br />
                        <input {...register("photo", { required: true })}
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
    );
};

export default AddCamp;