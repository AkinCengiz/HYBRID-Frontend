import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import SiteRoutes from "./components/SiteRoutes"

function App() {


  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <SiteRoutes />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
