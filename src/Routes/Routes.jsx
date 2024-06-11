import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "./PrivetRoute";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Dashboard from "../Layout/Dashboard";
import AddCamp from "../Pages/DashboardPages/Organizer/AddCamp";
import ManageCamp from "../Pages/DashboardPages/Organizer/ManageCamp";
import UpdateCamp from "../Pages/DashboardPages/Organizer/UpdateCamp";
import RegisteredCamps from "../Pages/DashboardPages/Participant/RegisteredCamps";
import Payment from "../Pages/DashboardPages/Participant/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPages/Participant/PaymentHistory";
import UserManagement from "../Pages/DashboardPages/Organizer/UserManagement";
import ManageRegisters from "../Pages/DashboardPages/Organizer/ManageRegisters";
import Analytics from "../Pages/DashboardPages/Participant/Analytics";
import NotFound from "../Pages/404/NotFound";
import OrganizerRoute from "./OrganizerRoute";
import Profile from "../Shared/Profile";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/availableCamps',
                element: <AvailableCamps />
            },
            {
                path: '/camp/:id',
                element: <PrivetRoute><CampDetails /></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: 'dashBoard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/dashBoard/profile',
                element: <PrivetRoute><Profile /></PrivetRoute>,
            },
            // Organizer
            {
                path: '/dashBoard/addCamp',
                element: <OrganizerRoute><AddCamp /></OrganizerRoute>,
            },
            {
                path: '/dashBoard/manageCamp',
                element: <OrganizerRoute><ManageCamp /></OrganizerRoute>,
            },
            {
                path: '/dashBoard/update-Camp/:id',
                element: <OrganizerRoute><UpdateCamp /></OrganizerRoute>,
            },
            {
                path: '/dashBoard/manageRegisters',
                element: <OrganizerRoute><ManageRegisters /></OrganizerRoute>,
            },
            {
                path: '/dashBoard/userManagement',
                element: <OrganizerRoute><UserManagement /></OrganizerRoute>,
            },

            //Participant Users
            {
                path: '/dashBoard/Analytics',
                element: <PrivetRoute><Analytics /></PrivetRoute>,
            },
            {
                path: '/dashBoard/registeredCamps',
                element: <PrivetRoute><RegisteredCamps /></PrivetRoute>,
            },
            {
                path: '/dashBoard/paymentHistory',
                element: <PrivetRoute><PaymentHistory /></PrivetRoute>,
            },
            // payment
            {
                path: '/dashBoard/payment/:id',
                element: <PrivetRoute><Payment /></PrivetRoute>,
            },
        ]
    }
]);

export default Routes;