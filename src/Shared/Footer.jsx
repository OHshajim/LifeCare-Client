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
            <img
              src="https://i.ibb.co/H2J9x6Z/Screenshot-2024-06-02-202738.png"
              alt=""
              className="w-14"
            />
            <h3 className="text-xl ">
              <span className="text-2xl text-[#81C9E9] font-bold">L</span>ife
              <span className="text-2xl text-[#81C9E9] font-bold">C</span>are
            </h3>
          </div>
          <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
            <li>
              <Link
                to="/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#81C9E9] delay-50 duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#81C9E9] delay-50 duration-300"
              >
                License
              </Link>
            </li>
            <li>
              <Link
                to="/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#81C9E9] delay-50 duration-300"
              >
                Contribute
              </Link>
            </li>
            <li>
              <Link
                to="/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#81C9E9] delay-50 duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 text-3xl justify-center text-white mt-4">
          <Link
            to={"https://www.facebook.com/aj.shajim.78"}
            className="p-2 rounded-full bg-black  hover:bg-[#81C9E9] delay-50 duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            to={"https://www.instagram.com/shajim_78/"}
            className="p-2 rounded-full bg-black hover:bg-[#81C9E9] delay-50 duration-300"
          >
            <BsInstagram />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/shajim-ahmed/"}
            className="p-2 rounded-full bg-black hover:bg-[#81C9E9] delay-50 duration-300"
          >
            <LiaLinkedin />
          </Link>
        </div>
        <p className="text-center text-sm my-2 font-bold hover:text-[#81C9E9] delay-50 duration-300">
          Join Us
        </p>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023{" "}
          <span>
            <span className="text-xl text-[#81C9E9] font-bold">L</span>ife
            <span className="text-xl text-[#81C9E9] font-bold">C</span>are
          </span>
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
