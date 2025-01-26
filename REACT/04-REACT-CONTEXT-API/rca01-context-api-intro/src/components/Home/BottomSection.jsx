import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"

function BottomSection() {
    const {myProducts} = useContext(ProductContext);
  return (
    <article>
            <h2>Home Section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium at ab voluptas itaque vero deserunt sapiente quibusdam, sunt error molestiae blanditiis adipisci, nostrum, placeat beatae. Repellat et qui eius beatae vero veritatis id eum suscipit!</p>
            <p>Corrupti, pariatur? Reprehenderit voluptates qui neque rem tempora vitae in illo? Minus commodi repellat, voluptas doloribus odit ipsum voluptatibus, consectetur non temporibus, nisi sequi mollitia provident voluptates ab dicta atque maiores quaerat dolorum? Labore, dolores.</p>
            <p>Exercitationem, voluptatem quae aspernatur iusto architecto ipsa atque iure veritatis quidem quia at molestias accusantium voluptate tempore obcaecati ipsum illum possimus sunt eius debitis blanditiis odit magnam. Dolorum, mollitia placeat. Et aliquid hic earum sit.</p>
            <ul>
                {
                    myProducts.map(product => <li key={product.id}>{product.name}</li>)
                }
            </ul>
        </article>
  )
}

export default BottomSection