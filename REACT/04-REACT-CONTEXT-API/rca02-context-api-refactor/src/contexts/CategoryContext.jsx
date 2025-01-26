import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CategoryContext = createContext();

function CategoryContextProvider({children}){
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => setCategories(data));
    },[categories]);

    const categoryValues = {
        categories,
        setCategories   
    }

    return <CategoryContext.Provider value={categoryValues}>
        {children}
    </CategoryContext.Provider>
}

export {CategoryContext, CategoryContextProvider}

CategoryContextProvider.propTypes = {
    children : PropTypes.element
}