import UserList from "./components/UserList";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  const firstname = "Akın CENGİZ";
  const cardTitle = "Props Title";
  const cardImage = "https://picsum.photos/300/200?random=1";
  const description = "Kendi oluşturduğumuz card componentinin açıklama kısmını props ile aldık..."
  const cities = ["İstanbul", "İzmir", "Ankara", "Sakarya", "Nevşehir"];
  const mapCities = cities.map((city, index) => <li key={index}>{city}</li>);
  const products = [
    {
      id: 1,
      name: "Toshiba Laptop",
      stock: 15,
      price: 15000,
      category: "Bilgisayar",
    },
    {
      id: 2,
      name: "HP Laptop",
      stock: 15,
      price: 15000,
      category: "Bilgisayar",
    },
    {
      id: 3,
      name: "Casper Desktop",
      stock: 15,
      price: 15000,
      category: "Bilgisayar",
    },
    {
      id: 4,
      name: "Dell Desktop",
      stock: 15,
      price: 15000,
      category: "Bilgisayar",
    },
    {
      id: 5,
      name: "IPhone 15",
      stock: 15,
      price: 15000,
      category: "Cep Telefonu",
    },
    {
      id: 6,
      name: "IPhone 14",
      stock: 15,
      price: 15000,
      category: "Cep Telefonu",
    },
    {
      id: 7,
      name: "Samsung S22",
      stock: 15,
      price: 15000,
      category: "Cep Telefonu",
    },
    {
      id: 8,
      name: "LG Televizyon",
      stock: 15,
      price: 15000,
      category: "Televizyon",
    },
    {
      id: 9,
      name: "Philips Televizyon",
      stock: 15,
      price: 15000,
      category: "Televizyon",
    },
    {
      id: 10,
      name: "Samsung Televizyon",
      stock: 15,
      price: 15000,
      category: "Televizyon",
    },
  ];
  const styles = {
    h3Style: {
      backgroundColor: "green",
      color: "white",
      padding: "5px",
    },
  };

  return (
    <>
    <Card cardTitle={cardTitle} description={description} cardPicture={cardImage} />
      <h2>City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
      <h2>Map City List</h2>
      <ul>{mapCities}</ul>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Product List By Category</h2>
      <ul>
        {products
          .filter((product) => product.category === "Televizyon")
          .map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
      </ul>
      <h4>{firstname}</h4>
      <h3 style={styles.h3Style}>Component Start</h3>
      <Button />
      <UserList />
      <SecondComponent />
      <InternalComponent />
      <hr />
      <SecondComponent />
      <hr />
      <UserList />
    </>
  );
}

function InternalComponent() {
  return (
    <>
      <h2>Yeni Komponent</h2>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Id, sequi vitae.</li>
        <li>Consectetur, accusamus dignissimos!</li>
      </ul>
    </>
  );
}

const SecondComponent = () => {
  return (
    <>
      <h2>Arrow Function Component</h2>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Id, sequi vitae.</li>
        <li>Consectetur, accusamus dignissimos!</li>
      </ul>
    </>
  );
};

export default App;
