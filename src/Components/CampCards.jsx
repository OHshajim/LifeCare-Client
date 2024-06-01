import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { MdAddLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const CampCards = ({ camp }) => {
    const { Camp_Name,
        Image,
        Camp_Fees,
        Date_Time,
        Location,
        Healthcare_Professional_Name,
        Participant_Count,
        _id
    } = camp;
    return (
        <div>
            <Card className="mt-6 ">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={Image}
                        alt={Camp_Name}
                    />
                </CardHeader>
                <CardBody className="space-y-2">
                    <div className="flex justify-between items-center ">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {Camp_Name}
                        </Typography>
                        <p className="font-bold">${Camp_Fees}</p>
                    </div>
                    <div className="flex justify-between items-center ">

                        <p className="flex items-center gap-1 "><HiUserGroup className="text-lg" />{Participant_Count}</p>
                        <p className="flex items-center gap-1 "><FaUserDoctor className="text-lg" />
                            {Healthcare_Professional_Name}</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-1 "><BsCalendarDateFill className="text-base" />
                            {Date_Time}</p>
                        <p className="flex items-center gap-1 "><MdAddLocation className="text-xl" />{Location}</p>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to={`/camp/:${_id}`}><Button>View Details</Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};
CampCards.propTypes = {
    camp: PropTypes.object.isRequired,
};
export default CampCards;