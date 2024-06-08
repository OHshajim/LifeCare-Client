import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Social from "./Social";
import useFrom from "../../Hooks/useFrom";
import Swal from "sweetalert2";

const Login = () => {
    const { Login } = useAuth()
    const location = useLocation()
    const navigate = useFrom(location)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {
        console.log(data);
        const { email, password } = data;
        Login(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: 'Successfully Login',
                    text: `Welcome back, Ready to explore!!!`,
                    icon: "success"
                });
                navigate()
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Something Wrong',
                    text: 'Please, Try Again...!',
                    icon: "error"
                  });
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen"
            style={{
                // backgroundImage: `url(${loginBG})`
            }}>


            {/* <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet> */}

            <div className="flex my-20 shadow-2xl w-full max-w-lg mx-auto overflow-hidden rounded-lg lg:max-w-screen-xl text-black"
            // style={{
            //     backgroundImage: `url(${''})`
            // }}
            >
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img src={''} alt="" />
                </div>

                <div className="w-full bg-transparent px-6 py-8 md:px-8 lg:w-1/2">

                    <p className="mt-3 text-xl text-center ">
                        Welcome back!
                    </p>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>

                        <p className="text-xs text-center text-gray-500 uppercase "> login
                            with email</p>

                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)} >

                        <div className="mt-4 ">
                            <label className="block mb-2 text-sm font-medium " >Email Address</label>
                            <input {...register("email", { required: true })}
                                className="block w-full px-4 py-2  border rounded-lg bg-white  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                            />
                            {
                                errors.email?.type === "required" && <p className="text-red-600 font-semibold">Email is required***</p>
                            }
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium " >Password</label>
                            </div>

                            <input {...register("password", { required: true, minLength: 6 })}
                                className="block w-full px-4 py-2  border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                                type="password" name="password"
                                placeholder="Enter Your Password"
                            />
                            {
                                errors.password?.type === "required" && <p className="text-red-600 font-semibold">Password is required***</p>
                            }
                            {
                                errors.password?.type === "minLength" && <p className="text-red-600 font-semibold">Password must be more than 6 character***</p>
                            }
                        </div>

                        <div className="mt-6">
                            <button className=" w-full px-6 py-3 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#4b86c2] rounded-lg ">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center mt-4">
                        <p className="text-xs  uppercase text-[#4b86c2]">
                            New here? Create a
                            <Link to='/register' className="font-medium hover:underline"> New Account</Link>
                        </p>
                    </div>
                    <div className="flex flex-col  items-center mt-3">
                        <p className="text-sm font-medium">Or Sign in With </p>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;