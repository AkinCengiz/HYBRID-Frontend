import Colors from "./Colors";

function SectionOne() {
  return (
    <>
      <div className="w3-container">
        <hr />
        <div className="w3-center">
          <h2>Color Classes</h2>
        </div>

        <Colors />

        <hr />
        <div className="w3-center">
          <h2>Built-In Responsiveness</h2>
          <p className="w3-large">Resize the page to see the effect!</p>
        </div>
        <br />

        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-blue w3-border">
            <h5>w3-half</h5>
            <p>The w3-half class uses half (50%) of the screen window.</p>
            <p>
              On small screens (max 600 pixels) it automatically resizes to full
              screen width.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>w3-half</h5>
          </div>
        </div>
        <br />

        <div className="w3-row w3-border">
          <div className="w3-third w3-container w3-green">
            <h5>w3-third</h5>
            <p>
              The w3-third class uses one third (33.33%) of the screen widow.
            </p>
            <p>
              On small screens (max 600 pixels) it automatically resizes to full
              screen width.
            </p>
          </div>
          <div className="w3-third w3-container">
            <h5>w3-third</h5>
          </div>
          <div className="w3-third w3-container">
            <h5>w3-third</h5>
          </div>
        </div>
        <br />

        <div className="w3-row w3-border">
          <div className="w3-quarter w3-container w3-red">
            <h5>w3-quarter</h5>
            <p>
              The w3-quarter class uses one quarter (25%) of the screen window.
            </p>
            <p>
              On small screens (max 600 pixels) it automatically resizes to full
              screen width.
            </p>
          </div>
          <div className="w3-quarter w3-container">
            <h5>w3-quarter</h5>
          </div>
          <div className="w3-quarter w3-container">
            <h5>w3-quarter</h5>
          </div>
          <div className="w3-quarter w3-container">
            <h5>w3-quarter</h5>
          </div>
        </div>

        <div className="w3-center">
          <h2>Containers</h2>
          <p>Use containers to create headers, sections and footers.</p>
        </div>

        <header className="w3-container w3-blue-grey">
          <h2>Header</h2>
        </header>

        <div className="w3-padding w3-white w3-display-container">
          <span
            onClick="this.parentElement.style.display='none'"
            className="w3-button w3-display-topright"
          >
            <i className="fa fa-remove"></i>
          </span>
          <h2>London</h2>
          <p>
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </p>
          <p>
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
          </p>
          <p>
            By the way, you can add a close icon to all containers if you want
            the ability to hide them. Look to your right!
          </p>
        </div>

        <footer className="w3-container w3-blue-grey">
          <h5>Footer</h5>
          <p className="w3-opacity">Footer information goes here</p>
        </footer>

        <hr />
        <div className="w3-center">
          <h2>Color Themes</h2>
          <p>
            The color themes have been designed to work harmoniously with each
            other.
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
