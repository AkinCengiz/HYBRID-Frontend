import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import useAxiosCategoriesApi from "../../customHooks/axios/useAxiosCategoriesApi"

function AxiosCategories() {
    const [data, isLoading, isError, error] = useAxiosCategoriesApi();
  return (
    <div>
        <h2>Axios Page</h2>
        {
            isError ? <h3>{error}</h3> : isLoading ? <Loading/> : ""
        }
        <ul className="list-group">
            {
                data.map(item => <li className="list-group-item" key={item.id}><Link className="nav-link">{item.name}</Link></li>)
            }
        </ul>

    </div>
  )
}

export default AxiosCategories