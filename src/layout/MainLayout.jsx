import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
      <div className="bg-[#F8F8F8]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
};

export default MainLayout;