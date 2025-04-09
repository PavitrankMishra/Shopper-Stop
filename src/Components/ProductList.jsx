import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [inputProduct, setInputProduct] = useState("");
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      setUpdatedProducts(data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(inputProduct.toLowerCase())
    );
    setUpdatedProducts(filtered);
  }, [inputProduct, products]);

  return (
    <div className={styles.productContainer}>
      <p className={styles.productHeading}>Products List</p>
      <input
        type="text"
        placeholder="Enter the name of item"
        name="product"
        className={styles.productInput}
        value={inputProduct}
        onChange={(e) => setInputProduct(e.target.value)}
      />

      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {updatedProducts.map((product, index) => (
            <tr
              key={product.id}
              onClick={() => navigate(`/productdetail/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
