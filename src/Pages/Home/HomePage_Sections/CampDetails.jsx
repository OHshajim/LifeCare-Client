import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAddLocation } from "react-icons/md";
import { Button, Card, CardBody, Dialog, Input, Spinner, Typography, } from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";

import Select from 'react-select'

const CampDetails = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { id } = useParams()
    const [gender, setGender] = useState('')
    const { data: campDetails = {}, isPending: loading } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp/${id}`);
            return res.data;
        }
    })
    const { Camp_Fees, Camp_Name, Date_Time, Description, Healthcare_Professional_Name, Image, Location, Participant_Count
    } = campDetails;

    // form
    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Custom', label: 'Custom' }
    ]
    const handleSelect = (element) => {
        setGender(element.value)
    }
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const registrationData = { ...data, gender: gender }
        console.log(registrationData);
    }


    // for modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
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
                        <Button onClick={handleOpen}>Join Camp</Button>
                    </div>
                </div>


            </div>
            {/* modal */}
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[50rem]" onSubmit={handleSubmit(onSubmit)}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Registration For Campaign
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Enter your email and password to Sign In.
                        </Typography>

                        <form className="space-y-3 md:space-y-5" >
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Camp Name
                                    </Typography>
                                    <Input className="w-full fixedInfo " value={Camp_Name} 
                                        {...register("Camp_Name", { required: true })} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Camp Fees
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Camp_Fees}
                                        {...register("Camp_Fees", { required: true })} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Healthcare Professional Name
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Healthcare_Professional_Name}
                                        {...register("Healthcare_Professional_Name", { required: true })} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Location
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Location}
                                        {...register("Location", { required: true })} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full ">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Name
                                    </Typography>
                                    <Input {...register("ParticipantName", { required: true })}
                                        className="w-full fixedInfo" value={user?.displayName} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Email
                                    </Typography>
                                    <Input {...register("ParticipantEmail", { required: true })}
                                        className="w-full fixedInfo" value={user?.email} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Age
                                    </Typography>
                                    <Input {...register("Age", { required: true })} required
                                        type="number" min={1} max={150} className="w-full" label="Enter Your Age" />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Gender
                                    </Typography>
                                    <Select options={options} onChange={handleSelect} required className="select" />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Phone Number
                                    </Typography>
                                    <Input {...register("PhoneNumber", { required: true })} 
                                        type="number" maxLength={12} className="w-full " label="Enter Your Number" />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Emergency Contact
                                    </Typography>
                                    <Input {...register("EmergencyContact", { required: true })}
                                        type="number" maxLength={12} className="w-full" label="Enter Emergency Contact" />
                                </div>

                            </div>

                            <Input type="submit" variant="outlined" value='Registration'className="fixedInfo" />
                        </form>
                    </CardBody>

                </Card>
            </Dialog>
        </div>
    );
};

export default CampDetails;