import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./components/store/store";
import OneProduct from "./components/pages/oneproduct";

import Products from "./components/pages/products";
import Login from "./components/login/login";
import Navbar from "./components/Header/Navbar";
import Cart from "./components/context/cart";

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/eshop/*"
            element={
              <div>
                <Navbar />
                <Products />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div>
                <Navbar />
                <Cart />
              </div>
            }
          />

          <Route
            path="/products/:id"
            element={
              <div>
                <Navbar />
                <OneProduct />
              </div>
            }
          />
        </Routes>
      </>
    </Provider>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Products from "./components/pages/products";
// import Login from "./components/login/login";
// import Navbar from "./components/Header/Navbar";
// import Cart from "./components/context/cart";

// function App() {
//   const [cartItems, setCartItems] = React.useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (product) => {
//     const newCartItems = cartItems.filter((item) => item.id !== product.id);
//     setCartItems(newCartItems);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <>
//       {/* <Navbar cartItems={cartItems} /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/eshop/*"
//           element={
//             <div>
//               <Navbar cartItems={cartItems} />
//               <Products addToCart={addToCart} />
//             </div>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <Cart
//               cartItems={cartItems}
//               removeFromCart={removeFromCart}
//               clearCart={clearCart}
//             />
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;
