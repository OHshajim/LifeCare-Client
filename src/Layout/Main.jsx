import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-[calc(100vh-256px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;