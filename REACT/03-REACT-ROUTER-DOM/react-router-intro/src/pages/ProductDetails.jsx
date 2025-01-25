import { useEffect, useState } from "react"
import ProductImage from "../components/products/ProductImage";
import ProductInfo from "../components/products/ProductInfo";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {productId} = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId]);
  return (
    <>
    <div className="row mt-3">
        <ProductImage product={product}/>
        <ProductInfo product={product}/>
    </div>
    </>
  )
}

export default ProductDetails