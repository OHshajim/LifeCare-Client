import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CampDetails from "../Components/CampDetails";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "./PrivetRoute";

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
]);

export default Routes;