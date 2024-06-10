import { Progress } from "@material-tailwind/react";

const Success = () => {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row  flex-cols gap-10">
            <div className="lg:w-1/2 lg:px-0 px-5">

                <h3 className="md:text-3xl sm:text-2xl text-xl font-bold lg:mt-10">Finest Client Care & Amenities Service</h3>
                <p className="text-gray-800">At the heart of our Camp Management System is a commitment to providing the finest client care and amenities service. This feature ensures that all participants of the medical camps receive top-notch care and have access to a range of amenities designed to enhance their experience.</p>

                <div className="space-y-5 mt-7">
                    <div>
                        <div className="flex items-center justify-between">
                            <p>Return Clients</p>
                            <p>80%</p>
                        </div>
                        <Progress value={80} color="blue" />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p>Clients Satisfaction</p>
                            <p>95%</p>
                        </div>
                        <Progress value={95} color="cyan" />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p>Clients Referral</p>
                            <p>85%</p>
                        </div>
                        <Progress value={85} color="light-blue" />
                    </div>
                </div>
            </div>

            {/* photo */}
            <div className="lg:w-1/2">
                <img src="https://i.ibb.co/2FFTnKw/health-care-concept-with-medical-icons-heart-shape-flat-design-vector-illustration-493806-13718-tran.jpg" alt="Care" />
            </div>
        </div>
    );
};

export default Success;