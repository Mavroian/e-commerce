import { createSelector } from "reselect"

//input selector
const selectCart = (state) => {
  return state.cart
}

//output selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)
export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
})
export const selectCartItemsTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price
  }, 0)
})