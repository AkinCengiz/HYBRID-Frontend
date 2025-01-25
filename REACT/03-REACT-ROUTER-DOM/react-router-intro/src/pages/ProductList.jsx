import { Outlet } from "react-router-dom"
import Categories from "../components/Categories"
//import Products from "./Products"

function ProductList() {
  return (
    <div className="row justify-content-between w-100">
        <div className="col-sm-12 col-md-9">
          <Outlet />
        </div>
        <div className="col-sm-12 col-md-3">
          <Categories/>
        </div>
      </div>
  )
}

export default ProductList