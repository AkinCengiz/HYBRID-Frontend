import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { CategoryContext } from "../contexts/CategoryContext"
import ProductCard from "../components/ProductCard"

function Products() {
  const {products} = useContext(ProductContext)
  const {categories} = useContext(CategoryContext)
  return (
    <>
    
      <div className="row row-cols-md-2">
        <div className="col-md-3">
          <ul className="list-group">
            {              
              categories.map((category,index) => <li className="list-group-item" key={index}>{category}</li>)
            }
          </ul>
        </div>
        <div className="col-md-9">
          <div className="row row-cols-md-4">
            {
              products.map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>        
        </div>
      </div>
    </>
  )
}

export default Products