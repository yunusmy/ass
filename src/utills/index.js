import toast from "react-hot-toast"

// get all product from local storage
const getAllProducts = () =>{

    const all = localStorage.getItem('products')
   
    // console.log(products)
    if(all){
        const products = JSON.parse(all)
        // console.log(products)
        return products

    }else{
        // console.log([])
        return []
    }

}

// add a product from local storage
const addProduct =(product) =>{
    console.log(product)
    const products = getAllProducts()
    const isExist =products.find(item => item.product_id==product.product_id)
    if(isExist){
        return toast.error('Product already exists!')
    }
    products.push(product)
    localStorage.setItem('products',JSON.stringify(products))
    toast.success('successfull assed')

}

// remove a product from local storage




export {addProduct, getAllProducts}