import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import PropTypes from "prop-types"

function Products({setFavorites, favorites}) {
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
          products.map(product => <ProductCard key={product.id} product={product} setFavorites={setFavorites} favorites={favorites} />)
        }
      
    </div>
      
    </>
  )
}

export default Products

Products.propTypes = {
  setFavorites : PropTypes.func,
  favorites : PropTypes.array
}