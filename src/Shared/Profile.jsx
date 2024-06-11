import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Button, Card, CardBody, Dialog, Input, Typography } from "@material-tailwind/react";
import { LuPenSquare } from "react-icons/lu";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Profile = () => {
    const { user: currentUser, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: user = {}, refetch } = useQuery({
        queryKey: ['user', currentUser?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${currentUser?.email}`)
            // console.log(res);
            return res.data;
        }
    })
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onSubmit = async (data) => {
        console.log(data);
        await axiosSecure.patch('/user', data)
            .then(res => {
                console.log(res.data);
                refetch()
                if (res.data) {
                    Swal.fire({
                        title: 'Successfully updated',
                        text: 'Your Profile is successfully updated.',
                        icon: "success"
                    });
                    handleOpen();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section >
            <div className="max-w-6xl my-20  mx-auto">
                <SectionTitle heading="Profile" subHeading="See your self" />
                <main className="relative z-20 w-full mt-8 flex items-center flex-col ">
                    <img className=" rounded-full  shadow-md mb-10 h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem]  " src={user?.photoURL} alt={user?.name} />
                    <div className="w-full p-5  sm:p-10 bg-[#2e8fbc]  rounded-2xl  ">

                        <div className=" flex sm:flex-row flex-col justify-between w-full  space-y-2">
                            <div>
                                <p className="text-blue-100 uppercase">{user?.role ||'Participant'}</p>
                                <div className="flex mx-auto mb-6">
                                    <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
                                    <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
                                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                                </div>
                                <p className="text-xl font-medium tracking-tight text-white">{user?.name}</p>
                                <p className="text-white mt-3">Contact Details:</p>
                                <p className="text-blue-100 ">{user?.email}</p>
                                <p className="text-blue-100 ">{user?.number ||"N/A"}</p>

                            </div>

                            <div className="w-full flex justify-end items-end ">
                                <Button className="p-4 duration-300 bg-transparent rounded-full  hover:bg-blue-400 " onClick={handleOpen}>
                                    <LuPenSquare className="text-base" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    className="overflow-y-auto "
                    style={{
                        maxHeight: '80vh'
                    }}

                >
                    <Card className="mx-auto w-full  md:p-10 " onSubmit={handleSubmit(onSubmit)}>
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="light-blue">
                                Update Your profile
                            </Typography>

                            <form className="space-y-3 md:space-y-5 " >



                                <div className=" w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Name
                                    </Typography>
                                    <Input type="text"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("name", { required: true })} defaultValue={user?.name}
                                        className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                    {errors.name && <span className="text-red-600 font-semibold">Name is required***</span>}
                                </div>
                                <div className=" w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Email
                                    </Typography>
                                    <Input type="email"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("email", { required: true })} value={user?.email}
                                        className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                    {errors.email && <span className="text-red-600 font-semibold">email is required***</span>}
                                </div>
                                <div className=" w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Contact Number
                                    </Typography>
                                    <Input type="number"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("number", { required: true })} defaultValue={user?.number}
                                        className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                    {errors.number && <span className="text-red-600 font-semibold">number is required***</span>}
                                </div>
                                <div className=" w-full">
                                    <Typography className="mb-2" variant="h6">
                                        Image URL
                                    </Typography>
                                    <Input type="text"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("photoURL", { required: true })} defaultValue={user?.photoURL}
                                        className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                    {errors.photoURL && <span className="text-red-600 font-semibold">photoURL is required***</span>}
                                </div>

                                <Input
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    type="submit" variant="outlined" value='Registration' className=" !border-t-blue-gray-200 focus:!border-t-gray-900" />
                            </form>
                        </CardBody>
                    </Card>
                </Dialog>
            </div>
        </section>
    );
};

export default Profile;