import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFrom from "../../Hooks/useFrom";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const { CreateUser, updateUser } = useAuth()
    const location = useLocation()
    const navigate = useFrom(location)
    // const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const handleRegister = data => {
        console.log(data);
        const { email, password, name, photoURL } = data;
        CreateUser(email, password)
            .then(async (res) => {
                console.log(res.user);
                await updateUser(name, photoURL)
                    .then(() => {
                        navigate();
                        Swal.fire({
                            title: 'Successfully Registered',
                            text: `Congratulations, ${name}! You have successfully registered.`,
                            icon: "success"
                        });
                    })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen" style={{
                // backgroundImage: `url(${loginBG})`
            }}>
                {/* <Helmet>
                    <title>Bistro Boss || Login</title>
                </Helmet> */}
                <div className="flex my-20 shadow-2xl w-full max-w-lg mx-auto overflow-hidden rounded-lg lg:max-w-screen-xl text-black"
                // style={{
                //     backgroundImage: `url(${loginBG})`
                // }}
                >
                    <div className="w-full bg-transparent px-6 py-8 md:px-8 lg:w-1/2">

                        <p className="mt-3 text-xl text-center ">
                            Welcome back!
                        </p>


                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  lg:w-1/4"></span>

                            <p className="text-xs text-center text-gray-500 uppercase ">
                                Register with email</p>

                            <span className="w-1/5 border-b  lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit(handleRegister)} >

                            <div className="mt-7">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium " >Name</label>
                                </div>
                                <input className="my-2 block w-full px-4 py-2  bg-white  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 join-item" type="text" name="name"
                                    placeholder="Enter Your Name "
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-600 font-semibold">name is required</span>}
                            </div>

                            <div className="mt-7">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium " >PhotoURL</label>
                                </div>
                                <input className="my-2 block w-full px-4 py-2  bg-white  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 join-item" type="text" name="photoURL"
                                    placeholder="Enter PhotoURL "
                                    {...register("photoURL", { required: true })}
                                />
                                {errors.name && <span className="text-red-600 font-semibold">PhotoURL is required</span>}
                            </div>

                            <div className="mt-4 ">
                                <label className="block mb-2 text-sm font-medium " >Email Address</label>
                                <input className="block w-full px-4 py-2  border rounded-lg bg-white  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-600 font-semibold">email is required</span>}
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium " >Password</label>
                                </div>

                                <input className="block w-full px-4 py-2  border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password"
                                    placeholder="Enter Your Password"
                                    {...register("password", { required: true, minLength: 6, maxLength: 12 })}
                                />
                                {errors.password?.type === 'required' && <span className="text-red-600 font-semibold">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 font-semibold">Password must be longer then 6 letter</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 font-semibold">Password must be less then 12 letter</span>}

                            </div>



                            <div className="mt-6">
                                <button className="w-full px-6 py-3 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#4b86c2] rounded-lg ">
                                    Register
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center justify-center mt-4">
                            <p className="text-xs  uppercase text-[#4b86c2]">
                                Already having an account ?
                                <Link to='/login' className="font-medium hover:underline" >Login now</Link>
                            </p>
                        </div>
                        <div className="flex flex-col  items-center mt-3">
                            <p className="text-sm font-medium">Or Register With </p>
                            {/* <SocialLogin /> */}
                        </div>
                    </div>
                    <div className="hidden bg-cover lg:block lg:w-1/2">
                        <img src={''} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;