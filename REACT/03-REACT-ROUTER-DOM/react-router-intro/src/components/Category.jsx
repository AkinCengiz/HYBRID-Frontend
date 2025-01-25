import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "./products/ProductCard";
import PropTypes from "prop-types"

// Kategoriye ait ürünleri listeleyen komponent


function Category({setFavorites, favorites}) {
    const {categoryName} = useParams();
    const [productsInCategory,setProductsInCategory] = useState([]);
    

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(res => res.json())
        .then(data => setProductsInCategory(data))
    },[categoryName]);
  return (
    <>
        <h2>Kategori : {categoryName[0].toUpperCase()+categoryName.slice(1)}</h2>
              <div className="row  row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 justify-content-between">
              
                {
                  productsInCategory.map(product => <ProductCard key={product.id} product={product} setFavorites={setFavorites} favorites={favorites} />)
                }
              
            </div>
    </>
  )
}

export default Category
Category.propTypes = {
  setFavorites : PropTypes.func,
  favorites : PropTypes.array
}