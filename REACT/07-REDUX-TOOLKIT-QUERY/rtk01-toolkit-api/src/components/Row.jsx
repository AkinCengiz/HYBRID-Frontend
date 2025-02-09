import PropTypes from "prop-types"

function Row({children,className}) {
  return (
    <div className={`row ${className}`}>
        {children}
    </div>
  )
}

export default Row

Row.propTypes = {
    children : PropTypes.element,
    className : PropTypes.string
}