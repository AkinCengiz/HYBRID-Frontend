
function Card() {
  return (
    <div className="card" style={{width: "33%", marginBottom:"5px"}}>
        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
  )
}

export default Card