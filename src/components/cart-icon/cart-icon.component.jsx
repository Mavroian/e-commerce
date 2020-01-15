import React from "react"
import { ReactComponent as ShppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { connect } from "react-redux"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) => {
  return {
    cartItemsCount: selectCartItemsCount(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)