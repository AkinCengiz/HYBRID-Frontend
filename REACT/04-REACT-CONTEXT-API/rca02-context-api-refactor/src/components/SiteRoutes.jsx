import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

function SiteRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default SiteRoutes