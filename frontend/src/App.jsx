import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetail";
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomerRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
