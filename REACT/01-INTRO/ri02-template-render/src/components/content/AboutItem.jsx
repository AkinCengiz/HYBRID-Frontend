import PropTypes from "prop-types"


function AboutItem(props) {
  return (
    <>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src={props.about.imgSrc} alt={props.about.firstname} style={{width:"100%"}} />
          <h3>{props.about.firstname} {props.about.lastname}</h3>
          <p className="w3-opacity">{props.about.statu}</p>
          <p>
            {props.about.description}
          </p>
          <p>
            <button className="w3-button w3-light-grey w3-block">
              Contact
            </button>
          </p>
        </div>
    </>
  )
}

export default AboutItem

AboutItem.propTypes = {
    about : PropTypes.object
}