import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addProduct } from "../utills";
import { Helmet } from "react-helmet-async";



const ProductDetails = () => {
    const dataAll = useLoaderData()
    // console.log(dataAll)
    const {product_id}=useParams()
    const [product, setProduct] = useState({})
    useEffect(() =>{
        const singleData =dataAll?.find(produc => produc.product_id == product_id)
        setProduct(singleData)

    },[dataAll, product_id])
    // handle a product btn click
    const handleProduct =(product) =>{
        addProduct(product)
    }
     return (
      
        <div className="w-6/12 mx-auto z-10 -mt-12">
          <Helmet>
            <title>ProductDetails</title>
          </Helmet>
     <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={product.product_image}
      alt="Product" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.product_title}</h2>
    <p>${product.price}</p>
    <p>{product.description}</p>
    <p>category: {product.category}</p>
    <p> rating: {product.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=> handleProduct(product)}>Add to card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;