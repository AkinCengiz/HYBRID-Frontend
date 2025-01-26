import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserContextProvider({children}){
    const [users,setUsers] = useState([
        { id : 1, firstname : "Betül", lastname : "Aktoprak"},
        { id : 2, firstname : "Bilal", lastname : "Kayhan"},
        { id : 3, firstname : "Efe Can", lastname : "Demir"},
        { id : 4, firstname : "Halil İbrahim", lastname : "Karakuş"},
        { id : 5, firstname : "Hatice Kübra", lastname : "Tosun"},
        { id : 6, firstname : "Hüseyin", lastname : "Çiçek"},
        { id : 7, firstname : "Mehmet", lastname : "Alakuş"},
        { id : 8, firstname : "Mehmet", lastname : "Albayrak"},
        { id : 9, firstname : "Mehmet Fatih", lastname : "Bezan"},
        { id : 10, firstname : "Melih Can", lastname : "Akgüneş"},
        { id : 11, firstname : "Mutlu", lastname : "Tayfun"},
        { id : 12, firstname : "Orçun", lastname : "Gökoluk"},
        { id : 13, firstname : "Simay", lastname : "Seyman"},
        { id : 14, firstname : "Akın", lastname : "Cengiz"}
    ])

    const userValues = {
        users,
        setUsers
    }

    return (
        <UserContext.Provider value={userValues}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}

UserContextProvider.propTypes = {
    children : PropTypes.element
}