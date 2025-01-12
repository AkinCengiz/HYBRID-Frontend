import PropTypes from "prop-types"
import About from "./About";
import Contact from "./Contact";
import ProjectList from "./ProjectList";
import Location from "./Location";

function Content({generalCount,setGeneralCount,incrementGeneralCount}) {
  return (
    <>
      <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
        <ProjectList />
        <About generalCount={generalCount} setGeneralCount={setGeneralCount}incrementGeneralCount={incrementGeneralCount}/>
        <Contact />
        <Location />
      </div>
    </>
  );
}

export default Content;
Content.propTypes = {
  generalCount : PropTypes.number,
  setGeneralCount : PropTypes.func,
  incrementGeneralCount : PropTypes.func
}