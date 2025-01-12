import PropTypes from "prop-types"
import { ABOUTS } from "../../../data";
import AboutHeader from "./AboutHeader";
import AboutItem from "./AboutItem";

function About(props) {

  return (
    <>
      <AboutHeader generalCount={props.generalCount}/>
      <div className="w3-row-padding w3-grayscale">
        {
          ABOUTS.map(about => <AboutItem key={about.id} about={about} incrementGeneralCount={props.incrementGeneralCount}/>)
        }        
      </div>
    </>
  );
}

export default About;
About.propTypes = {
  generalCount : PropTypes.number,
  incrementGeneralCount : PropTypes.func
}