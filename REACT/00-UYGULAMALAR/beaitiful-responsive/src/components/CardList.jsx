function CardList() {
  return (
    <>
      <div className="w3-row-padding w3-center w3-margin-top">
        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Responsive</h3>
            <br />
            <i
              className="fa fa-desktop w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>Built-in responsiveness</p>
            <p>Mobile first fluid grid</p>
            <p>Fits any screen sizes</p>
            <p>PC Tablet and Mobile</p>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Standard CSS</h3>
            <br />
            <i
              className="fa fa-css3 w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>Standard CSS only</p>
            <p>Easy to learn</p>
            <p>No need for jQuery</p>
            <p>No JavaScript library</p>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Design</h3>
            <br />
            <i
              className="fa fa-diamond w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>Paper like design</p>
            <p>Bold colors and shadows</p>
            <p>Equal across platforms</p>
            <p>Equal across devices</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardList;
