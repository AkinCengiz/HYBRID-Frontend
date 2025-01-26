import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { CategoryContext } from "../contexts/CategoryContext";

function Home() {
  const {products} = useContext(ProductContext);
  const {categories} = useContext(CategoryContext)
  return (
    <>
    <ul className="list-group">
      {
        products.map(product => <li className="list-group-item" key={product.id}>{product.title}</li>)
      }
    </ul>
    <ul className="list-group">
      {
        categories.map((category,index) => <li className="list-group-item" key={index}>{category}</li>)
      }
    </ul>
    </>
  )
}

export default Home