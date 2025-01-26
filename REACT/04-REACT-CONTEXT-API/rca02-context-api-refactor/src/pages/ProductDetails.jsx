//import { useParams } from "react-router-dom"

import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

function ProductDetails() {
    //const {id} = useParams();
    const {product} = useContext(ProductContext);

  return (
    <>
        <div className="row mt-3">
            <div className="col-4 border p-5">
                <img src={product.image} alt={product.title} style={{width : "100%"}} />
            </div>
            <div className="col-8 border p-1">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><p>Ürün Adı :</p> <p>{product.title}</p></li>
                    <li className="list-group-item"><p>Kategori :</p> <p>{product.category}</p></li>
                    <li className="list-group-item"><p>Açıklama :</p> <p>{product.description}</p></li>
                    <li className="list-group-item"><p>Fiyat :</p> <p>{product.price}</p></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProductDetails