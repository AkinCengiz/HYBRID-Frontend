function ProgressBar() {
  return (
    <>
      <h2 className="w3-center">Progress Bars</h2>
      <div className="w3-container">
        <div className="w3-light-gray">
          <div
            id="myBar"
            className="w3-center w3-padding w3-theme"
            style={{ width: "5%" }}
          >
            5%
          </div>
        </div>
        <br />
        <button className="w3-btn w3-theme" onClick="move()">
          Click Me
        </button>
      </div>
      <hr />
    </>
  );
}

export default ProgressBar;
