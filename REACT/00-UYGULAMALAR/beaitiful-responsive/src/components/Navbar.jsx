import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav
        className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center"
        style={{ display: "none" }}
        id="mySidebar"
      >
        <h1 className="w3-xxxlarge w3-text-theme">Side Navigation</h1>
        <button className="w3-bar-item w3-button" onClick="w3_close()">
          Close <i className="fa fa-remove"></i>
        </button>
        <Link to="/" className="w3-bar-item w3-button">
          Link 1
        </Link>
        <Link to="/" className="w3-bar-item w3-button">
          Link 2
        </Link>
        <Link to="/" className="w3-bar-item w3-button">
          Link 3
        </Link>
        <Link to="/" className="w3-bar-item w3-button">
          Link 4
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
