import { Route, Routes } from "react-router-dom"
import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Row from "./components/Row"
import HomePage from "./pages/HomePage"
import FetchCategories from "./pages/fetch/FetchCategories"
import AxiosCategories from "./pages/axios/AxiosCategories"
import ToolkitQueryCategories from "./pages/toolkitQuery/ToolkitQueryCategories"
import FetchCatsOfCategory from "./pages/fetch/FetchCatsOfCategory"


function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Row className={"mt-3"}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/fetchcategories" element={<FetchCategories/>} />
            <Route path="/fetchcategories/:categoryName" element={<FetchCatsOfCategory/>} />
            <Route path="/axioscategories" element={<AxiosCategories/>} />
            <Route path="/toolkitcategories" element={<ToolkitQueryCategories/>} />
          </Routes>
        </Row>
      </Container>
    </>
  )
}

export default App
