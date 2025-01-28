function Header() {
  return (
    <>
      <header className="w3-container w3-theme w3-padding" id="myHeader">
        <i
          onClick="w3_open()"
          className="fa fa-bars w3-xlarge w3-button w3-theme"
        ></i>
        <div className="w3-center">
          <h4>BEAUTIFUL RESPONSIVE WEB SITES</h4>
          <h1 className="w3-xxxlarge w3-animate-bottom">BUILT WITH W3.CSS</h1>
          <div className="w3-padding-32">
            <button
              className="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey"
              onClick="document.getElementById('id01').style.display='block'"
              style={{ fontWeight: "900" }}
            >
              LEARN W3.CSS
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
