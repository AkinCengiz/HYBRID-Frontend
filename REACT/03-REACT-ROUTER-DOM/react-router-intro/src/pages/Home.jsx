import Categories from "../components/Categories"
import Products from "./Products"

function Home() {
  return (
    <>
      <div className="row justify-content-between w-100">
        <div className="col-sm-12 col-md-3">
          <Categories/>
        </div>
        <div className="col-sm-12 col-md-9">
          <Products />
        </div>
      </div>
    </>
  )
}

export default Home