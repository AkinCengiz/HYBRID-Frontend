import PropTypes from "prop-types"

function ProductImage({product}) {
  return (
    <>
    <div className="col-4 border p-5">
            <img src={product.image} alt={product.title} style={{width : "100%"}} />
        </div>
    </>
  )
}

export default ProductImage

ProductImage.propTypes = {
    product : PropTypes.object
}