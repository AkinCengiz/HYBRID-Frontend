import PropTypes from "prop-types"

function Card({info}) {
  return (
    <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>{info.title}</h3>
            <br />
            <i
              className={`${info.icon} w3-margin-bottom w3-text-theme`}
              style={{ fontSize: "120px" }}
            ></i>
            {
                info.features.map((feature,index) => <p key={index}>{feature}</p>)
            }
          </div>
        </div>
  )
}

export default Card
Card.propTypes = {
    info : PropTypes.object
}