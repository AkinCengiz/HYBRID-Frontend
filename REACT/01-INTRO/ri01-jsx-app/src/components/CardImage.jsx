import PropTypes from "prop-types"
function CardImage(props) {
  return (
    <img src={props.cardPicture} alt="Lorem Picsum Random Image" style={{maxWidth:"100%"}}/>
  )
}

export default CardImage

CardImage.propTypes = {
    cardPicture : PropTypes.element
}