import React, { useState, useEffect } from "react";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, setCartItems }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  //   const handleQuantityChange = (id) => {
  //     const updatedCart = cartItems.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity || 1) }
  //         : item
  //     );
  //     setCartItems(updatedCart);
  //   };

  //   const handleRemoveItem = (id) => {
  //     const updatedCart = cartItems.filter((item) => item.id !== id);
  //     setCartItems(updatedCart);
  //   };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const handleCheckout = () => {
    // setCartItems([]);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div className={styles.cartPageContainer}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <div className={styles.controls}>
                    <button onClick={decrementCount}>-</button>
                    <span>{count > 0 ? count : 0}</span>

                    <button onClick={incrementCount}>+</button>

                    {/* <button
                      onClick={() => handleRemoveItem(item.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}

      <Link to="/">← Back to Products</Link>

      {showPopup && (
        <div className={styles.popup}>🎉 Order placed successfully!</div>
      )}
    </div>
  );
};

export default CartPage;
