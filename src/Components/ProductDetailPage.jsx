import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetailPage.module.css";
import Header from "./Header";

const ProductDetailPage = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCartItems([...cartItems, product]);
      alert(`${product.title} added to cart!`);
    } else {
      alert(`${product.title} is already in cart!`);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header cartItems={cartItems} />
      <div className={styles.singleProductContainer}>
        <div className={styles.leftPart}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.rightPart}>
          <h2>{product.title}</h2>
          <h3>Product Description:</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
