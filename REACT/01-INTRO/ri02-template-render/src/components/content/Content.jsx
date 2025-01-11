import About from "./About";
import Contact from "./Contact";
import ProjectList from "./ProjectList";
import Location from "./Location";

function Content() {
  return (
    <>
      <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
        <ProjectList />
        <About />
        <Contact />
        <Location />
      </div>
    </>
  );
}

export default Content;
