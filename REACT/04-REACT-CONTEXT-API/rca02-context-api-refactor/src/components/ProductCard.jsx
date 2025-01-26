import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="p-1">
      <div className="card p-3">
        <img src={product.image} className="card-img-top" alt={product.title} style={{height : "200px"}} />
        <div className="card-body">
          <h5 className="card-title">{product.title.substring(0,20)}</h5>
          <p className="card-text">{product.description.substring(0,100)}</p>
          <Link to="/productdetails" className="btn btn-primary">
            Ürün Detay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
