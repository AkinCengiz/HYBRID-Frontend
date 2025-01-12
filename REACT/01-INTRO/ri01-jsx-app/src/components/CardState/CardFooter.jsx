import PropTypes from "prop-types"
const CardFooter = ({follow,setFollow}) => {
  return (
    <>
        <button onClick={() => setFollow(follow + 1)}>Follow</button>
        <span>Follow : {follow}</span>
    </>
  )
}

export default CardFooter

CardFooter.propTypes = {
    follow : PropTypes.number,
    setFollow : PropTypes.func
}