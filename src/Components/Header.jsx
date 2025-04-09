import React from "react";
import styles from "../Components/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = ({ cartItems }) => {
  const cartCount = cartItems.length;
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className={styles.headerContainer}>
      <h1>🛒 My Store</h1>
      <button onClick={handleCartClick} className={styles.cartButton}>
        Items in Cart: {cartCount}
      </button>
    </header>
  );
};

export default Header;
