import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";


function SiteRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* Alttaki route kaldırılacak. Sayfa içerisinden yönlendirme yapılacak */}
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default SiteRoutes