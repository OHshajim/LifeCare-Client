import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import { FaList } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-lg sm:text-xl">
            <li>
                <Link to='/' className="flex items-center text-black">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/' className="flex items-center text-black">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to='/' className="flex items-center text-black">
                    Join Us
                </Link>
            </li>
        </ul>
    );
    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography variant="h3"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
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
                                <MdOutlinePlaylistRemove className="text-4xl"/>
                             :
                                <FaList className="text-xl"/>
                            }
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>

        </div>

    );
};

export default Nav;