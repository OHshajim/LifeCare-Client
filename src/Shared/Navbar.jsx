import {
    // MobileNav,
    IconButton,
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
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
    const handleLogout = () => {
        Swal.fire({
            title: "Log out now?",
            text: " Are you sure you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                Logout();

                // sweetAlert
                Swal.fire({
                    title: "Successfully Logout",
                    text: "You are now logged out. Stay healthy!",
                    icon: "success",
                });
            }
        })
    }
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

    // for nav fix on scroll 
    const [fix, setFix] = useState(false)
    const setFixed = () => {
        if (window.scrollY > 50) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div className="w-screen relative">
            <div
                className={fix ? " fixed z-10 w-screen duration-500 bg-[#000000]  text-white " : " text-white  w-screen  duration-300 fixed z-10 bg-[#00000048] "}>

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
                                        <Menu>
                                            <MenuHandler>
                                                <Avatar
                                                    src={user?.photoURL}
                                                    alt={user?.displayName}
                                                    withBorder={true}
                                                    color="blue"
                                                    className="p-1 cursor-pointer w-14 h-14"
                                                />
                                            </MenuHandler>
                                            <MenuList className="space-y-4">

                                                <p className="px-3 my-2">{user?.displayName}</p>

                                                <Link to='/dashboard/profile' className="flex items-center ">
                                                    <MenuItem>
                                                        Dashboard
                                                    </MenuItem>
                                                </Link>
                                                <MenuItem onClick={handleLogout} className="border text-red-600 border-red-600">
                                                    Logout
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>

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

                <div className={` absolute w-36 sm:w-56  duration-500 lg:hidden p-2 menu menu-sm dropdown-content bg-[#fff] rounded-lg shadow  rounded-box z-20 
                    ${openNav ? 'top-16 left-3' : '-left-96 top-16 '}`}>
                    <div className="px-1 sm:px-3 text-black">
                        {navList}
                    </div>
                </div >
            </div>
        </div>

    );
};

export default Nav;