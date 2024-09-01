import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { MdAddLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const CampCards = ({ camp }) => {

    const { _id, campFees, campName, date, description, healthcareProfessionalName, image, location, participantCount } = camp;
    return (
        <div className="max-h-[600px] transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
               <Card className=" overflow-hidden h-full">
                <CardHeader className="m-0 rounded-none">
                    <img
                        src={image}
                        alt={campName}
                    />
                </CardHeader>
                <CardBody className="space-y-2 grow">
                    <div>
                        <div className="flex justify-between items-center ">
                            <Typography variant="h5"  >
                                {campName}
                            </Typography>

                        </div>
                        {description.length > 50 ? <p className="text-gray-500">{description.slice(0, 50)}...</p> : <p>{description}</p>}
                    </div>
                    <div className="flex justify-between items-center ">

                        <p className="flex items-center gap-1 "><HiUserGroup className="text-lg" />{participantCount}</p>
                        <p className="font-bold text-[#81C9E9]">${campFees}</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-1 "><BsCalendarDateFill className="text-base" />
                            {date}</p>
                        <p className="flex items-center gap-1 "><MdAddLocation className="text-xl" />{location}</p>
                    </div>
                    <p className="flex items-center gap-1 "><FaUserDoctor className="text-lg" />
                        {healthcareProfessionalName}</p>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to={`/camp/${_id}`}><Button className="bg-[#40b6e9] ">View Details</Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};
CampCards.propTypes = {
    camp: PropTypes.object.isRequired,
};
export default CampCards;