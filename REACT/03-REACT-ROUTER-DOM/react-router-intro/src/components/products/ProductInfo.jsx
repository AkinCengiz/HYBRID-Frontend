import PropTypes from "prop-types"

function ProductInfo({product}) {
  return (
    <div className="col-8 border p-1">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><p>Ürün Adı :</p> <p>{product.title}</p></li>
            <li className="list-group-item"><p>Kategori :</p> <p>{product.category}</p></li>
            <li className="list-group-item"><p>Açıklama :</p> <p>{product.description}</p></li>
            <li className="list-group-item"><p>Fiyat :</p> <p>{product.price}</p></li>
        </ul>
        </div>
  )
}

export default ProductInfo

ProductInfo.propTypes = {
    product : PropTypes.object
}