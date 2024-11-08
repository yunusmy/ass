import { Link } from "react-router-dom";


const Card = ({product}) => {
    const {product_title, price, product_image,product_id} = product || {}
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl h-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {product_title}</h2>
    <p className="text-xl"> Price: ${ price}</p>
    <div className="card-actions">
      <Link to={`/dashboard/product/${product_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;