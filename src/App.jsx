import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetailPage from "./Components/ProductDetailPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductList cartItems={cartItems} />}
        />
        <Route
          path="/productdetail/:id"
          element={
            <ProductDetailPage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
