import React from "react";
import CartItem from "../cart-item/cart-item.component"
import { CustomButton } from "../custom-button/custom-button.component"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import "./cart-dropdown.styles.scss"

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items" >
      {
        cartItems.length === 0 ?
          (
            <span className="empty-message">Your cart is empty</span>
          ) :
          (cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          )))
      }
    </div>
    <CustomButton onClick={() => {
      history.push("/checkout")
      toggleCartHidden()
    }}> GO TO CHECKOUT</CustomButton>
  </div>
)
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))