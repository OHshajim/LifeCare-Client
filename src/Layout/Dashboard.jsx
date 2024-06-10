import { CgAdd } from "react-icons/cg";
import { FaHistory, FaHome } from "react-icons/fa";
import { FaBook, FaListUl } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

import DashboardNav from "../Pages/DashboardPages/HomePage/DashboardNav";
import useOrganizer from "../Hooks/useOrganizer";
import { BiUser } from "react-icons/bi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const Dashboard = () => {
    const { user } = useAuth()
    const [isOrganizer] = useOrganizer()
    // console.log(isOrganizer);
    return (
        <div className="lg:flex  min-h-screen ">
            <div className="lg:flex hidden  ">
                <div className="bg-[#247696] text-[#ffffff] max-w-xl px-9 pt-10 ">

                    <div className="flex flex-col justify-center items-center">
                        <img src={user?.photoURL} alt="" className="rounded-full ring-4 ring-[#81C9E9] w-16 mb-3" />
                        <h4>{user?.displayName}</h4>
                    </div>
                    <ul className="font-medium pt-8 uppercase space-y-5">
                        {
                            isOrganizer ?
                                <>
                                    <li><NavLink to='/dashboard/profile'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><BiUser className="text-2xl" />
                                        Profile</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/addCamp'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><CgAdd className="text-2xl" />
                                        add Camp</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/manageCamp'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><FaBook className="text-2xl" />
                                        Manage Camp</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/manageRegisters'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><FaListUl className="text-2xl" />
                                        Manage Registered Camps</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/userManagement'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><HiUserGroup className="text-2xl" />
                                        Participant Management</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/analytics'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><TbDeviceDesktopAnalytics  className="text-2xl" />
                                        Analytics</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/profile'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><BiUser className="text-2xl" />
                                        Profile</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/registeredCamps'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><FaListUl className="text-2xl" />
                                        Registered Camps</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/paymentHistory'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                                        }><FaHistory className="text-2xl" />
                                        Payment History</NavLink>
                                    </li>
                                </>
                        }
                        <hr />
                        <li><NavLink to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                            }><FaHome className="text-2xl" />
                            home</NavLink>
                        </li>
                        <li><NavLink to='/availableCamps'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#81C9E9] flex items-center gap-2" : "flex items-center gap-2"
                            }><FaListUl className="text-2xl" />
                            Available Camps</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden">
                <DashboardNav />
            </div>
            <div className="flex-1 px-5 sm:px-8 xl:px-14 lg:px-9 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;