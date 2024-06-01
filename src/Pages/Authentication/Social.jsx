import { Button } from "@material-tailwind/react";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { useLocation, } from "react-router-dom";
import useFrom from "../../Hooks/useFrom";
import Swal from "sweetalert2";

const Social = () => {
    const { googleUser } = useAuth();
    const location = useLocation();
    const navigate = useFrom(location)

    const handleGoogle = () => {
        googleUser()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: 'Successfully Login',
                    text: `Welcome back, ${res.user.displayName}!`,
                    icon: "success"
                });
                navigate()

            })
            .catch(error => {
                console.log(error);
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