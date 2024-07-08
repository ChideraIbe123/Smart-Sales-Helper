// src/App.js
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import History from "./components/History";
import store from "./store/store";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome setUsername={setUsername} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Header username={username} />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
