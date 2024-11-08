import { Link } from "react-router-dom";
import Card from "./Card";




const Categories = ({categories}) => {
    return (
        <div className="flex flex-col gap-3">
           {
            categories?.map(category =>(
                    <button className="btn" onClick={()=> heandleAdd(categories.product_id)}> <Link to="caterories" key={category.product_id}>{category.category}</Link></button>
            ))
           }
            
        
        <Card></Card>
        </div>
    );
};

export default Categories;