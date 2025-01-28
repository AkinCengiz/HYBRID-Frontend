
function Cars() {
  return (
    <>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-card">
            <img src="./images/car.jpg" alt="Car" style={{ width: "100%" }} />
            <div className="w3-container">
              <p>w3-card</p>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card-4">
            <img src="./images/car.jpg" alt="Car" style={{ width: "100%" }} />
            <div className="w3-container">
              <p>w3-card-4</p>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card-4">
            <img src="./images/car.jpg" alt="Car" style={{ width: "100%" }} />
            <div className="w3-container">
              <p>w3-card-4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;
