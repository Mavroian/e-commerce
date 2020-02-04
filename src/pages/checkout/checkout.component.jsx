import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="total">
        <span>Total:${total}</span>
      </div>
      <div className="test-warning">
        Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - exp:01/21 cvv:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    total: selectCartItemsTotal(state)
  };
};
export default connect(mapStateToProps)(CheckoutPage);
