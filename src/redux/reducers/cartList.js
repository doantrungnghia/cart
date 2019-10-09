const getInitial = () => {
  return { cart: [], productId: [] }
}

export const cartList = (state = getInitial(), action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {
        cart: state.productId.includes(action.product.id)
          ? state.cart.map(item => {
              return item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            })
          : [...state.cart, { ...action.product, quantity: 1 }],
        productId: state.productId.includes(action.product.id)
          ? state.productId
          : [...state.productId, action.product.id]
      }

    case 'REMOVE_CART_ITEM':
      return {
        cart: state.cart.filter(item => item.id !== action.idRemove),
        productId: state.productId.filter(item => item !== action.idRemove)
      }

    case 'SET_QUANTITY_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item => {
          return item.id === action.idSet
            ? { ...item, quantity: action.quantity }
            : item
        })
      }

    default:
      return state
  }
}
