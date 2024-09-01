import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCount from "../../../Hooks/useCount";
import Loader from "../../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const RegisteredCamps = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('')
    const { user } = useAuth();
    const [currentPage, setPage] = useState(0)
    const { count } = useCount(`/userRegisteredCamps/${user?.email}`)
    const itemPerPage = 10;
    const numberOfPage = Math.ceil(count.length / itemPerPage);
    const pages = [...Array(numberOfPage).keys()];
    console.log(pages, numberOfPage, count);
    const { data: camps = [], refetch, isPending } = useQuery({
        queryKey: ['camps', user?.email, search, currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCamps/${user?.email}?search=${search}&page=${currentPage}`)
            console.log(res);
            return res.data;
        }
    })
    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/registeredCamp/${id}`)
        console.log(res);
        if (res.data.deletedCount > 0) {
            Swal.fire({
                title: 'Successfully',
                text: '...',
                icon: "success"
            });
            refetch()
        }
    }
    console.log(camps);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [rating, setRating] = useState(null)
    const onSubmit = async (data) => {
        if (rating === null) {
            handleOpen();
            return Swal.fire({
                title: 'Error',
                text: 'Please rating our service',
                icon: "error"
            });
        }

        const feedback = { comment: data.feedback, rating: rating, name: user.displayName, photo: user.photoURL, email: user.email }
        console.log(feedback);
        await axiosSecure.post('/feedback', feedback)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Post',
                        text: 'We respect your opinion.',
                        icon: "success"
                    });
                    handleOpen();
                    reset();
                    setRating(null);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        if (search === '') {
            refetch()
            return;
        }
        console.log(e.target.search.value);
        return await refetch();
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setPage(currentPage + 1)
        }
    }
    const handlePrev = () => {
        if (currentPage > 0) {
            setPage(currentPage - 1)
        }
    }
    return (
        <div className="mb-20">
            <Helmet>
                <title>LifeCare || Registered Camps</title>
            </Helmet>
            <SectionTitle subHeading="Your Registered Camps" heading="manage camps" />
            <div>
                <section className="container px-4 mx-auto">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 Total camps"> Total Camps</h2>
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">{count.length} Camps</span>
                    </div>
                    <div className="my-5 w-full max-w-2xl mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-7">
                        <form className="flex " onSubmit={handleSearch}>
                            <input name="search" type="text" placeholder="Search" className="flex-1 h-10 px-4 max-w-xl pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />

                            <Button type="submit" className="h-10 px-3 sm:px-5 py-2 m-1 text-white transition-colors duration-300 transform bg-[#40b6e9] rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 c">
                                Search
                            </Button>
                        </form>
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
                                                <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    Feedback
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* loading */}
                                        {
                                            isPending && <div className="flex justify-center ">
                                                {
                                                    isPending && <Loader />
                                                }
                                            </div>
                                        }
                                        <tbody className="bg-white divide-y divide-gray-200  ">
                                            {
                                                camps.map(camp => <tr key={camp._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.campName}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        ${camp.campFees}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {camp.participantName}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {
                                                            camp.paymentStatus ?
                                                                <Button disabled>
                                                                    {camp.paymentStatus}
                                                                </Button>
                                                                : <Link to={`/dashboard/payment/${camp._id}`}>
                                                                    <Button>
                                                                        {'Pay'}
                                                                    </Button>
                                                                </Link>
                                                        }
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {
                                                            camp.paymentStatus ?

                                                                "Confirmed"
                                                                :
                                                                'Pending'
                                                        }
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {
                                                            camp.paymentStatus ?
                                                                <Button disabled>
                                                                    Cancel
                                                                </Button>
                                                                : <Button onClick={() => handleDelete(camp._id)}>
                                                                    Cancel
                                                                </Button>
                                                        }
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                                                        {
                                                            camp.paymentStatus ?
                                                                <Button onClick={handleOpen}>
                                                                    Feedback
                                                                </Button>
                                                                :
                                                                " N/A"
                                                        }
                                                    </td>


                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Dialog
                            open={open}
                            handler={handleOpen}

                        >
                            <Card className="mx-auto w-full  md:p-10 " onSubmit={handleSubmit(onSubmit)}>
                                <CardBody className="flex flex-col gap-4">
                                    <Typography variant="h4" color="light-blue">
                                        Share Your Thoughts
                                    </Typography>

                                    <form className="space-y-3 md:space-y-5 " >


                                        <div className=" gap-5">
                                            <div className=" w-full max-w-[200px]">
                                                <Typography className="mb-2" variant="h6">
                                                    Rating
                                                </Typography>
                                                <Rating onChange={(value) => setRating(value)} isRequired={true}
                                                    value={rating} />

                                            </div>
                                            <div className=" w-full">
                                                <Typography className="mb-2" variant="h6">
                                                    Feedback
                                                </Typography>
                                                <Textarea
                                                    labelProps={{
                                                        className: "before:content-none after:content-none",
                                                    }}
                                                    {...register("feedback", { required: true })}
                                                    className="w-full  !border-t-blue-gray-200 focus:!border-t-gray-900" />
                                                {errors.feedback && <span className="text-red-600 font-semibold">this field is required***</span>}
                                            </div>
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


                    {/* pagination */}
                    <div className="flex items-center justify-between mt-6">
                        <Button onClick={handlePrev}
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2   hover:bg-blue-100/60 hover:text-blue-500">
                            <FaArrowLeftLong />

                            <span>
                                previous
                            </span>
                        </Button>

                        <div className="items-center hidden lg:flex gap-x-3">
                            {
                                pages.map(page =>
                                    <Button onClick={() => setPage(page)} key={page}
                                        className={`px-2 py-1 text-sm  rounded-md   ${currentPage == page ? "text-blue-500 bg-blue-100/60" : "text-gray-500 bg-gray-100"}`}>{page + 1}</Button>)
                            }

                        </div>

                        <Button onClick={handleNext} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-blue-100/60 hover:text-blue-500">
                            Next
                            <FaArrowRightLong />
                        </Button>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default RegisteredCamps;