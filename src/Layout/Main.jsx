import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Navbar";

const Main = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes('login')||location.pathname.includes('register')
    return (
        <div>
             {noNavFooter || <Nav />}
            <div className="min-h-[calc(100vh-256px)]">
                <Outlet />
            </div>
            {noNavFooter || <Footer />}
        </div>
    );
};

export default Main;