import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const CardContext = createContext();

function CardContextProvider({children}){
    const infos = [
        {
            id : 1,
          title: "Responsive",
          icon: "fa fa-desktop",
          features : [
            "Built-in responsiveness",
            "Mobile first fluid grid",
            "Fits any screen sizes",
            "PC Tablet and Mobile",
          ],
        },
        {
            id : 2,
          title: "Standard CSS",
          icon: "fa fa-css3",
          features : [
            "Standard CSS only",
            "Easy to learn",
            "No need for jQuery",
            "No JavaScript library",
          ],
        },
        {
            id : 3,
          title: "Design",
          icon: "fa fa-diamond",
          features : [
            "Paper like design",
            "Bold colors and shadows",
            "Equal across platforms",
            "Equal across devices",
          ],
        }
    ]
    const [cardInfos, setCardInfos] = useState([]);
    useEffect(() => {
        setCardInfos(infos);
    },[]);

    const cardValues = {
        cardInfos, setCardInfos
    }

    return <CardContext.Provider value={cardValues}>
        {children}
    </CardContext.Provider>
}

export {CardContext, CardContextProvider}

CardContextProvider.propTypes = {
    children : PropTypes.element
}