function Footer() {
  return (
    <footer className="w3-container w3-theme-dark w3-padding-16">
      <h3>Footer</h3>
      <p>
        Powered by{" "}
        <a to="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
      <div
        style={{ position: "relative", bottom: "55px" }}
        className="w3-tooltip w3-right"
      >
        <span className="w3-text w3-theme-light w3-padding">Go To Top</span>
        <a className="w3-text-white" to="#myHeader">
          <span className="w3-xlarge">
            <i className="fa fa-chevron-circle-up"></i>
          </span>
        </a>
      </div>
      <p>
        Remember to check out our
        <a
          to="w3css_references.asp"
          className="w3-btn w3-theme-light"
          target="_blank"
        >
          W3.CSS Reference
        </a>
      </p>
    </footer>
  );
}

export default Footer;
