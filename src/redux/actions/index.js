export const addProductToCart = product => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
})

export const removeCartItem = idRemove => ({
  type: 'REMOVE_CART_ITEM',
  idRemove
})

export const setQuantityCartItem = (idSet, quantity) => ({
  type: 'SET_QUANTITY_CART_ITEM',
  idSet,
  quantity
})
