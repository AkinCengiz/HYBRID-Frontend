function Pagination() {
  return (
    <>
      <hr />
      <div className="w3-center">
        <h2>Pagination</h2>

        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              «
            </a>
            <a to="/" className="w3-bar-item w3-button w3-theme w3-hover-theme">
              1
            </a>
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              2
            </a>
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              3
            </a>
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              4
            </a>
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              5
            </a>
            <a to="/" className="w3-bar-item w3-button w3-hover-theme">
              »
            </a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Pagination;
