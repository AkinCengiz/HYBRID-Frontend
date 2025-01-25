import { useState } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./components/SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [user,setUser] = useState(null);
  const [favorites,setFavorites] = useState([]);


  const handleLogin = () => {
    const newUser = {id : 1, firstname:"Akın", lastname : "Cengiz", username : "akincengiz"};
    setUser(newUser);
    localStorage.setItem("user",JSON.stringify(newUser));
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <SiteRoutes handleLogin={handleLogin} favorites={favorites} setFavorites={setFavorites} />
    </>
  );
}

export default App;
