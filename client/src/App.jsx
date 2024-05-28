import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";


const App = () => {
  const user = true;
  console.log("BLEED")
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products" element={<ProductList />} />
         <Route path="/success" element={<Success />} />
         <Route path="/products/:category" element={<ProductList />} />
         <Route path="/product" element={<ProductPage />} />
         <Route path="/product/:id" element={<ProductPage />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
         <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;