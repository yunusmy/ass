import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const AllProduct = () => {
    const data = useLoaderData()
    // console.log(data)
    const {category} = useParams()
    const [product, setProducts] =useState([])
    useEffect(()=> {
        
        if(category){
            const filteredByCategory =[...data].filter(
                produc =>produc.category === category
            )
            setProducts(filteredByCategory)

        }else{
            setProducts(data)
        }
    },[category, data])
    // console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                product.map(product => <Card key={product.product_id} product={product}></Card>)
            }
    
        </div>
    );
};

export default AllProduct;