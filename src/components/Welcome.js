// src/components/Welcome.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Ensure CSS is imported

const Welcome = ({ setUsername }) => {
  const [username, setUsernameLocal] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(username); // Pass the username to the parent component
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsernameLocal(e.target.value)}
            required
            className="txt-primary"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="txt-primary"
          />
        </div>
        <button type="submit" className="button-main">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Welcome;
