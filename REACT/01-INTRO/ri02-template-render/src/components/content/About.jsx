import { ABOUTS } from "../../../data";
import AboutHeader from "./AboutHeader";
import AboutItem from "./AboutItem";

function About() {
  return (
    <>
      <AboutHeader/>
      <div className="w3-row-padding w3-grayscale">
        {
          ABOUTS.map(about => <AboutItem key={about.id} about={about}/>)
        }        
      </div>
    </>
  );
}

export default About;
