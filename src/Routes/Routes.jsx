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
import Profile from "../Pages/DashboardPages/Participant/Profile";
import UserManagement from "../Pages/DashboardPages/Organizer/UserManagement";
import ManageRegisters from "../Pages/DashboardPages/Organizer/ManageRegisters";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
        element: <Dashboard />,
        children: [
            // Organizer
            {
                path: '/dashBoard/addCamp',
                element: <AddCamp />,
            },
            {
                path: '/dashBoard/manageCamp',
                element: <ManageCamp />,
            },
            {
                path: '/dashBoard/update-Camp/:id',
                element: <UpdateCamp />,
            },
            {
                path: '/dashBoard/manageRegisters',
                element: <ManageRegisters />,
            },
            {
                path: '/dashBoard/userManagement',
                element: <UserManagement />,
            },

            //Participant Users
            {
                path: '/dashBoard/userProfile',
                element: <Profile />,
            },
            {
                path: '/dashBoard/registeredCamps',
                element: <RegisteredCamps />,
            },
            {
                path: '/dashBoard/paymentHistory',
                element: <PaymentHistory />,
            },
            // payment
            {
                path: '/dashBoard/payment/:id',
                element: <Payment />,
            },
        ]
    }
]);

export default Routes;