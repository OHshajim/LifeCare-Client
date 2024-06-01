import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;