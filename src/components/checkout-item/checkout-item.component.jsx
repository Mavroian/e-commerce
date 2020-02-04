import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  clearFromCart,
  addToCart
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, clearItem, addToCart }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => clearItem(cartItem)}>
          <span role="img" aria-label="delete">
            &#10134;
          </span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItem)}>
          <span role="img" aria-label="increase">
            &#10133;
          </span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        <span role="img" aria-label="delete item">
          &#10007;
        </span>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeFromCart(item)),
  clearItem: item => dispatch(clearFromCart(item)),
  addToCart: item => dispatch(addToCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
