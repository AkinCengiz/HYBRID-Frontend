import PropTypes from "prop-types";

function CatCard({cat}) {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={cat.url} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>

  )
}

export default CatCard

CatCard.propTypes = {
    cat : PropTypes.object
}