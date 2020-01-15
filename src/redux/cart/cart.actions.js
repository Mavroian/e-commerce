import CartActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})