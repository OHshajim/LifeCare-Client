import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CampDetails from "../Pages/Home/HomePage_Sections/CampDetails";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

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
                element: <CampDetails/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },
]);

export default Routes;