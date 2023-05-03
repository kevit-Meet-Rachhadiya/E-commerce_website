import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Alert, AlertTitle } from "@mui/material";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );
  const [removedItems, setRemovedItems] = useState([]);

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCheckoutSuccess(true);
      setTimeout(() => {
        setCheckoutSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "cart/removeFromCart", payload: productId });
    setRemovedItems([...removedItems, productId]);
  };

  // const handleClick = () => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // };

  const handleIncreaseQuantity = (productId) => {
    setQuantities((prevState) => {
      const newQuantities = {
        ...prevState,
        [productId]: prevState[productId] + 1,
      };
      updateCartItem(productId, newQuantities[productId]);
      return newQuantities;
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities((prevState) => {
      const newQuantities = {
        ...prevState,
        [productId]: prevState[productId] - 1,
      };
      if (newQuantities[productId] < 1) {
        newQuantities[productId] = 1;
      } else {
        updateCartItem(productId, newQuantities[productId]);
      }
      return newQuantities;
    });
  };

  const updateCartItem = (productId, newQuantity) => {
    dispatch({
      type: "cart/updateCartItem",
      payload: {
        productId,
        quantity: newQuantity,
      },
    });
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      !removedItems.includes(item.id)
        ? total + item.price * quantities[item.id]
        : total,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-head">𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐂𝐚𝐫𝐭</h1>
      {cartItems.filter((item) => !removedItems.includes(item.id)).length ===
      0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr className="cart-heading">
              <th>Product Image</th>
              <th>Item Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems
              .filter((item) => !removedItems.includes(item.id))
              .map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      className="cart-item-image"
                      src={item.image}
                      alt={item.title}
                    />
                  </td>
                  <td className="cart-title">{item.title}</td>
                  <td className="cart-price">${item.price}</td>
                  <td>
                    <div className="quantity">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>&nbsp;&nbsp;{quantities[item.id]}&nbsp;&nbsp;</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="remove-from-cart-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td className="cart-price">
                    ${(item.price * quantities[item.id]).toFixed(2)}
                  </td>
                </tr>
              ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="cart-subtotal">Sub Total</td>

              <td>
                <p className="cart-total">
                  Total: <strong>${cartTotal.toFixed(2)}</strong>
                </p>
                <button
                  className="checkout-btn"
                  disabled={isLoading}
                  onClick={handleCheckout}
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    <FontAwesomeIcon icon={faShoppingCart} />
                  )}
                  &nbsp; {isLoading ? "Processing" : "Checkout"}
                </button>
                {checkoutSuccess && (
                  <div className="success-popup">
                    <Alert severity="success">
                      <AlertTitle>Success</AlertTitle>
                      Your order has been placed successfully!
                    </Alert>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
