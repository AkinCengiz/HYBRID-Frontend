import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function ProductCard({product, setFavorites, favorites}) {

  const addFavorite = (item) => {
    console.log(item);
    console.log(favorites)
    setFavorites([...favorites,item]);
  }

  return (
    <>
    <div className="p-1">
    <div className="card p-1">
        <Link to={`/productlist/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title} style={{height : "30vh"}} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.title.substring(0,10)}</h5>
          <p className="card-text">
            {product.description.substring(0,100)}...
          </p>
          <p className="lead">{product.price}</p>
          <button className="btn btn-primary" onClick={() => addFavorite(product)}>
            Favorilere Ekle
          </button>
        </div>
      </div>
    </div>      
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
    product : PropTypes.object,
    setFavorites : PropTypes.func,
    favorites : PropTypes.array
}