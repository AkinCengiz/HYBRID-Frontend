import PropTypes from "prop-types"
import CardImage from "./CardImage"
function Card(props) {
    const styles = {
        cardStyle : {
            width : "15rem",
            border : "1px solid silver",
            borderRadius : "3px",
            padding : "3px",
            boxSizing : "border-box"
        },
        buttonStyle : {
            display:"block",
            padding : "5px",
            border : "1px solid silver",
            backgroundColor : "grey",
            borderRadius : "3px",
            width : "95%",
            margin : "0px auto",
            textDecoration : "none",
            textAlign : "center"
        }
    }

  return (
    <div style={styles.cardStyle}>
    <CardImage cardPicture={props.cardPicture}/>
    <div >
      <h5 >{props.cardTitle}</h5>
      <p >{props.description}</p>
      <a href="#" style={styles.buttonStyle}>Go somewhere</a>
    </div>
  </div>
  )
}

export default Card

Card.propTypes = {
    cardTitle : PropTypes.string,
    description : PropTypes.string,
    cardPicture : PropTypes.element
}