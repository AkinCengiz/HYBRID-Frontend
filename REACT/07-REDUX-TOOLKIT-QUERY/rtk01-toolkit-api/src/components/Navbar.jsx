import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React Toolkit Query</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
                    <NavLink className="nav-link" to="/fetchcategories">Fetch</NavLink>
                    <NavLink className="nav-link" to="/axioscategories">Axios</NavLink>
                    <NavLink className="nav-link" to="/toolkitcategories">Toolkit Query</NavLink>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar