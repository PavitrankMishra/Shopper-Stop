import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import ProductDetailPage from "./Components/ProductDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/productdetail" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
