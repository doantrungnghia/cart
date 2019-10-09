export const addProductToCart = product => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
})

export const getProducts = () => {
  return dispatch => {
    return fetch('https://api.myjson.com/bins/178haz.json')
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(receiveProducts(response))
      })
  }
}

export const receiveProducts = products => ({
  type: 'RECEIVE_PRODUCTS',
  products
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
