import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAddLocation } from "react-icons/md";
import { Button, Spinner } from "@material-tailwind/react";

const CampDetails = () => {
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    const { data: campDetails = {}, isPending:loading } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp/${id}`);
            return res.data;
        }
    })
    console.log(campDetails);
    const { Camp_Fees, Camp_Name, Date_Time, Description, Healthcare_Professional_Name, Image, Location, Participant_Count
    } = campDetails;
    return (
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10 py-20">
            {/* loader */}
            <div className="flex justify-center ">
                {
                    loading && <Spinner className="h-10 w-10" />
                }
            </div>


            <div className="flex flex-col w-full space-y-6  lg:flex-row lg:items-center gap-10">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <img className="object-cover w-full h-full  rounded-md" src={Image} alt={Camp_Name} />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{Camp_Name}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{Description}</p>
                    <div className="-px-3 text-base space-y-3 mt-5">
                        <div className="flex justify-between items-center ">

                            <p className="flex items-center gap-1 "> Healthcare Professional:
                                <FaUserDoctor className="text-lg" /> {Healthcare_Professional_Name}</p>

                            <p className="flex items-center gap-1 ">Participants: <HiUserGroup className="text-lg" />{Participant_Count}</p>
                        </div>

                        <div className="flex justify-between items-center ">

                            <p className="flex items-center gap-1 "> Date:<BsCalendarDateFill className="text-base" />
                                {Date_Time}</p>
                            <p className="flex items-center gap-1 ">Location: <MdAddLocation className="text-xl" />{Location}</p>
                        </div>
                        <div className="flex justify-between items-center ">
                            <p className="font-bold">Camp Fees: ${Camp_Fees}</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-end ">
                        <Button >Join Camp</Button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CampDetails;