import { useEffect, useState } from "react"
import ProductImage from "../components/products/ProductImage";
import ProductInfo from "../components/products/ProductInfo";

function ProductDetails() {
    const [product,setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/3`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
  return (
    <>
    <div className="row mt-3">
        <ProductInfo product={product}/>
        <ProductImage product={product}/>
    </div>
    </>
  )
}

export default ProductDetails