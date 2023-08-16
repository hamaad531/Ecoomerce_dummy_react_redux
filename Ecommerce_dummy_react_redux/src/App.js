import products from "./products.json";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => ( // product work as a prop fetch property or products one by one
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
