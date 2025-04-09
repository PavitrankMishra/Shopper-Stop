import React, { useState } from "react";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const CartPage = ({ cartItems, setCartItems }) => {
  const [showPopup, setShowPopup] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <>
      <Header cartItems={cartItems} />
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
                      <button onClick={() => decrementQuantity(item.id)}>
                        -
                      </button>
                      <span style={{ color: "black" }}>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
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

        <Link to="/" className={styles.backLink}>
          ← Back to Products
        </Link>

        {showPopup && (
          <div className={styles.popup}>🎉 Order placed successfully!</div>
        )}
      </div>
    </>
  );
};

export default CartPage;
