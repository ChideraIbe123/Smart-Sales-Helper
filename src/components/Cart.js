// src/components/Cart.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, toggleCart } from "../store/slices/cartSlice";
import "./Cart.css"; // Ensure CSS is imported

const Cart = () => {
  const dispatch = useDispatch();
  const { acceptedItems, rejectedItems, isCartOpen } = useSelector(
    (state) => state.cart
  );

  const handleCloseCart = () => {
    dispatch(toggleCart(false));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleSubmit = () => {
    alert("Submitted!");
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Accepted Items</h2>
        <ul>
          {acceptedItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>

        <h2>Rejected Items</h2>
        <ul>
          {rejectedItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>

        <div className="cart-actions">
          <button className="close-cart" onClick={handleCloseCart}>
            Close
          </button>
          <button className="submit-cart" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
