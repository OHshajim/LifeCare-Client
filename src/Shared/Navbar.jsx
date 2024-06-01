import {
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = () => {
    const [openNav, setOpenNav] = useState(false);


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-lg sm:text-xl">
            <li>
                <Link to='/' className="flex items-center ">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/' className="flex items-center ">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to='/' className="flex items-center ">
                    Join Us
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
        <div className="w-screen">
            <div
                className={fix ? " fixed z-10 w-screen duration-500 backdrop-blur backdrop-brightness-10" : " w-screen  duration-300 fixed z-10 "}>

                <div className="w-screen text-white  px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-none ">
                    <div className="flex items-center justify-between ">
                        <Typography variant="h3"
                            className="mr-4  py-1.5 font-bold"
                        >
                            LifeCare
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">
                                {navList}
                            </div>
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
                        </div>
                    </div>
                    <MobileNav open={openNav} className='block lg:hidden'>
                        {navList}
                    </MobileNav>
                </div>

            </div>
        </div>

    );
};

export default Nav;