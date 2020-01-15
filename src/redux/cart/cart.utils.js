export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      } else {
        return cartItem
      }
    }
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => {
    return item.id !== itemToRemove.id
  })
}

export const clearItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  )

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== itemToRemove.id
    })
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToRemove.id) {
      return {
        ...cartItem, quantity: cartItem.quantity - 1
      }
    } else {
      return cartItem
    }
  })
}