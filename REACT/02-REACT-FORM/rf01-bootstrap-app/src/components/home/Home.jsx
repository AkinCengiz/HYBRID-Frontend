import Content from "./Content";
import LeftSidebar from "./LeftSidebar";

function Home() {
  return (
    <div className="row bg-primary">
      <LeftSidebar/>
      <Content/>
    </div>
  );
}

export default Home;
