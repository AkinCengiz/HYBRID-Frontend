import { Outlet } from "react-router-dom"
import Categories from "../components/Categories"
import PropTypes from "prop-types"
//import Products from "./Products"

function ProductList({setFavorites, favorites}) {
  return (
    <div className="row justify-content-between w-100">
        <div className="col-sm-12 col-md-9">
          <Outlet setFavorites={setFavorites} favorites={favorites} />
        </div>
        <div className="col-sm-12 col-md-3">
          <Categories/>
        </div>
      </div>
  )
}

export default ProductList

ProductList.propTypes = {
  setFavorites : PropTypes.func,
  favorites : PropTypes.array
}