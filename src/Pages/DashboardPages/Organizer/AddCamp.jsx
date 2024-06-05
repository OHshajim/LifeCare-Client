import SectionTitle from "../../../Shared/SectionTitle";

const AddCamp = () => {

    return (
        <div>
            <SectionTitle subHeading="Adding " heading="Add a new Camp" />
            <form>
                <div className="space-y-4" >

                    <div className='flex w-full gap-5'>
                        <div className='w-1/2'>
                            <label className="font-semibold" >Camp Name</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                        <div className='w-1/2'>
                            <label className="font-semibold " >Healthcare Professional Name</label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className='flex w-full gap-5'>
                        <div>
                            <label className="font-semibold " >Camp Fees</label>
                            <input type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="font-semibold" >Location</label>
                            <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className='flex w-full gap-5'>
                        <div>
                            <label className="font-semibold" >participant count</label>
                            <input type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="font-semibold " >Date</label>
                            <input type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold" >Description</label>
                        <textarea  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="font-semibold " >Password Confirmation</label> <br />
                        <input type='file' className='mt-2' />
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