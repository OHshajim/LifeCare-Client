import { Button } from "@material-tailwind/react";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { useLocation, } from "react-router-dom";
import useFrom from "../../Hooks/useFrom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Social = () => {
    const { googleUser } = useAuth();
    const location = useLocation();
    const navigate = useFrom(location);
    const axiosPublic = useAxiosPublic();

    const handleGoogle = () => {
        googleUser()
            .then(async (res) => {
                console.log(res.user);
                const { displayName, email, photoURL } = res.user;
                const user = { name: displayName, email: email, photoURL: photoURL }
                await axiosPublic.post('/users', user)
                    .then((result) => {
                        if (result.data.insertedId) {
                            Swal.fire({
                                title: 'Successfully Registered',
                                text: `Congratulations, ${res.user.displayName}! You have successfully registered.`,
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: 'Successfully Login',
                                text: `Welcome back, ${res.user.displayName}!`,
                                icon: "success"
                            });
                        }
                        navigate()

                    })
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
        <div className="flex justify-center mt-2">
            <Button onClick={handleGoogle} className="bg-transparent rounded-full text-xl p-3 text-[#4b86c2] border-[#4b86c2] border-2">
                <BsGoogle />
            </Button>
        </div>
    );
};

export default Social;