// src/components/PurchaseForm.js
import React, { useState } from "react";
import "./PurchaseForm.css"; // Create and import CSS for styling

const PurchaseForm = ({ onClose }) => {
  const [purchase, setPurchase] = useState({
    id: "",
    title: "",
    price: "",
    date: "",
    rating: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setPurchase({ ...purchase, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., validation, sending data)
    alert("Purchase added: " + JSON.stringify(purchase));
    onClose(); // Close the form after submission
  };

  return (
    <div className="purchase-form-overlay">
      <div className="purchase-form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Add Purchase</h2>
        <input
          name="id"
          placeholder="ID"
          value={purchase.id}
          onChange={handleChange}
        />
        <input
          name="title"
          placeholder="Title"
          value={purchase.title}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          value={purchase.price}
          onChange={handleChange}
        />
        <input
          name="date"
          placeholder="Date"
          value={purchase.date}
          onChange={handleChange}
        />
        <input
          name="rating"
          placeholder="Rating"
          value={purchase.rating}
          onChange={handleChange}
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={purchase.imageUrl}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PurchaseForm;
