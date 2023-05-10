import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Alert, AlertTitle } from "@mui/material";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="back-cart"></div>

      {cartItems.filter((item) => !removedItems.includes(item.id)).length ===
      0 ? (
        <div>
          <p className="cart-empty-message">𝐘𝐨𝐮𝐫 𝐜𝐚𝐫𝐭 𝐢𝐬 𝐞𝐦𝐩𝐭𝐲.</p>{" "}
          <Link className="backcart" to="/eshop">
            &nbsp;👈Go To Products
          </Link>
        </div>
      ) : (
        <div>
          <Link className="back" to="/eshop">
            &nbsp;👈Go To Products
          </Link>

          <h1 className="cart-head">𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐂𝐚𝐫𝐭</h1>

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
                        <span>
                          &nbsp;&nbsp;{quantities[item.id]}&nbsp;&nbsp;
                        </span>
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
                <td className="cart-subtotal">𝐒𝐮𝐛 𝐓𝐨𝐭𝐚𝐥 :</td>

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
                    &nbsp; {isLoading ? "𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠" : "𝐂𝐡𝐞𝐜𝐤𝐨𝐮𝐭"}
                  </button>
                  {checkoutSuccess && (
                    <div className="success-popup">
                      <Alert severity="success">
                        <AlertTitle>𝐒𝐮𝐜𝐜𝐞𝐬𝐬</AlertTitle>
                        𝐘𝐨𝐮𝐫 𝐨𝐫𝐝𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐥𝐚𝐜𝐞𝐝 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲!
                      </Alert>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Cart;
