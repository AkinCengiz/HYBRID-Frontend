import { useContext } from "react"
import { ColorContext } from "../contexts/ColorContext"

function Colors() {
    const {colors} = useContext(ColorContext);
  return (
    <>
        <div className="w3-row">
            {
                colors.map((color,index) => {
                    return( <div key={index} className={`w3-col w3-container m2 w3-${color}`}>
                        <p>{color.toUpperCase()}</p>
                    </div>
                )})
            }
        </div>
    </>
  )
}

export default Colors