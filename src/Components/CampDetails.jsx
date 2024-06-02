import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAddLocation } from "react-icons/md";
import { Button, Card, CardBody, Dialog, Input, Spinner, Typography, } from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";

import Select from 'react-select'
import Swal from "sweetalert2";
import { IoMdArrowRoundBack } from "react-icons/io";

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
    const { _id, campFees, campName, date, description, healthcareProfessionalName, image, location, participantCount } = campDetails;

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
            <div>
                <Link to={'/'}>
                    <Button className=" flex items-center gap-2  mb-5"><IoMdArrowRoundBack />
                        Back</Button>
                </Link>
            </div>
            {/* loader */}
            <div className="flex justify-center ">
                {
                    loading && <Spinner className="h-10 w-10" />
                }
            </div>

            <div className="flex flex-col w-full space-y-6  lg:flex-row lg:items-center gap-10">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <img className="object-cover w-full h-full  rounded-md" src={image} alt={campName} />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{campName}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
                    <div className="-px-3 text-base space-y-1 lg:space-y-3  mt-5">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-1">

                            <p className="flex items-center gap-1 "> Healthcare Professional:
                                <FaUserDoctor className="text-lg" /> {healthcareProfessionalName}</p>

                            <p className="flex items-center gap-1 ">Participants: <HiUserGroup className="text-lg" />{participantCount}</p>
                        </div>

                        <div className="flex justify-between lg:items-center flex-col lg:flex-row space-y-1">

                            <p className="flex items-center gap-1 "> Date:<BsCalendarDateFill className="text-base" />
                                {date}</p>
                            <p className="flex items-center gap-1 ">Location: <MdAddLocation className="text-xl" />{Location}</p>
                        </div>
                        <div className="flex justify-between items-center ">
                            <p className="font-bold">Camp Fees: ${campFees}</p>
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
                                    <Input className="w-full fixedInfo " value={campName}
                                        {...register("campName")} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Camp Fees
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={campFees}
                                        {...register("campFees")} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Healthcare Professional Name
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={healthcareProfessionalName}
                                        {...register("healthcareProfessionalName")} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Location
                                    </Typography>
                                    <Input className="w-full fixedInfo" value={location}
                                        {...register("location")} />
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full ">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Name
                                    </Typography>
                                    <Input {...register("participantName")}
                                        className="w-full fixedInfo" value={user?.displayName} />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Participant Email
                                    </Typography>
                                    <Input {...register("participantEmail")}
                                        className="w-full fixedInfo" value={user?.email} />
                                </div>
                            </div>
                            <div className="flex  flex-col md:flex-row gap-5">
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Age
                                    </Typography>
                                    <Input {...register("age", { required: true })}
                                        type="number" min={1} max={150} className="w-full" label="Enter Your Age" />
                                    {errors.age && <span className="text-red-600 font-semibold">Age is required***</span>}
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
                                    <Input {...register("phoneNumber", { required: true })}
                                        type="number" maxLength={12} className="w-full " label="Enter Your Number" />
                                    {errors.phoneNumber && <span className="text-red-600 font-semibold">Phone Number is required***</span>}
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Emergency Contact
                                    </Typography>
                                    <Input {...register("emergencyContact", { required: true })}
                                        type="number" maxLength={12} className="w-full" label="Enter Emergency Contact" />
                                    {errors.emergencyContact && <span className="text-red-600 font-semibold">Emergency Contact is required***</span>}
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