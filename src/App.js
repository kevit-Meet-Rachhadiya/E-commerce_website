import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./components/store/store";
import OneProduct from "./components/pages/oneproduct";
import Footer from "./components/Header/footer";
import Products from "./components/pages/products";
import Login from "./components/login/login";
import Navbar from "./components/Header/Navbar";
import Cart from "./components/context/cart";
import UserProfile from "./components/pages/userprofile";

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/eshop/*"
            element={
              <div>
                <Navbar />
                <Products />
                <Footer />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div>
                <Navbar />
                <Cart />
                <Footer />
              </div>
            }
          />

          <Route
            path="/products/:id"
            element={
              <div>
                <Navbar />
                <OneProduct />
                <Footer />
              </div>
            }
          />
          <Route
            path="UserProfile"
            element={
              <div>
                <Navbar />
                <UserProfile />
              </div>
            }
          />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
