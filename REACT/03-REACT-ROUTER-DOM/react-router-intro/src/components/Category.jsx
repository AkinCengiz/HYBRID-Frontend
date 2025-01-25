import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "./products/ProductCard";

// Kategoriye ait ürünleri listeleyen komponent



function Category() {
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
                  productsInCategory.map(product => <ProductCard key={product.id} product={product} />)
                }
              
            </div>
    </>
  )
}

export default Category