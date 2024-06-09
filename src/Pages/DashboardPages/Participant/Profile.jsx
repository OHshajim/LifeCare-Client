import { Card, CardBody, Dialog, Input, Typography } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle";
import { LuPenSquare } from "react-icons/lu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
    const { user: currentUser  } = useAuth();
    const axiosSecure = useAxiosSecure();
   
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user', currentUser?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${currentUser?.email}`)
            console.log(res);
            return res.data;
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onSubmit = async (data) => {
        console.log(data);
        await axiosSecure.patch('/user',data)
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
        <section className="bg-white dark:bg-gray-900">
            
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <SectionTitle heading="User Profile" subHeading="See your self" />
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-[#226989] -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 bg-[#226989] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={user?.photoURL} alt={user?.name} />

                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">{user?.name}</p>
                                <p className="text-blue-100 ">{user?.email}</p>
                            </div>

                            <div className="">
                                <button title="left arrow" className="p-2  duration-300  rounded-full rtl:-scale-x-100 hover:bg-blue-400" onClick={handleOpen}>
                                    <LuPenSquare />
                                </button>
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
                                        {...register("email", { required: true })} defaultValue={user?.email}
                                        className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                    {errors.email && <span className="text-red-600 font-semibold">email is required***</span>}
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