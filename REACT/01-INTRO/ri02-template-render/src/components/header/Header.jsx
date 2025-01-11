function Header() {
  return (
    <>
      <header
        className="w3-display-container w3-content w3-wide"
        style={{maxWidth:"1500px"}}
        id="home"
      >
        <img
          className="w3-image"
          src="./images/architect.jpg"
          alt="Architecture"
          width="1500"
          height="800"
        />
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min">
              <b>BR</b>
            </span>{" "}
            <span className="w3-hide-small w3-text-light-grey">Architects</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
