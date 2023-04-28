import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "cart/removeFromCart", payload: productId });
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p className="cart-total">
                  Total: <strong>${cartTotal.toFixed(2)}</strong>
                </p>
                <button className="checkout-btn">Checkout</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;

// import { useSelector, useDispatch } from "react-redux";
// import "./cart.css";

// function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartItems.cart);

//   const handleRemoveFromCart = (productId) => {
//     dispatch({ type: "cart/removeFromCart", payload: productId });
//   };

//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-container">
//       <h1 className="cart-heading">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="cart-empty-message">Your cart is empty.</p>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div className="cart-item-container" key={item.id}>
//               <div className="cart-item">
//                 <img
//                   className="cart-item-image"
//                   src={item.image}
//                   alt={item.title}
//                 />
//                 <div className="cart-item-details">
//                   <h3 className="cart-item-title">{item.title}</h3>
//                   <p className="cart-item-price">${item.price}</p>
//                   <p className="cart-item-quantity">
//                     Quantity: {item.quantity}
//                   </p>
//                   <button
//                     className="remove-from-cart-btn"
//                     onClick={() => handleRemoveFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//                 <div className="cart-item-total">
//                   <p className="cart-item-total-text">
//                     Total:{" "}
//                     <strong>${(item.price * item.quantity).toFixed(2)}</strong>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total-container">
//             <p className="cart-total">
//               Total: <strong>${cartTotal.toFixed(2)}</strong>
//             </p>
//             <button className="checkout-btn">Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
