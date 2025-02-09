import { useParams } from "react-router-dom";
import CartLoading from "../../components/CartLoading";
import Row from "../../components/Row";
import CatCard from "../../components/CatCard";
import useFetchCatsOfCategoryApi from "../../customHooks/fetch/useFetchCatsOfCategoryApi";


function FetchCatsOfCategory() {
    const {categoryName} = useParams();
    const [data, isLoading, isError, error] = useFetchCatsOfCategoryApi(categoryName);
  return (
    <div>
        <h2>Breed : {categoryName}</h2>
        {
            isError ? <h3>{error}</h3> : isLoading ? <CartLoading/> : ""
        }
        <Row>
            {
                data.map(cat => <CatCard key={cat.id} cat={cat}/>)
            }
        </Row>
    </div>
  )
}

export default FetchCatsOfCategory