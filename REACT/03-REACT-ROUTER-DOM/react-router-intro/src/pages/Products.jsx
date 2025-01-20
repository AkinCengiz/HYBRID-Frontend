import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

function Products() {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res =>res.json())
    .then(data => setProducts(data));
  },[]);
  return (
    <>
    
      <h2>Ürünler</h2>
      <div className="row  row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 justify-content-between">
      
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      
    </div>
      
    </>
  )
}

export default Products