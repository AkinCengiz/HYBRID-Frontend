import PropTypes from "prop-types"
function SingleProject(props) {
  return (
    <>
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                  <div className="w3-display-topleft w3-black w3-padding">
                    {props.project.name}
                  </div>
                  <img
                    src={props.project.imgSrc}
                    alt={props.project.imgAlt}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </>
  )
}

export default SingleProject

SingleProject.propTypes = {
    project : PropTypes.object
}