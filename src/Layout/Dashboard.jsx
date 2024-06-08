import { CgAdd } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


import {
    IconButton,

} from "@material-tailwind/react";

import { useState } from "react";
import DashboardNav from "../Pages/DashboardPages/HomePage/DashboardNav";
import NavDrawer from "../Pages/DashboardPages/HomePage/NavDrawer";

const Dashboard = () => {

    const [open, setOpen] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const { user } = useAuth()
    return (
        <div className="lg:flex  ">
            <div className="lg:flex hidden">
                <div className="bg-[#1d5d77] text-[#ffffff] max-w-xl min-h-screen px-9 pt-10 ">

                    <div className="flex flex-col justify-center items-center">
                        <img src={user?.photoURL} alt="" className="rounded-full ring-4 ring-[#81C9E9] w-16 mb-3" />
                        <h4>{user?.displayName}</h4>
                    </div>
                    <ul className="font-medium pt-8 uppercase space-y-5">
                        <>
                            <li><NavLink to='/dashboard/adminHome'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                }><FaHome className="text-2xl" />
                                Profile</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/addCamp'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                }><CgAdd className="text-2xl" />
                                add Camp</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/myBookings'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                }><FaBook className="text-2xl" />
                                Manage Camp</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/myBookings'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                }><FaBook className="text-2xl" />
                                Manage Registered Camps</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/allUsers'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                }><HiUserGroup className="text-2xl" />
                                All users</NavLink>
                            </li>
                        </>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden">
                <DashboardNav />
            </div>
            <div className="flex-1 px-14">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;