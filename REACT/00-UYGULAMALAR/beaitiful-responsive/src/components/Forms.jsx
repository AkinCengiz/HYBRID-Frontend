
function Forms() {
  return (
    <>
      <div className="w3-row-padding">
        <div className="w3-half">
          <h2 className="w3-center">Forms and Lists</h2>
          <form className="w3-container w3-card-4">
            <h2>Input Form</h2>
            <div className="w3-section">
              <input className="w3-input" type="text" required />
              <label>Name</label>
            </div>
            <div className="w3-section">
              <input className="w3-input" type="text" required />
              <label>Email</label>
            </div>
            <div className="w3-section">
              <input className="w3-input" type="text" required />
              <label>Subject</label>
            </div>

            <div className="w3-row">
              <div className="w3-half">
                <input
                  id="milk"
                  className="w3-check"
                  type="checkbox"
                  checked="checked"
                />
                <label>Milk</label>
                <br />
                <input id="sugar" className="w3-check" type="checkbox" />
                <label>Sugar</label>
                <br />
                <input
                  id="lemon"
                  className="w3-check"
                  type="checkbox"
                  disabled
                />
                <label>Lemon (Disabled)</label>
                <br />
                <br />
              </div>

              <div className="w3-half">
                <input
                  id="male"
                  className="w3-radio"
                  type="radio"
                  name="gender"
                  value="male"
                  checked
                />
                <label>Male</label>
                <br />
                <input
                  id="female"
                  className="w3-radio"
                  type="radio"
                  name="gender"
                  value="female"
                />
                <label>Female</label>
                <br />
                <input
                  id="unknown"
                  className="w3-radio"
                  type="radio"
                  name="gender"
                  value=""
                  disabled
                />
                <label> Dont know (Disabled)</label>
              </div>
            </div>
          </form>
        </div>
        <div className="w3-half">
          <div className="w3-card-4 w3-container">
            <h2>Lists</h2>
            <ul className="w3-ul w3-margin-bottom">
              <li>Jill</li>
              <li>Eve</li>
              <li>Adam</li>
            </ul>
            <br />
            <ul className="w3-ul w3-border w3-hoverable">
              <li className="w3-theme">Jill</li>
              <li>Eve</li>
              <li>Adam</li>
              <li>Steve</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Forms;
