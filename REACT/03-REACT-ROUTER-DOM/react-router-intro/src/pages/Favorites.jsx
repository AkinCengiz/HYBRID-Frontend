import PropTypes from "prop-types"
import ProductCard from "../components/products/ProductCard"
import { useEffect, useState } from "react"

function Favorites({favorites}) {
  
  const [myFavorite,setMyFavorite] = useState([])

  useEffect(() => {
    setMyFavorite(favorites)
  },[favorites]);
    
  return (
    <>
      <div className="row row-cols-5">
        {
          myFavorite.map(product => <ProductCard key={product.id} favorites={favorites} product={product} />)
        }
      </div>

    </>
  )
}

export default Favorites

Favorites.propTypes = {
  favorites : PropTypes.array
}