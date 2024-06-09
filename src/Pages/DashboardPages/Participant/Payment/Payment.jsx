import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../../Shared/SectionTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

// publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: camp = {} } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCamp/${id}`)
            console.log(res);
            return res.data;
        }
    })
    console.log(camp);
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="fast pay" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm camp={camp}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;