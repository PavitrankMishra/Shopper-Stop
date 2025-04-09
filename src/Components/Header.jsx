import React from "react";
import styles from "../Components/Header.module.css";

const Header = ({ cartItems }) => {
  const cartCount = cartItems.length;
  return (
    <>
      <header className={styles.headerContainer}>
        <h1>🛒 My Store</h1>
        <p>Items in Cart: {cartCount}</p>
      </header>
    </>
  );
};

export default Header;
