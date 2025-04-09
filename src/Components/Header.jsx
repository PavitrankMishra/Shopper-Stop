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
      <div className={styles.headLeft}>
        <h1>🛒 My Store</h1>
      </div>
      <div className={styles.headRight}>
        <button>Home</button>
        <button onClick={handleCartClick} className={styles.cartButton}>
          Items in Cart: {cartCount}
        </button>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
