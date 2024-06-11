import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CheckoutForm = ({ camp }) => {
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionID, setTransactionID] = useState('')
    const [error, setError] = useState('')
    const { user } = useAuth()
    const { campFees, campName, _id } = camp;
    const navigate = useNavigate()
    useEffect(() => {
        if (!campFees) {
            return;
        }
        axiosSecure.post("/create-payment-intent", { fees: campFees })
            .then((res) => {
                console.log(res);
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, campFees]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setError(error.message)
        }
        else {
            console.log('payment Method :', paymentMethod);
            setError('')
        }

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log('paymentIntent : ', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionID(paymentIntent.id)
                const payment = {
                    email: user.email,
                    campFees: campFees,
                    transactionID: paymentIntent.id,
                    date: new Date(),
                    name: user.displayName,
                    campName: campName,
                    campId: _id,
                    status: 'confirmed'
                }
                const res = await axiosSecure.post('/payment', payment)
                console.log(res);
                if (res.data) {
                    Swal.fire({
                        title: "Success",
                        text: 'Payment Complete ',
                        icon: 'success'
                    })
                    navigate('/dashboard/paymentHistory')
                }
            }
        }

    }
    return (
        <div>
            <Helmet>
                <title>LifeCare || Payment</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <CardElement className='p-3 text-xl' options={{
                    style: {
                        base: {
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                <div className="max-w-sm  mx-auto my-10 ">
                    <Button disabled={!stripe || !clientSecret} type="submit" className=" bg-[#3081a9] text-white w-full">Pay</Button>
                </div>
                <p className="text-red-600 text-center">{error}</p>
                {transactionID &&
                    <p className="text-green-600 text-center">{transactionID}</p>
                }
            </form>
        </div>
    );
};
CheckoutForm.propTypes = {
    camp: PropTypes.object.isRequired,
};
export default CheckoutForm;