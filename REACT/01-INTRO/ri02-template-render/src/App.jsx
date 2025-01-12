import { useState } from "react";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  const [generalCount,setGeneralCount] = useState(0);
  function incrementGeneralCount(){
    setGeneralCount(generalCount + 1);
  }
  return (
    <>
      <Navbar generalCount={generalCount} />
      <Header />
      <Content generalCount={generalCount} setGeneralCount={setGeneralCount} incrementGeneralCount={incrementGeneralCount} />
      <Footer />
    </>
  );
}

export default App;
