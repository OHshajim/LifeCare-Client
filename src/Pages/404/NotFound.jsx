import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="bg-white  ">
            <Helmet>
                <title>No Page</title>
            </Helmet>
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>

                    <div className=" mt-6 ">
                        <Link to={'/'}>
                            <Button className="flex items-center justify-center gap-2 ">

                                <IoIosArrowRoundBack className="text-3xl" />                    Go back
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src="https://i.ibb.co/D9Ftkzw/2456051.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default NotFound;