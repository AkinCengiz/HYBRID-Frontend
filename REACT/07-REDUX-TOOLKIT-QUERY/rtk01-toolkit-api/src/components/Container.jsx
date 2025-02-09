import PropTypes from "prop-types"

function Container({children, className}) {
  return (
    <div className={`container ${className}`}>
        {children}
    </div>
  )
}

export default Container

Container.propTypes = {
    children : PropTypes.element,
    className : PropTypes.string
}