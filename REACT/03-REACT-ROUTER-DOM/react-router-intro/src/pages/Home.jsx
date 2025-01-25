import Categories from "../components/Categories"
import Products from "./Products"
import PropTypes from "prop-types";

function Home({favorites, setFavorites}) {
  return (
    <>
      <div className="row justify-content-between w-100">
        <div className="col-sm-12 col-md-3">
          <Categories/>
        </div>
        <div className="col-sm-12 col-md-9">
          <Products favorites={favorites} setFavorites={setFavorites} />
        </div>
      </div>
    </>
  )
}

export default Home

Home.propTypes = {
  favorites : PropTypes.array,
  setFavorites : PropTypes.func
}