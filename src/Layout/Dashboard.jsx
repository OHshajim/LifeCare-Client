import { CgAdd } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="bg-[#1d5d77] text-[#ffffff] max-w-xl min-h-screen px-9 pt-10">
                <div className="flex items-center gap-1">
                    <img src="https://i.ibb.co/H2J9x6Z/Screenshot-2024-06-02-202738.png" alt="" className="w-14" />
                    < h3 className="text-xl ">
                        <span className="text-2xl text-[#81C9E9] font-bold">L</span>ife<span className="text-2xl text-[#81C9E9] font-bold">C</span>are
                    </h3>
                </div>
                <ul className="font-medium pt-8 uppercase space-y-5">
                    {/* { */}
                    {/* // isAdmin ?
                            // admin */}
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
                    {/* :
                            // users */}
                    {/* <>
                                <li><NavLink to='/dashboard/userHome'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaHome className="text-2xl" />
                                    User Home</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/reservation'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaCalendar className="text-2xl" />
                                    Reservation</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/paymentHistory'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaWallet className="text-2xl" />
                                    payment history </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/cart'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaShoppingCart className="text-2xl" />
                                    My Cart</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/review'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><CgComment className="text-2xl" />
                                    add review</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/myBookings'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaList className="text-2xl" />
                                    my bookings</NavLink>
                                </li>
                            </> */}
                    {/*  } */}
                </ul>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;