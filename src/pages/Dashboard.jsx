import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getAllProducts } from "../utills";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    const products =getAllProducts()
    setProduct(products)

  },[])
    return (
        <div>
          <Helmet>
            <title>Dashboard</title>
          </Helmet>

<div className="hero bg-purple-600  rounded-2xl">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-3xl font-bold text-[rgb(255,255,255)]">Dashboard Details</h1>
      <p className="py-6 text-[rgb(255,255,255)]">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>

<Outlet></Outlet>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                product.map(product => <Card key={product.product_id} product={product}></Card>)
            }
    
        </div>

  </div>
    );
};

export default Dashboard;