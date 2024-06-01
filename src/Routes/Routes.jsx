import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CampDetails from "../Pages/Home/HomePage_Sections/CampDetails";

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
            }
        ]
    },
]);

export default Routes;