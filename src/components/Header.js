// src/components/Header.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure CSS is imported

const Header = ({ username }) => {
  const { acceptedItems, rejectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = acceptedItems.length + rejectedItems.length;

  const handleGenerate = () => {
    alert("Success");
  };

  return (
    <header id="app-header">
      <div className="header-container">
        <div className="header-navbar">
          <div className="header-nav-left">
            <Link to="/home" className="username-button">
              {username}
            </Link>
          </div>
          <div className="header-nav-center">
            <Link className="active" to="/">
              <h4>Smart Sales Helper</h4>
            </Link>
          </div>
          <div className="header-nav-right">
            <div
              title="Cart"
              className="header-cart-icon"
              onClick={() => handleOpenCart(true)}
            >
              <img src="/images/account2.png" alt="bag-icon" />
              <span className="header-badge">{cartQuantity}</span>
            </div>
          </div>
        </div>
        <div className="header-nav-menu">
          <button className="generate-button" onClick={handleGenerate}>
            Generate
          </button>
          <Link className="active" to="/search">
            Click To Search Catalog By ID
          </Link>
          <Link className="history-button" to="/history">
            History
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
