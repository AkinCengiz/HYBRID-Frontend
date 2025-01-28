function Table() {
  return (
    <>
      <div className="w3-container">
        <hr />
        <div className="w3-center">
          <h2>Tables</h2>
          <p className="w3-large">
            Dont worry. W3.CSS takes care of your tables.
          </p>
        </div>
        <div className="w3-responsive w3-card-4">
          <table className="w3-table w3-striped w3-bordered">
            <thead>
              <tr className="w3-theme">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
              </tr>
              <tr className="w3-white">
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>Johnson</td>
                <td>67</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
      </div>
    </>
  );
}

export default Table;
