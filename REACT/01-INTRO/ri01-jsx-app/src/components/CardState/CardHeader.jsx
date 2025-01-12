import PropTypes from "prop-types"
import CardButton from "./CardButton"

function CardHeader(props) {
  return (
    <>
        <h5 >Card State Title</h5>
        <button onClick={props.handleClick}>Follow</button>
        <hr />
        <CardButton handleClick={props.handleClick}/>
    </>
  )
}

export default CardHeader

CardHeader.propTypes = {
    handleClick : PropTypes.func
}