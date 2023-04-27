import { useSelector, useDispatch } from "react-redux";

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
    <div className="container">
      <h1 className="heading">𝐂𝐀𝐑𝐓</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-item-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3 className="head">{item.title}</h3>
                  <p className="price">${item.price}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total-container">
            <p className="cart-total">
              Total: <strong>${cartTotal.toFixed(2)}</strong>
            </p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
