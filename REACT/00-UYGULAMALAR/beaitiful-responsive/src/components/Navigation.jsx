function Navigation() {
  return (
    <>
      <div className="w3-container">
        <hr />
        <h2 className="w3-center">Navigation</h2>

        <div className="w3-bar w3-theme">
          <a to="/" className="w3-bar-item w3-button w3-padding-16">
            Home
          </a>
          <a to="/" className="w3-bar-item w3-button w3-padding-16">
            Link 1
          </a>
          <div className="w3-dropdown-hover">
            <button className="w3-button w3-padding-16">
              Dropdown <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block">
              <a to="javascript:void(0)" className="w3-bar-item w3-button">
                Link 1
              </a>
              <a to="javascript:void(0)" className="w3-bar-item w3-button">
                Link 2
              </a>
              <a to="javascript:void(0)" className="w3-bar-item w3-button">
                Link 3
              </a>
            </div>
          </div>
        </div>

        <hr />
        <h2 className="w3-center">Accordions</h2>
        <button
          onClick="myAccFunc('Demo1')"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        >
          Open Section 1
        </button>
        <div id="Demo1" className="w3-hide">
          <div className="w3-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <button
          onClick="myAccFunc('Demo2')"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        >
          Open Section 2
        </button>
        <div id="Demo2" className="w3-hide">
          <a to="/" className="w3-button w3-block w3-left-align">
            Link 1
          </a>
          <a to="/" className="w3-button w3-block w3-left-align">
            Link 2
          </a>
          <a to="/" className="w3-button w3-block w3-left-align">
            Link 3
          </a>
        </div>
        <button
          onClick="myAccFunc('Demo3')"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        >
          Open Section 3
        </button>
        <div id="Demo3" className="w3-hide w3-black">
          <div className="w3-container">
            <p>Accordion with Images:</p>
            <img
              src="img_snowtops.jpg"
              style={{ width: "30%;" }}
              className="w3-animate-zoom"
            />
            <p>French Alps</p>
          </div>
        </div>

        <hr />
        <h2 className="w3-center">Tabs</h2>
        <div className="w3-border">
          <div className="w3-bar w3-theme">
            <button
              className="w3-bar-item w3-button testbtn w3-padding-16"
              onClick="openCity(event,'London')"
            >
              London
            </button>
            <button
              className="w3-bar-item w3-button testbtn w3-padding-16"
              onClick="openCity(event,'Paris')"
            >
              Paris
            </button>
            <button
              className="w3-bar-item w3-button testbtn w3-padding-16"
              onClick="openCity(event,'Tokyo')"
            >
              Tokyo
            </button>
          </div>

          <div id="London" className="w3-container city w3-animate-opacity">
            <h2>London</h2>
            <p>London is the capital city of England.</p>
            <p>
              It is the most populous city in the United Kingdom, with a
              metropolitan area of over 13 million inhabitants.
            </p>
          </div>

          <div id="Paris" className="w3-container city w3-animate-opacity">
            <h2>Paris</h2>
            <p>Paris is the capital of France.</p>
            <p>
              The Paris area is one of the largest population centers in Europe,
              with more than 12 million inhabitants.
            </p>
          </div>

          <div id="Tokyo" className="w3-container city w3-animate-opacity">
            <h2>Tokyo</h2>
            <p>Tokyo is the capital of Japan.</p>
            <p>
              It is the center of the Greater Tokyo Area, and the most populous
              metropolitan area in the world.
            </p>
          </div>
        </div>

        <hr />
        <h2 className="w3-center">Buttons</h2>
        <div className="w3-center">
          <br />
          <a className="w3-button w3-theme">Button</a>
          <a className="w3-button w3-theme">Button</a>
          <a className="w3-button w3-theme-d3 w3-disabled">Button</a>
          <br />
          <br />
          <a className="w3-button w3-circle w3-large w3-black">
            <i className="fa fa-plus"></i>
          </a>
          <a className="w3-button w3-circle w3-large w3-theme">
            <i className="fa fa-plus"></i>
          </a>
          <a className="w3-button w3-circle w3-large w3-card-4">
            <i className="fa fa-plus"></i>
          </a>
        </div>
        <br />
        <div className="w3-center">
          <div className="w3-dropdown-hover">
            <button className="w3-button w3-theme">
              Dropdown <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              <a to="/" className="w3-bar-item w3-button">
                Link 1
              </a>
              <a to="/" className="w3-bar-item w3-button">
                Link 2
              </a>
              <a to="/" className="w3-bar-item w3-button">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
