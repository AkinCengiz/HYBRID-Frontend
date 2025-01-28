
function SlideShow() {
  return (
    <>
      <h2 className="w3-center">Slideshows</h2>
      <div
        className="w3-content"
        style={{ maxWidth: "800px", position: "relative" }}
      >
        <img
          className="mySlides w3-animate-opacity"
          src="./snow.jpg"
          style={{ width: "100%" }}
        />
        <img
          className="mySlides w3-animate-opacity"
          src="./lights.jpg"
          style={{ width: "100%" }}
        />
        <img
          className="mySlides w3-animate-opacity"
          src="./mountains.jpg"
          style={{ width: "100%" }}
        />
        <img
          className="mySlides w3-animate-opacity"
          src="./forest.jpg"
          style={{ width: "100%" }}
        />

        <a
          className="w3-button w3-hover-dark-grey"
          style={{ position: "absolute", top: "45%", left: "0" }}
          onClick="plusDivs(-1)"
        >
          ❮
        </a>
        <a
          className="w3-button w3-hover-dark-grey"
          style={{ position: "absolute", top: "45%", right: "0" }}
          onClick="plusDivs(+1)"
        >
          ❯
        </a>
      </div>
    </>
  );
}

export default SlideShow;
