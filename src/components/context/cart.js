// import React from "react";
// import { useCart } from "./CartContext";

// function Cart() {
//   const { cartItems, addItem } = useCart();

//   const addToCart = (product) => {
//     addItem({
//       id: product.id,
//       title: product.title,
//       image: product.image,
//       price: product.price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               <img src={item.image} alt={item.title} />
//               <div>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;
