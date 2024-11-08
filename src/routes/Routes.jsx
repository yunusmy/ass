import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import AllProduct from "../components/AllProduct";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../components/Categories";
import Error from '../pages/Error'
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
     
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() =>fetch('/product.json'),
            
           
            children:[
              {
                path:'/',
                element:<AllProduct></AllProduct>,
                loader:() =>fetch('/products.json'),
              },
              {
                path:'/allproduct',
                element:<AllProduct></AllProduct>,
                loader:() =>fetch('/products.json'),
              },
              {
                path:'caterories',
                element:<Categories></Categories>
              },

            ],
        },
        {
            path:'/statistics',
            element: <Statistics></Statistics>,
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children: [
              {
                path: "product/:product_id",
                element: <ProductDetails></ProductDetails>,
                loader:() =>fetch('/products.json'),
              },
            ],

        },
        {
          path:'/about',
          element:<About></About>
        },

      ]
    },
  ]);
  export default routes  