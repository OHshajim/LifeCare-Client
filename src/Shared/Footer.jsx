import { Typography } from "@material-tailwind/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-white p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                    <div className="flex items-center gap-1">
                        <img src="https://i.ibb.co/H2J9x6Z/Screenshot-2024-06-02-202738.png" alt="" className="w-14" />
                        < h3 className="text-xl">
                            LifeCare
                        </h3>
                    </div>
                    <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
                        <li>
                            <Link
                                to="/"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                License
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contribute
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 text-3xl justify-center text-white mt-4">
                    <div className="p-2 rounded-full bg-black">
                        <FaFacebook />
                    </div>
                    <div className="p-2 rounded-full bg-black">
                        <BsInstagram />
                    </div>
                    <div className="p-2 rounded-full bg-black">
                        <LiaLinkedin />
                    </div>
                </div>
                <p className="text-center text-sm my-2">Join Us</p>
                <hr className="my-8 border-blue-gray-50" />
                <Typography color="blue-gray" className="text-center font-normal">
                    &copy; 2023 LifeCare
                </Typography>
            </footer>
        </div>
    );
};

export default Footer;