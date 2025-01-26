import { createContext, useState } from "react"
import PropTypes from "prop-types"


const ProductContext = createContext();

function ProductContextProvider({children}) {
    // const productList = [
    //     { id : 1, name : "Toshiba Laptop", price : 19000, stock : 19, category : "Bilgisayar"},
    //     { id : 2, name : "HP Laptop", price : 17000, stock : 17, category : "Bilgisayar"},
    //     { id : 3, name : "Casper Desktop", price : 13000, stock : 13, category : "Bilgisayar"},
    //     { id : 4, name : "Lenovo Desktop", price : 14000, stock : 14, category : "Bilgisayar"},
    //     { id : 5, name : "IPhone 15", price : 15000, stock : 15, category : "Cep Telefonu"},
    //     { id : 6, name : "Samsung S20", price : 16000, stock : 16, category : "Cep Telefonu"}
    // ]
    const [products,setProducts] = useState([
        { id : 1, name : "Toshiba Laptop", price : 19000, stock : 19, category : "Bilgisayar"},
        { id : 2, name : "HP Laptop", price : 17000, stock : 17, category : "Bilgisayar"},
        { id : 3, name : "Casper Desktop", price : 13000, stock : 13, category : "Bilgisayar"},
        { id : 4, name : "Lenovo Desktop", price : 14000, stock : 14, category : "Bilgisayar"},
        { id : 5, name : "IPhone 15", price : 15000, stock : 15, category : "Cep Telefonu"},
        { id : 6, name : "Samsung S20", price : 16000, stock : 16, category : "Cep Telefonu"}
    ]);
    const productValues = {
        // products,
        // setProducts
        myProducts : products,
        updateProducts : setProducts
    }
  return (
    <ProductContext.Provider value={productValues}>
        {children}
    </ProductContext.Provider>
  )
}

export {ProductContextProvider,ProductContext}

ProductContextProvider.propTypes = {
    children : PropTypes.element
}