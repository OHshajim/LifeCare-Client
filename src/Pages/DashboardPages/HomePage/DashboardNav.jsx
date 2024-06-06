import {
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    const { user, Logout } = useAuth()
    
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-base">
            <li className="">
                <Link to='/' className="flex items-center ">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/availableCamps' className="flex items-center ">
                    Available Camps
                </Link>
            </li>
        </ul>
    );

    return (
        <div className="w-screen">
            <div>
                <div className="w-screen  px-4 lg:px-8 py-2 bg-transparent border-none ">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-3 ">
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ?
                                    <MdOutlinePlaylistRemove className="text-4xl" />
                                    :
                                    <FaList className="text-xl" />
                                }
                            </IconButton>
                            <div className="flex items-center gap-1">
                                <img src="https://i.ibb.co/H2J9x6Z/Screenshot-2024-06-02-202738.png" alt="" className="w-14" />
                                < h3 className="text-xl ">
                                    <span className="text-2xl text-[#81C9E9] font-bold">L</span>ife<span className="text-2xl text-[#81C9E9] font-bold">C</span>are
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-center  gap-4 ">
                            <div className="flex items-center  gap-4">
                                <div className="mr-4 hidden lg:block">
                                    {navList}
                                </div>

                            </div>
                            <div>
                                {
                                    user ? <>
                                                <Avatar
                                                    src={user?.photoURL}
                                                    alt={user?.displayName}
                                                    withBorder={true}
                                                    color="blue"
                                                    className="p-1 cursor-pointer w-14 h-14"
                                                />
                                    </>
                                        :
                                        <>
                                            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-base">
                                                <li>
                                                    <Link to='/login' className="flex items-center ">
                                                        Join Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Nav;