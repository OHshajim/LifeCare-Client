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
        <div>
            <Card className="mt-6 ">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={image}
                        alt={campName}
                    />
                </CardHeader>
                <CardBody className="space-y-2">
                    <div className="flex justify-between items-center ">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {campName}
                        </Typography>
                        <p className="font-bold">${campFees}</p>
                    </div>
                    <div className="flex justify-between items-center ">

                        <p className="flex items-center gap-1 "><HiUserGroup className="text-lg" />{participantCount}</p>
                        <p className="flex items-center gap-1 "><FaUserDoctor className="text-lg" />
                            {healthcareProfessionalName}</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-1 "><BsCalendarDateFill className="text-base" />
                            {date}</p>
                        <p className="flex items-center gap-1 "><MdAddLocation className="text-xl" />{location}</p>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to={`/camp/${_id}`}><Button>View Details</Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};
CampCards.propTypes = {
    camp: PropTypes.object.isRequired,
};
export default CampCards;