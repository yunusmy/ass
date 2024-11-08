import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <h3 className="text-2xl text-center py-6 ">Explore Cutting-Edge Gadgets</h3>
                
            <div className="flex gap-2">
            <div className="w-3/12">
                <button className="btn w-full mb-3"><Link to='/allproduct' className="pb-2">All Product</Link></button>
                <Categories categories={categories}/>
            </div>
            <Outlet></Outlet>
            </div>
            </div>
            
        </div>
    );
};

export default Home;