import { createSelector } from "reselect"

//input selector
const selectCart = (state) => {
  return state.cart
}

//output selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
})