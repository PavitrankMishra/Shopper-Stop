import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetailPage from "./Components/ProductDetailPage";
import CartPage from "./Components/CartPage";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList cartItems={cartItems} />} />
        <Route
          path="/productdetail/:id"
          element={
            <ProductDetailPage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
