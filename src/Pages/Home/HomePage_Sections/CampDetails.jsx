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
import Swal from "sweetalert2";

const CampDetails = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { id } = useParams()
    const [gender, setGender] = useState('')
    const [error, setError] = useState(false)
    const { data: campDetails = {}, isPending: loading, refetch } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp/${id}`);
            return res.data;
        }
    })
    const { _id, Camp_Fees, Camp_Name, Date_Time, Description, Healthcare_Professional_Name, Image, Location, Participant_Count
    } = campDetails;

    // form
    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Custom', label: 'Custom' }
    ]
    const handleSelect = (element) => {
        setGender(element.value)
        setError(false)
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        if (!gender) {
            return setError(true);
        }
        else {
            setError(false)
        }
        const registrationData = { ...data, gender: gender, campId: _id }
        console.log(registrationData);


        await axiosPublic.post('/registeredCamp', registrationData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Registered',
                        text: 'Congratulation, Welcome to the camp',
                        icon: "success"
                    });
                    refetch()
                    reset()
                    handleOpen()
                }
            })
            .catch(error => {
                console.log(error);
            })
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
                                        {...register("Camp_Name")} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Camp Fees
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Camp_Fees}
                                        {...register("Camp_Fees")} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Healthcare Professional Name
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Healthcare_Professional_Name}
                                        {...register("Healthcare_Professional_Name")} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Location
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={Location}
                                        {...register("Location")} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full ">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Name
                                    </Typography>
                                    <Input {...register("ParticipantName")}
                                        className="w-full fixedInfo" value={user?.displayName} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Email
                                    </Typography>
                                    <Input {...register("ParticipantEmail")}
                                        className="w-full fixedInfo" value={user?.email} />
                                </div>
                            </div>
                            <div className="flex  flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Age
                                    </Typography>
                                    <Input {...register("Age", { required: true })}
                                        type="number" min={1} max={150} className="w-full" label="Enter Your Age" />
                                    {errors.Age && <span className="text-red-600 font-semibold">Age is required***</span>}
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Gender
                                    </Typography>
                                    <Select options={options} onChange={handleSelect} className="select" />
                                    {error && <span className="text-red-600 font-semibold">Age is required***</span>}
                                </div>
                            </div>
                            <div className="flex  flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Phone Number
                                    </Typography>
                                    <Input {...register("PhoneNumber", { required: true })}
                                        type="number" maxLength={12} className="w-full " label="Enter Your Number" />
                                    {errors.PhoneNumber && <span className="text-red-600 font-semibold">Phone Number is required***</span>}
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Emergency Contact
                                    </Typography>
                                    <Input {...register("EmergencyContact", { required: true })}
                                        type="number" maxLength={12} className="w-full" label="Enter Emergency Contact" />
                                    {errors.EmergencyContact && <span className="text-red-600 font-semibold">Emergency Contact is required***</span>}
                                </div>

                            </div>

                            <Input type="submit" variant="outlined" value='Registration' className="fixedInfo" />
                        </form>
                    </CardBody>

                </Card>
            </Dialog>
        </div>
    );
};

export default CampDetails;