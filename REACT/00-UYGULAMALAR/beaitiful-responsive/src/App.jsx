import CardList from "./components/CardList";
import Cars from "./components/Cars";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Pagination from "./components/Pagination";
import ProgressBar from "./components/ProgressBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SlideShow from "./components/SlideShow";
import Table from "./components/Table";
import ShadowPaper from "./ShadowPaper";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Modal />
      <CardList />
      <SectionOne />
      <SectionTwo />
      <ShadowPaper />
      <Cars />
      <Table />
      <Forms />
      <ProgressBar />
      <SlideShow />
      <Navigation />
      <Pagination />
      <Footer />
    </>
  );
}

export default App;
