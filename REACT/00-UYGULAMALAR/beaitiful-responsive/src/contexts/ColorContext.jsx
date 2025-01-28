import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ColorContext = createContext();

function ColorContextProvider({children}){
    const colorList = [
        "red","blue","blue-grey","teal","yellow","orange"];
    const [colors,setColors] = useState([])

    useEffect(() => {
        setColors(colorList);
    },[]);

    const colorValues = {
        setColors,
        colors
    };

    return <ColorContext.Provider value={colorValues}>
        {children}
    </ColorContext.Provider>
}

export {ColorContext, ColorContextProvider}

ColorContextProvider.propTypes = {
    children : PropTypes.element
}