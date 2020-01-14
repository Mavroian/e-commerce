import React from "react"
import { ReactComponent as ShppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { connect } from "react-redux"
import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)