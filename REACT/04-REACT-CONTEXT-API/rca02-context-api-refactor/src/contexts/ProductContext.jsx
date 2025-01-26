import {createContext, useState, useEffect} from "react";
import PropTypes from "prop-types"



const ProductContext = createContext();

function ProductContextProvider({children}){
    const [productId,setProductId] = useState(1);
    const [product,setProduct] = useState({});
    const [products,setProducts] = useState([]);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])

    const productValues = {
        products,
        setProducts,
        product,
        setProduct,
        productId,
        setProductId
    }

    return <ProductContext.Provider value={productValues}>
        {children}
    </ProductContext.Provider>
}

export {ProductContext, ProductContextProvider}

ProductContextProvider.propTypes = {
    children : PropTypes.element
}