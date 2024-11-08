import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Toaster></Toaster>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-284px)] py-12">
                <Outlet/>

            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;